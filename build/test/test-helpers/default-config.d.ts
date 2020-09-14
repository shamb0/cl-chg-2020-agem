import { Signer } from 'ethers';
import { ContractDeployConfig } from '../test-utils';
export declare const getDefaultContractDeployConfig: (addressResolverAddress: string, deployerWallet: Signer) => Promise<ContractDeployConfig>;
export declare const mergeDefaultConfig: (addressResolverAddress: string, config?: Partial<ContractDeployConfig>, signer?: Signer) => Promise<ContractDeployConfig>;
