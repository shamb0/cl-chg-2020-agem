"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buidler_1 = require("@nomiclabs/buidler");
describe("Token Test", () => {
    let wallet;
    before(async () => {
        [wallet] = await buidler_1.ethers.getSigners();
    });
    let SimpleTokenFactoryContAbs;
    let SimpleTokenFactoryInst;
    let SimpleTokenLogContAbs;
    let SimpleTokenLogInst;
    before(async () => {
        SimpleTokenFactoryContAbs = await buidler_1.ethers.getContractFactory("SimpleTokenFactory");
        SimpleTokenFactoryInst = await buidler_1.upgrades.deployProxy(SimpleTokenFactoryContAbs);
        await SimpleTokenFactoryInst.deployed();
        SimpleTokenLogContAbs = await buidler_1.ethers.getContractFactory("SimpleToken");
        SimpleTokenLogInst = await SimpleTokenLogContAbs.deploy();
    });
    it("1st Test", async () => {
        let TokenAInst;
        let TokenBInst;
        console.log("running Hi Hello !!!");
        await SimpleTokenFactoryInst.initialize(SimpleTokenLogInst.address, "Token A", "TKA", await wallet.getAddress());
        await SimpleTokenFactoryInst.initialize(SimpleTokenLogInst.address, "Token B", "TKB", await wallet.getAddress());
        TokenAInst = SimpleTokenLogContAbs.attach(await SimpleTokenFactoryInst.tokens(0));
        TokenBInst = SimpleTokenLogContAbs.attach(await SimpleTokenFactoryInst.tokens(1));
        console.log(await TokenAInst.name());
        console.log(await TokenBInst.name());
    });
});
//# sourceMappingURL=Token.spec.js.map