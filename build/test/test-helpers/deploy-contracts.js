"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployAllContracts = exports.deployAndRegister = void 0;
const test_utils_1 = require("../test-utils");
const ethers_1 = require("ethers");
const test_utils_2 = require("../test-utils");
const default_config_1 = require("./default-config");
const test_utils_3 = require("../test-utils");
const log = test_utils_1.getLogger('deploy-contract');
const deployContract = async (config) => {
    config.factory = config.factory.connect(config.signer);
    const rawTx = config.factory.getDeployTransaction(...config.params);
    const deployResult = await config.signer.sendTransaction({
        data: rawTx.data,
        gasLimit: 9500000,
        gasPrice: 2000000000,
        value: 0,
        nonce: await config.signer.getTransactionCount('pending'),
    });
    const receipt = await config.signer.provider.waitForTransaction(deployResult.hash);
    const contract = new ethers_1.Contract(receipt.contractAddress, config.factory.interface, config.signer);
    contract.deployTransaction = deployResult;
    return contract;
};
exports.deployAndRegister = async (addressResolver, name, deployConfig) => {
    log.debug(`Deploying ${name} with params: [${[...deployConfig.params]}]...`);
    const deployedContract = await deployContract(deployConfig);
    const deployTxHash = deployedContract.deployTransaction.hash;
    const deployTxReceipt = await addressResolver.provider.getTransactionReceipt(deployTxHash);
    log.info(`Deployed ${name} at address ${deployedContract.address}.`);
    log.debug(`${name} deploy tx (hash: ${deployTxHash}) used ${deployTxReceipt.gasUsed.toNumber()} gas.`);
    log.debug(`Registering ${name} with AddressResolver`);
    const res = await addressResolver.setAddress(name, deployedContract.address);
    await addressResolver.provider.waitForTransaction(res.hash);
    log.debug(`Registered ${name} with AddressResolver (${addressResolver.address})`);
    return deployedContract;
};
exports.deployAllContracts = async (config) => {
    let addressResolver;
    if (!config.addressResolverContractAddress) {
        if (!config.addressResolverConfig) {
            config.addressResolverConfig = {
                factory: test_utils_2.getContractFactory('AddressResolver'),
                params: [],
                signer: config.signer,
            };
        }
        log.debug(`No deployed AddressResolver found. Deploying...`);
        addressResolver = await deployContract(config.addressResolverConfig);
        log.info(`Deployed AddressResolver to ${addressResolver.address}`);
    }
    else {
        log.info(`Using deployed AddressResolver at address ${config.addressResolverContractAddress}`);
        addressResolver = new ethers_1.Contract(config.addressResolverContractAddress, test_utils_2.getContractInterface('AddressResolver'), config.signer);
    }
    const deployConfig = await default_config_1.mergeDefaultConfig(addressResolver.address, config.contractDeployConfig, config.signer);
    const contracts = {};
    for (const name of Object.keys(deployConfig)) {
        if (!config.dependencies || config.dependencies.includes(name)) {
            const contractName = test_utils_3.factoryToContractName[name];
            const deployedAddress = await addressResolver.getAddress(name);
            if (!!deployedAddress && deployedAddress !== test_utils_1.ZERO_ADDRESS) {
                log.info(`Using existing deployed and registered contract for ${name} at address ${deployedAddress}`);
                contracts[contractName] = new ethers_1.Contract(deployedAddress, deployConfig[name].factory.interface, config.signer);
                continue;
            }
            contracts[contractName] = await exports.deployAndRegister(addressResolver, name, deployConfig[name]);
            if (contractName == 'GEFTokenManager') {
                const gefMainName = test_utils_3.factoryToContractName.GEFMain;
                await contracts[contractName].addMinter(await addressResolver.getAddress(gefMainName));
                log.info(`${gefMainName} at address ${await addressResolver.getAddress(gefMainName)} added as Minter`);
            }
        }
    }
    return {
        addressResolver,
        contracts,
    };
};
//# sourceMappingURL=deploy-contracts.js.map