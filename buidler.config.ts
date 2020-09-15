import fs from "fs"
import * as dotenv from "dotenv"

import { usePlugin, BuidlerConfig } from "@nomiclabs/buidler/config"

import {
  DEFAULT_ACCOUNTS_BUIDLER,
  GAS_LIMIT,
} from "./test/test-helpers/constants"

usePlugin("@nomiclabs/buidler-ethers")
usePlugin("@nomiclabs/buidler-waffle")
usePlugin("@nomiclabs/buidler-solpp")
usePlugin("solidity-coverage")
usePlugin("buidler-spdx-license-identifier")

console.log(`$(process.argv.length)`)

const envfile = `./.env.shamb0.lab1`
const envfilestate = fs.existsSync(envfile)

if (envfilestate == false) {
  console.log(`File :: ${envfile} not exist`)
} else {
  const result = dotenv.config({ path: envfile })

  if (result.error) {
    throw result.error
  }

  // console.log(process.env.INFURA_PROJECT_ID)
  // console.log(process.env.KOVAN_PRIVATE_KEY)
  // console.log( result.parsed )
}

const parseSolppFlags = (): { [flag: string]: boolean } => {
  const flags: { [flag: string]: boolean } = {}

  const solppEnv = process.env.SOLPP_FLAGS
  if (!solppEnv) {
    return flags
  }

  for (const flag of solppEnv.split(",")) {
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
      url: "http://localhost:8555",
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [
        `0x${process.env.KOVAN_PRIVATE_KEY_WALLET}`,
        `0x${process.env.KOVAN_PRIVATE_KEY_OWNER1}`,
        `0x${process.env.KOVAN_PRIVATE_KEY_OWNER2}`,
      ],
    },
  },
  mocha: {
    timeout: 5000000,
  },
  solc: {
    // version: "0.5.3",
    version: "0.6.6",
    optimizer: { enabled: true, runs: 200 },
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
}

export default config
