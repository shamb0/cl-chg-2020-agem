import { Contract, ContractFactory, Signer } from 'ethers'

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'

export const ZERO_ADDRESS = '0x' + '00'.repeat(20)
export const INVALID_ADDRESS = '0xdeaDDeADDEaDdeaDdEAddEADDEAdDeadDEADDEaD'

export interface ContractDeployOptions {
  factory: ContractFactory
  params: any[]
  signer: Signer
}

export type ContractFactoryName =
  | 'ECUManager'
  | 'GEFTokenManager'
  | 'CLIOAlarmManager'
  | 'CLIOVRFManager'
  | 'GEFMain'

export interface ContractDeployConfig {
  ECUManager: ContractDeployOptions
  GEFTokenManager: ContractDeployOptions
  CLIOAlarmManager: ContractDeployOptions
  CLIOVRFManager: ContractDeployOptions
  GEFMain: ContractDeployOptions
}

interface ContractMapping {
  ECUManager: Contract
  GEFTokenManager: Contract
  CLIOAlarmManager: Contract
  CLIOVRFManager: Contract
  GEFMain: Contract
}

export interface AddressResolverMapping {
  addressResolver: Contract
  contracts: ContractMapping
}

export const factoryToContractName = {
  ECUManager: 'ECUManager',
  GEFTokenManager: 'GEFTokenManager',
  CLIOAlarmManager: 'CLIOAlarmManager',
  CLIOVRFManager: 'CLIOVRFManager',
  GEFMain: 'GEFMain',
}

export interface TstAppDeployConfig {
  signer: Signer
  addressResolverContractAddress?: string
  addressResolverConfig?: ContractDeployOptions
  contractDeployConfig?: Partial<ContractDeployConfig>
  dependencies?: ContractFactoryName[]
}
