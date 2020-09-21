/* External Imports */
import { Signer } from "ethers"

/* Internal Imports */
import { getContractFactory, ContractDeployConfig } from "../test-utils"

/**
 * Generates the default deployment configuration. Runs as an async function
 * because we need to get the contract factories async via buidler.
 * @param addressResolverAddress The address of the AddressResolver contract.
 * @param deployerWallet The Signer used to deploy contracts.
 * @returns Default address resolver deployment configuration.
 */
export const getDefaultContractDeployConfig = async (
  addressResolverAddress: string,
  deployerWallet: Signer
): Promise<ContractDeployConfig> => {
  return {
    ECUManager: {
      factory: getContractFactory("ECUManager"),
      params: [addressResolverAddress],
      signer: deployerWallet,
    },
    GEFTokenManager: {
      factory: getContractFactory("GEFTokenManager"),
      params: [addressResolverAddress, "Green Energy Farm", "GEF"],
      signer: deployerWallet,
    },
    CLIOAlarmManager: {
      factory: getContractFactory("CLIOAlarmManager"),
      params: [addressResolverAddress],
      signer: deployerWallet,
    },
    CLIOVRFManager: {
      factory: getContractFactory("CLIOVRFManager"),
      params: [addressResolverAddress],
      signer: deployerWallet,
    },
    GEFMain: {
      factory: getContractFactory("GEFMain"),
      params: [addressResolverAddress],
      signer: deployerWallet,
    },
  }
}

/**
 * Merges the given config with the default config.
 * @param addressResolverAddress The address of the AddressResolver contract.
 * @param config Config to merge with default.
 * @param signer Signer to use to deploy contracts.
 * @param options Rollup chain options.
 */
export const mergeDefaultConfig = async (
  addressResolverAddress: string,
  config?: Partial<ContractDeployConfig>,
  signer?: Signer
): Promise<ContractDeployConfig> => {
  const defaultConfig = await getDefaultContractDeployConfig(
    addressResolverAddress,
    signer
  )

  return {
    ...defaultConfig,
    ...(config || {}),
  }
}
