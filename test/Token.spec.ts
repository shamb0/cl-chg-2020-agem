import { expect } from "./setup";

/* External Imports */
import { ethers, upgrades } from "@nomiclabs/buidler";
import { ContractFactory, Contract, Signer } from "ethers";
import { NULL_ADDRESS } from "./test-helpers/misc";

describe("Token Test", () => {
  let wallet: Signer;

  before(async () => {
    [wallet] = await ethers.getSigners();
  });

  let SimpleTokenFactoryContAbs: ContractFactory;
  let SimpleTokenFactoryInst: Contract;

  let SimpleTokenLogContAbs: ContractFactory;
  let SimpleTokenLogInst: Contract;

  before(async () => {
    SimpleTokenFactoryContAbs = await ethers.getContractFactory("SimpleTokenFactory");
    SimpleTokenFactoryInst = await upgrades.deployProxy( SimpleTokenFactoryContAbs );
    await SimpleTokenFactoryInst.deployed();

    SimpleTokenLogContAbs = await ethers.getContractFactory("SimpleToken");
    SimpleTokenLogInst = await SimpleTokenLogContAbs.deploy();
  });

  it( "1st Test", async () => {

    let TokenAInst: Contract;
    let TokenBInst: Contract;

    console.log("running Hi Hello !!!");

    await SimpleTokenFactoryInst.initialize(SimpleTokenLogInst.address, "Token A", "TKA", await wallet.getAddress())
    await SimpleTokenFactoryInst.initialize(SimpleTokenLogInst.address, "Token B", "TKB", await wallet.getAddress())

    TokenAInst = SimpleTokenLogContAbs.attach(await SimpleTokenFactoryInst.tokens(0))
    TokenBInst = SimpleTokenLogContAbs.attach(await SimpleTokenFactoryInst.tokens(1))

    console.log( await TokenAInst.name() )
    console.log( await TokenBInst.name() )

  });

});
