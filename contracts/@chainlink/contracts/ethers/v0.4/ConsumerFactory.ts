/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Consumer } from "./Consumer";

export class ConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<Consumer> {
    return super.deploy(overrides) as Promise<Consumer>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): Consumer {
    return super.attach(address) as Consumer;
  }
  connect(signer: Signer): ConsumerFactory {
    return super.connect(signer) as ConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Consumer {
    return new Contract(address, _abi, signerOrProvider) as Consumer;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_price",
        type: "bytes32"
      }
    ],
    name: "fulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_currency",
        type: "string"
      }
    ],
    name: "requestEthereumPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_payment",
        type: "uint256"
      },
      {
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "_expiration",
        type: "uint256"
      }
    ],
    name: "cancelRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "price",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052600160045534801561001557600080fd5b50611216806100256000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663042f2b6581146100715780636c0cae681461008e5780638dc654a2146100e75780639d1b464a146100fc578063ec65d0f814610123575b600080fd5b34801561007d57600080fd5b5061008c600435602435610166565b005b34801561009a57600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261008c9436949293602493928401919081908401838280828437509497506102af9650505050505050565b3480156100f357600080fd5b5061008c610462565b34801561010857600080fd5b50610111610622565b60408051918252519081900360200190f35b34801561012f57600080fd5b5061008c6004356024357fffffffff0000000000000000000000000000000000000000000000000000000060443516606435610628565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461022057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051829084907f0c2366233f634048c0f0458060d1228fab36d00f7c0ecf6bdf2d9c458503631190600090a35060075550565b6102b761119d565b60606102e96006543063042f2b657c010000000000000000000000000000000000000000000000000000000002610634565b91506103b76040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a5059000000000000000000000000000000000000000000000000008152508461065f9092919063ffffffff16565b60408051600180825281830190925290816020015b60608152602001906001900390816103cc579050509050828160008151811015156103f357fe5b9060200190602002018190525061044a6040805190810160405280600481526020017f7061746800000000000000000000000000000000000000000000000000000000815250828461068e9092919063ffffffff16565b61045c82670de0b6b3a7640000610701565b50505050565b600061046c610731565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925073ffffffffffffffffffffffffffffffffffffffff83169163a9059cbb91339184916370a082319160248083019260209291908290030181600087803b1580156104e757600080fd5b505af11580156104fb573d6000803e3d6000fd5b505050506040513d602081101561051157600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff861602815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561058657600080fd5b505af115801561059a573d6000803e3d6000fd5b505050506040513d60208110156105b057600080fd5b5051151561061f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e61626c6520746f207472616e736665720000000000000000000000000000604482015290519081900360640190fd5b50565b60075481565b61045c8484848461074d565b61063c61119d565b61064461119d565b6106568186868663ffffffff61088816565b95945050505050565b6080830151610674908363ffffffff6108ea16565b6080830151610689908263ffffffff6108ea16565b505050565b60808301516000906106a6908463ffffffff6108ea16565b6106b38460800151610907565b5060005b81518110156106f4576106ec82828151811015156106d157fe5b6020908102909101015160808601519063ffffffff6108ea16565b6001016106b7565b61045c8460800151610912565b6003546000906107289073ffffffffffffffffffffffffffffffffffffffff16848461091d565b90505b92915050565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b15801561086957600080fd5b505af115801561087d573d6000803e3d6000fd5b505050505050505050565b61089061119d565b6108a08560800151610100610c7f565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b6108f78260038351610cb9565b610689828263ffffffff610db616565b61061f816004610dd0565b61061f816007610dd0565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106109d157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610994565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610ac287610de9565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b62578181015183820152602001610b4a565b50505050905090810190601f168015610b8f5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610bb057600080fd5b505af1158015610bc4573d6000803e3d6000fd5b505050506040513d6020811015610bda57600080fd5b50511515610c6f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b610c876111d2565b6020820615610c9c5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b60178111610cdb57610cd58360ff848116602002168317610f9b565b50610689565b60ff8111610d0f57610cfc836018602060ff8616021763ffffffff610f9b16565b50610cd58382600163ffffffff610fb316565b61ffff8111610d4457610d31836019602060ff8616021763ffffffff610f9b16565b50610cd58382600263ffffffff610fb316565b63ffffffff8111610d7b57610d6883601a602060ff8616021763ffffffff610f9b16565b50610cd58382600463ffffffff610fb316565b67ffffffffffffffff811161068957610da383601b602060ff8616021763ffffffff610f9b16565b5061045c8382600863ffffffff610fb316565b610dbe6111d2565b61072883846000015151848551610fd4565b61068982601f602060ff8516021763ffffffff610f9b16565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b83811015610ede578181015183820152602001610ec6565b50505050905090810190601f168015610f0b5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b610fa36111d2565b61072883846000015151846110c6565b610fbb6111d2565b610fcc848560000151518585611111565b949350505050565b610fdc6111d2565b600080600085518511151515610ff157600080fd5b8760200151858801111561101b5761101b886110138a602001518a890161116f565b600202611186565b8751805188602083010194508089880111156110375788870182525b60208801935050505b6020851061108057815183527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09094019360209283019290910190611040565b505181516020949094036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909116931692909217909152509192915050565b6110ce6111d2565b602084015183106110ea576110ea848560200151600202611186565b8351805160208583010184815381861415611106576001820183525b509495945050505050565b6111196111d2565b6000856020015185840111156111385761113886868501600202611186565b6001836101000a03905085518386820101858319825116178152815185880111156111635784870182525b50959695505050505050565b60008183111561118057508161072b565b50919050565b81516111928383610c7f565b5061045c8382610db6565b6040805160c0810182526000808252602082018190529181018290526060810191909152608081016111cd6111d2565b905290565b604080518082019091526060815260006020820152905600a165627a7a72305820b36fd059864ec52687fceb03284c1236ebe0b5b5a8191b06b5149e6dad3b25680029";
