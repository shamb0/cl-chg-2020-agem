import { expect } from './setup'

/* External Imports */
import { ethers } from '@nomiclabs/buidler'
import { Contract, ContractFactory, Signer, providers, BigNumber, utils } from 'ethers'
import {
  TstAppDeployConfig,
  factoryToContractName,
  AddressResolverMapping,
  getContractFactory,
  sleep, sendLT, getBalanceLT
} from './test-utils'

import { deployAllContracts } from './test-helpers'
import { getLogger } from './test-utils'

const log = getLogger('GEFMain-Test')

describe('GEFMain Test', () => {
  let wallet: Signer
  let owner1: Signer
  let owner2: Signer
  let gefcontr: Contract
  let deployproxycont: boolean = false

  before(async () => {
    ;[wallet, owner1, owner2] = await ethers.getSigners()

    log.info(`Admin :: ${await wallet.getAddress()}`)
    log.info(`Own1 :: ${await owner1.getAddress()}`)
    log.info(`Own2 :: ${await owner2.getAddress()}`)
  })

  let resolver: AddressResolverMapping
  before(async () => {
    const config: TstAppDeployConfig = {
      signer: wallet,
    }

    resolver = await deployAllContracts(config)

    let contractDeployed: boolean
    Object.values(factoryToContractName).forEach((contractName) => {
      contractDeployed = !!resolver.contracts[contractName]
      contractDeployed.should.equal(
        true,
        `Contract ${contractName} was not deployed!`
      )
    })
  })


  let cliovrfproxyfact: ContractFactory
  let cliovrfproxyinst: Contract
  let cliovrffact: ContractFactory
  let cliovrfimplinst: Contract
  let cliovrfimplshadowinst: Contract

  before(async () => {

    cliovrfproxyfact = getContractFactory( "CLIOVRFProxy", wallet )
    cliovrffact = getContractFactory( "CLIOVRFManager", wallet )

    cliovrfimplinst = await resolver.contracts[factoryToContractName.CLIOVRFManager]

    if( deployproxycont === true ){

      // Deploy the proxy for the firsttime ...
      cliovrfproxyinst = await cliovrfproxyfact.deploy()
      log.info(`Deployed at ${cliovrfproxyinst.address}`)

      cliovrfimplshadowinst = new Contract( cliovrfproxyinst.address ,
                                            cliovrffact.interface,
                                            wallet
                                          )

    }
    else{

      // Re-use the deployed proxy ...
      cliovrfproxyinst = new Contract( "0x2CB302a16008fA21341eDeacF7AfE6Da2c3D0896",
                                        cliovrfproxyfact.interface,
                                        wallet
                                        )

      cliovrfimplshadowinst = new Contract( "0x2CB302a16008fA21341eDeacF7AfE6Da2c3D0896",
                                        cliovrffact.interface,
                                        wallet
                                        )
    }

    await cliovrfproxyinst.updateImplementation( cliovrfimplinst.address );
    await cliovrfimplshadowinst.initCLIOManager( );

    log.debug( `VRF Proxy Cont @ ${cliovrfproxyinst.address}`)
    log.debug( `VRF Impl Cont @ ${cliovrfimplinst.address}`)

  })

  let clioalarmproxyfact: ContractFactory
  let clioalarmproxyinst: Contract
  let clioalarmimplfact: ContractFactory
  let clioalarmimplinst: Contract
  let clioalarmimplshadowinst: Contract

  before(async () => {

    clioalarmproxyfact = getContractFactory( "CLIOAlarmProxy", wallet )
    clioalarmimplfact = getContractFactory( "CLIOAlarmManager", wallet )
    clioalarmimplinst = await resolver.contracts[factoryToContractName.CLIOAlarmManager]

    if( deployproxycont === true ){

      clioalarmproxyinst = await clioalarmproxyfact.deploy()
      log.info(`Deployed at ${clioalarmproxyinst.address}`)

      clioalarmimplshadowinst = new Contract( clioalarmproxyinst.address ,
                                              clioalarmimplfact.interface,
                                              wallet
                                              )

    }
    else{

        clioalarmproxyinst = new Contract( "0x72543F9c9172Fa71Aa01662AF938f23F4Fde2Fe8",
                                          clioalarmproxyfact.interface,
                                          wallet
                                      )

        clioalarmimplshadowinst = new Contract( "0x72543F9c9172Fa71Aa01662AF938f23F4Fde2Fe8",
                                          clioalarmimplfact.interface,
                                          wallet
                                        )
    }

    await clioalarmproxyinst.updateImplementation( clioalarmimplinst.address );
    await clioalarmimplshadowinst.initCLIOAlarmManager();

    log.debug( `Alarm Proxy Cont @ ${clioalarmproxyinst.address}`)
    log.debug( `Alarm Impl Cont @ ${clioalarmimplinst.address}`)

  })


  beforeEach("Check Alarm proxy LT Balance and refill", async () => {

    try{

      let walletltbal: string = await getBalanceLT( wallet, await wallet.getAddress() )
      let proxyltbal: string = await getBalanceLT( wallet, clioalarmproxyinst.address )

      log.debug( `wallet LT Balance  :: ${ walletltbal }` )
      log.debug( `Alarm proxy LT Balance :: ${ proxyltbal }` )

      let ltbalthreashold = BigNumber.from("10")
      let bnproxyltbal = utils.parseUnits( proxyltbal, 18 )

      if( bnproxyltbal.lte( ltbalthreashold ) === true ){

        await sendLT( wallet, clioalarmproxyinst.address, "10" )

      }

    }catch(err){

      log.error(err);

      await sendLT( wallet, clioalarmproxyinst.address, "10" )
    }


    try{

      let walletltbal: string = await getBalanceLT( wallet, await wallet.getAddress() )
      let proxyltbal: string = await getBalanceLT( wallet, cliovrfproxyinst.address )

      log.debug( `wallet LT Balance  :: ${ walletltbal }` )
      log.debug( `VRF proxy LT Balance :: ${ proxyltbal }` )

      let ltbalthreashold = BigNumber.from("10")
      let bnproxyltbal = utils.parseUnits( proxyltbal, 18 )

      if( bnproxyltbal.lte( ltbalthreashold ) === true ){

        await sendLT( wallet, cliovrfproxyinst.address, "10" )

      }

    }catch(err){

      log.error(err);

      await sendLT( wallet, cliovrfproxyinst.address, "10" )
    }

  })


  beforeEach(async () => {
    gefcontr = resolver.contracts[factoryToContractName.GEFMain]
  })

  it('Register User Owner1', async () => {
    await gefcontr.regiGEFUser(await owner1.getAddress())
  })

  it('Register ECU Node', async () => {
    await gefcontr.regiECUNode('ECU-DEV-91-2020-001', await owner1.getAddress())
  })

  it('Update ECU Status', async () => {
    let gefbalance: number = 0
    let loopiter: number = 1

    while (loopiter > 0) {


      try{

        let iseventfired: boolean = false

        log.info(`iter count :: ${loopiter}`)

        // Profile the Start Time-Stamp ...
        let tsbefore = new Date()
        log.debug( `TS @ iter start ${tsbefore}`)

        // Configure the Alarm to fire after 1 min ...
        await clioalarmimplshadowinst.delayStart( 1 )

        // Register for the event-callback ...
        clioalarmimplshadowinst.once( "eventAlaramDone", ( requestId ) => {

          iseventfired = true
          log.info( `ReqID :: ${requestId}`);

        })

          // Poll for the event-callback ...
        while( iseventfired === false ){
          await sleep( 1 * 1000 ) //sleep for 5 sec, poll for the event
          // log.info( `Blocked for event notif state(${eventoccur})`);
        }

        // Profile the End Time-Stamp ...
        let tsafter = new Date()
        log.debug( `TS @ iter end ${tsafter}`)

      }catch(err){

        log.error(err);

      }

      await gefcontr.scanECUStatus()

      gefbalance = await gefcontr.viewGEFBalance(await owner1.getAddress())

      log.debug(`${loopiter} :: GEF Balance :: ${gefbalance}`)

      loopiter--

    }
  })
})
