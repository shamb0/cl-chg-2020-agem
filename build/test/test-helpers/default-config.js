"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDefaultConfig = exports.getDefaultContractDeployConfig = void 0;
const test_utils_1 = require("../test-utils");
exports.getDefaultContractDeployConfig = async (addressResolverAddress, deployerWallet) => {
    return {
        ECUManager: {
            factory: test_utils_1.getContractFactory('ECUManager'),
            params: [addressResolverAddress],
            signer: deployerWallet,
        },
        GEFTokenManager: {
            factory: test_utils_1.getContractFactory('GEFTokenManager'),
            params: [addressResolverAddress,
                "Green Energy Farm",
                "GEF",
                18],
            signer: deployerWallet,
        },
        CLIOManager: {
            factory: test_utils_1.getContractFactory('CLIOManager'),
            params: [addressResolverAddress],
            signer: deployerWallet,
        },
        GEFMain: {
            factory: test_utils_1.getContractFactory('GEFMain'),
            params: [addressResolverAddress],
            signer: deployerWallet,
        },
    };
};
exports.mergeDefaultConfig = async (addressResolverAddress, config, signer) => {
    const defaultConfig = await exports.getDefaultContractDeployConfig(addressResolverAddress, signer);
    return Object.assign(Object.assign({}, defaultConfig), (config || {}));
};
//# sourceMappingURL=default-config.js.map