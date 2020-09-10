import { usePlugin, BuidlerConfig } from '@nomiclabs/buidler/config'

import {
  DEFAULT_ACCOUNTS_BUIDLER,
  GAS_LIMIT,
} from './test/test-helpers/constants'

usePlugin('@nomiclabs/buidler-ethers')
usePlugin('@openzeppelin/buidler-upgrades')
usePlugin('@nomiclabs/buidler-waffle')
usePlugin('@nomiclabs/buidler-solpp')
usePlugin('solidity-coverage')
usePlugin('buidler-spdx-license-identifier')

const parseSolppFlags = (): { [flag: string]: boolean } => {
  const flags: { [flag: string]: boolean } = {}

  const solppEnv = process.env.SOLPP_FLAGS
  if (!solppEnv) {
    return flags
  }

  for (const flag of solppEnv.split(',')) {
    flags[flag] = true
  }

  return flags
}

const config: BuidlerConfig = {
  networks: {
    buidlerevm: {
      accounts: DEFAULT_ACCOUNTS_BUIDLER,
      blockGasLimit: GAS_LIMIT * 2,
      allowUnlimitedContractSize: true, // TEMPORARY: Will be fixed by AddressResolver PR.
    },
    coverage: {
      url: 'http://localhost:8555',
    },
  },
  mocha: {
    timeout: 50000,
  },
  solc: {
    version: "0.5.17",
    optimizer: { enabled: true, runs: 200 },
  },
}

export default config
