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

  let TokenProxyFactory: ContractFactory;
  let TokenFactory: ContractFactory;
  let TokenProxyInst: Contract;

  before(async () => {
    TokenProxyFactory = await ethers.getContractFactory("TokenProxy");
    TokenProxyInst = await upgrades.deployProxy( TokenProxyFactory );
    await TokenProxyInst.deployed();

    TokenFactory = await ethers.getContractFactory("Token");
  });

  let TokenInst: Contract;

  beforeEach(async () => {
    const TokenInst = await upgrades.upgradeProxy(TokenProxyInst.address, TokenFactory);
  });

  it( "1st Test", async () => {
      console.log("running Hi Hello !!!")
  });

});

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("Box");
  const instance = await upgrades.deployProxy(Box, [42]);
  await instance.deployed();

  // Upgrading
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}
