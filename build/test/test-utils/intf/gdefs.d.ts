import { Contract, ContractFactory, Signer } from 'ethers';
export declare const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const ZERO_ADDRESS: string;
export declare const INVALID_ADDRESS = "0xdeaDDeADDEaDdeaDdEAddEADDEAdDeadDEADDEaD";
export interface ContractDeployOptions {
    factory: ContractFactory;
    params: any[];
    signer: Signer;
}
export declare type ContractFactoryName = 'ECUManager' | 'GEFTokenManager' | 'CLIOManager' | 'GEFMain';
export interface ContractDeployConfig {
    ECUManager: ContractDeployOptions;
    GEFTokenManager: ContractDeployOptions;
    CLIOManager: ContractDeployOptions;
    GEFMain: ContractDeployOptions;
}
interface ContractMapping {
    ECUManager: Contract;
    GEFTokenManager: Contract;
    CLIOManager: Contract;
    GEFMain: Contract;
}
export interface AddressResolverMapping {
    addressResolver: Contract;
    contracts: ContractMapping;
}
export declare const factoryToContractName: {
    ECUManager: string;
    GEFTokenManager: string;
    CLIOManager: string;
    GEFMain: string;
};
export interface TstAppDeployConfig {
    signer: Signer;
    addressResolverContractAddress?: string;
    addressResolverConfig?: ContractDeployOptions;
    contractDeployConfig?: Partial<ContractDeployConfig>;
    dependencies?: ContractFactoryName[];
}
export {};
