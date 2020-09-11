"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nomiclabs/buidler/config");
const constants_1 = require("./test/test-helpers/constants");
config_1.usePlugin('@nomiclabs/buidler-ethers');
config_1.usePlugin('@openzeppelin/buidler-upgrades');
config_1.usePlugin('@nomiclabs/buidler-waffle');
config_1.usePlugin('@nomiclabs/buidler-solpp');
config_1.usePlugin('solidity-coverage');
config_1.usePlugin('buidler-spdx-license-identifier');
const parseSolppFlags = () => {
    const flags = {};
    const solppEnv = process.env.SOLPP_FLAGS;
    if (!solppEnv) {
        return flags;
    }
    for (const flag of solppEnv.split(',')) {
        flags[flag] = true;
    }
    return flags;
};
const config = {
    networks: {
        buidlerevm: {
            accounts: constants_1.DEFAULT_ACCOUNTS_BUIDLER,
            blockGasLimit: constants_1.GAS_LIMIT * 2,
            allowUnlimitedContractSize: true,
        },
        coverage: {
            url: 'http://localhost:8555',
        },
    },
    mocha: {
        timeout: 50000,
    },
    solc: {
        version: "0.5.3",
        optimizer: { enabled: true, runs: 200 },
    },
};
exports.default = config;
//# sourceMappingURL=buidler.config.js.map