"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buidler_1 = require("@nomiclabs/buidler");
const test_utils_1 = require("./test-utils");
const test_helpers_1 = require("./test-helpers");
const test_utils_2 = require("./test-utils");
const log = test_utils_2.getLogger('GEFMain-Test');
describe("GEFMain Test", () => {
    let wallet;
    let owner1;
    let gefcontr;
    before(async () => {
        [wallet, owner1] = await buidler_1.ethers.getSigners();
    });
    let resolver;
    before(async () => {
        const config = {
            signer: wallet,
        };
        resolver = await test_helpers_1.deployAllContracts(config);
        let contractDeployed;
        Object.values(test_utils_1.factoryToContractName).forEach((contractName) => {
            contractDeployed = !!resolver.contracts[contractName];
            contractDeployed.should.equal(true, `Contract ${contractName} was not deployed!`);
        });
    });
    beforeEach(async () => {
        gefcontr = resolver.contracts[test_utils_1.factoryToContractName.GEFMain];
    });
    it('Register User Owner1', async () => {
        await gefcontr.regiGEFUser(await owner1.getAddress());
    });
    it('Register ECU Node', async () => {
        await gefcontr.regiECUNode("ECU-DEV-91-2020-001", await owner1.getAddress());
    });
    it('Update ECU Status', async () => {
        let gefbalance = 0;
        await gefcontr.scanECUStatus();
        gefbalance = await gefcontr.viewGEFBalance(await owner1.getAddress());
        log.debug(`GEF Balance :: ${gefbalance}`);
    });
});
//# sourceMappingURL=GEFMain.spec.js.map