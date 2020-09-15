import { expect } from './setup'

/* External Imports */
import { ethers } from '@nomiclabs/buidler'
import { Contract, ContractFactory, Signer, providers } from 'ethers'
import {
  TstAppDeployConfig,
  factoryToContractName,
  AddressResolverMapping,
  getContractFactory
} from './test-utils'
import { deployAllContracts } from './test-helpers'
import { getLogger } from './test-utils'

const log = getLogger('GEFMain-Test')

describe('GEFMain Test', () => {
  let wallet: Signer
  let owner1: Signer
  let owner2: Signer
  let gefcontr: Contract

  let deployproxy: boolean = false

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

  before(async () => {

    let proxycontfact: ContractFactory
    let proxycont: Contract

    proxycontfact = getContractFactory( "CLIOManagerProxy", wallet )

    if( deployproxy === true ){

      proxycont = await proxycontfact.deploy( resolver.addressResolver.address )

    }
    else{

      proxycont = new Contract( "0xdFEA251B02AE23eCCf89cFECe25AD6C5a30f1b0C",
                                proxycontfact.interface,
                                wallet
                            )
    }

    const res: providers.TransactionResponse = await resolver.addressResolver.setAddress(
      "CLIOManagerProxy",
      proxycont.address
    )
    await resolver.addressResolver.provider.waitForTransaction(res.hash)
    log.debug(
      `Registered "CLIOManagerProxy" with AddressResolver (${proxycont.address})`
    )

    const tempcliomgr = await resolver.contracts[factoryToContractName.CLIOManager].address

    log.debug(
      `"CLIOManager address (${tempcliomgr})`
    )

    await proxycont.updateImplementation( tempcliomgr )

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
    let loopiter: number = 10

    while (loopiter > 0) {
      await gefcontr.scanECUStatus()

      gefbalance = await gefcontr.viewGEFBalance(await owner1.getAddress())

      log.debug(`${loopiter} :: GEF Balance :: ${gefbalance}`)

      loopiter--
    }
  })
})
