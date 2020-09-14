import { expect } from "./setup";

/* External Imports */
import { ethers } from "@nomiclabs/buidler";
import { Contract, Signer } from "ethers";
import { TstAppDeployConfig, factoryToContractName, AddressResolverMapping } from "./test-utils";
import { deployAllContracts } from "./test-helpers";
import { getLogger } from './test-utils'

const log = getLogger('GEFMain-Test')

describe("GEFMain Test", () => {
  let wallet: Signer;
  let owner1: Signer;
  let gefcontr: Contract;

  before(async () => {
    [wallet, owner1] = await ethers.getSigners();
  });

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

  beforeEach(async () => {
    gefcontr = resolver.contracts[ factoryToContractName.GEFMain ];
  })

  it('Register User Owner1', async () => {

    await gefcontr.regiGEFUser( await owner1.getAddress())

  })

  it('Register ECU Node', async () => {

    await gefcontr.regiECUNode("ECU-DEV-91-2020-001", await owner1.getAddress())

  })

  it('Update ECU Status', async () => {

    let gefbalance: number = 0
    let loopiter: number = 10

    while (loopiter > 0) {

      await gefcontr.scanECUStatus()

      gefbalance = await gefcontr.viewGEFBalance( await owner1.getAddress() )

      log.debug(`${loopiter} :: GEF Balance :: ${gefbalance}`)

      loopiter--

    }

  })

});
