/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Reverter } from "./Reverter";

export class ReverterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Reverter> {
    return super.deploy(overrides) as Promise<Reverter>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Reverter {
    return super.attach(address) as Reverter;
  }
  connect(signer: Signer): ReverterFactory {
    return super.connect(signer) as ReverterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Reverter {
    return new Contract(address, _abi, signerOrProvider) as Reverter;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609280601d6000396000f3fe608060408190527f08c379a00000000000000000000000000000000000000000000000000000000081526020608452601660a4527f5261697365642062792052657665727465722e736f6c0000000000000000000060c452606490fdfea2646970667358221220ebc27fe1db8db9f2d9e087d5d0c7f2771a21bbc24db51b7c3f0fa452057ed30964736f6c63430006060033";