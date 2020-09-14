import { ContractFactory, Signer } from 'ethers';
import { Interface } from 'ethers/lib/utils';
export declare const getContractDefinition: (name: string) => any;
export declare const getContractInterface: (name: string) => Interface;
export declare const getContractFactory: (name: string, signer?: Signer) => ContractFactory;
