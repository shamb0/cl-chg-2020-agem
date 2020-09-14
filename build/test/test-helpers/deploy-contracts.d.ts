import { Contract } from 'ethers';
import { AddressResolverMapping, ContractDeployOptions, TstAppDeployConfig } from '../test-utils';
export declare const deployAndRegister: (addressResolver: Contract, name: string, deployConfig: ContractDeployOptions) => Promise<Contract>;
export declare const deployAllContracts: (config: TstAppDeployConfig) => Promise<AddressResolverMapping>;
