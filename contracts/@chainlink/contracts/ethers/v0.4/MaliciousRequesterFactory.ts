/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MaliciousRequester } from "./MaliciousRequester";

export class MaliciousRequesterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): Promise<MaliciousRequester> {
    return super.deploy(_link, _oracle, overrides) as Promise<
      MaliciousRequester
    >;
  }
  getDeployTransaction(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _oracle, overrides);
  }
  attach(address: string): MaliciousRequester {
    return super.attach(address) as MaliciousRequester;
  }
  connect(signer: Signer): MaliciousRequesterFactory {
    return super.connect(signer) as MaliciousRequesterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousRequester {
    return new Contract(address, _abi, signerOrProvider) as MaliciousRequester;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_callbackFunc",
        type: "bytes"
      }
    ],
    name: "maliciousRequestCancel",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "maliciousWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "doesNothing",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_target",
        type: "address"
      }
    ],
    name: "maliciousTargetConsumer",
    outputs: [
      {
        name: "requestId",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_target",
        type: "address"
      },
      {
        name: "_callbackFunc",
        type: "bytes"
      }
    ],
    name: "request",
    outputs: [
      {
        name: "requestId",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "maliciousPrice",
    outputs: [
      {
        name: "requestId",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_oracle",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
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
  "0x6080604052600160045560016006553480156200001b57600080fd5b50604051604080620019d2833981016040528051602090910151620000498264010000000062000065810204565b6200005d816401000000006200007c810204565b5050620000d4565b620000798164010000000062000090810204565b50565b6200007981640100000000620000b2810204565b60028054600160a060020a031916600160a060020a0392909216919091179055565b60038054600160a060020a031916600160a060020a0392909216919091179055565b6118ee80620000e46000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631188ffff811461007c5780631ea3949e146100dc5780631eb0f610146100f1578063cae2d8881461010c578063dac4c1251461014c578063e325a118146101c2575b600080fd5b34801561008857600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100da9583359536956044949193909101919081908401838280828437509497506101da9650505050505050565b005b3480156100e857600080fd5b506100da6102be565b3480156100fd57600080fd5b506100da600435602435610325565b34801561011857600080fd5b5061013a73ffffffffffffffffffffffffffffffffffffffff60043516610329565b60408051918252519081900360200190f35b34801561015857600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261013a948235946024803573ffffffffffffffffffffffffffffffffffffffff16953695946064949201919081908401838280828437509497506103af9650505050505050565b3480156101ce57600080fd5b5061013a600435610470565b60006101e46104b9565b90508073ffffffffffffffffffffffffffffffffffffffff16636ee4d55361020d8530866103af565b6008546040805163ffffffff85167c01000000000000000000000000000000000000000000000000000000000281526004810193909352670de0b6b3a764000060248401527f1188ffff000000000000000000000000000000000000000000000000000000006044840152606483019190915251608480830192600092919082900301818387803b1580156102a157600080fd5b505af11580156102b5573d6000803e3d6000fd5b50505050505050565b6102c6611875565b6103117f7370656349640000000000000000000000000000000000000000000000000000307f1eb0f610000000000000000000000000000000000000000000000000000000006104c8565b905061032581670de0b6b3a76400006104ea565b5050565b6000610333611875565b6103937f73706563496400000000000000000000000000000000000000000000000000008460405180807f66756c66696c6c28627974657333322c627974657333322900000000000000008152506018019050604051809103902061086c565b90506103a88382670de0b6b3a7640000610887565b9392505050565b60006103b9611875565b61043e8585856040518082805190602001908083835b6020831061040c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016103cf565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902061086c565b90506104524261012c63ffffffff610c0a16565b60085561046781670de0b6b3a7640000610c1d565b95945050505050565b600061047a611875565b6104a583307f1eb0f6100000000000000000000000000000000000000000000000000000000061086c565b90506103a881670de0b6b3a7640000610c29565b60006104c3610dee565b905090565b6104d0611875565b6104d8611875565b6104678186868663ffffffff610e0a16565b60008030600654604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b6020831061059f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610562565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790526040519201829003909120600654606089015294506105fd92506104b9915050565b60008381526007602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9490941693909317909255905183917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a261067f610e6b565b90508073ffffffffffffffffffffffffffffffffffffffff16634000aea06106a56104b9565b856106af88610e75565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561074f578181015183820152602001610737565b50505050905090810190601f16801561077c5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561079d57600080fd5b505af11580156107b1573d6000803e3d6000fd5b505050506040513d60208110156107c757600080fd5b5051151561085c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f556e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6006805460010190555092915050565b610874611875565b61087f848484611007565b949350505050565b60008084600654604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b6020831061093c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016108ff565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909116921691909117905260405192018290039091206006546060890152945061099a92506104b9915050565b60008381526007602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9490941693909317909255905183917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a2610a1c610e6b565b90508073ffffffffffffffffffffffffffffffffffffffff16634000aea0610a426104b9565b85610a4c88611029565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610aec578181015183820152602001610ad4565b50505050905090810190601f168015610b195780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610b3a57600080fd5b505af1158015610b4e573d6000803e3d6000fd5b505050506040513d6020811015610b6457600080fd5b50511515610bf957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f556e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600680546001019055509392505050565b81810182811015610c1757fe5b92915050565b60006103a88383611234565b60008030600654604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610cde57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610ca1565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199091169216919091179052604051920182900390912060065460608901529450610d3c92506104b9915050565b60008381526007602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9490941693909317909255905183917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a2610dbe610e6b565b90508073ffffffffffffffffffffffffffffffffffffffff16634000aea0610de46104b9565b856106af8861125b565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b610e12611875565b610e21856080015160806113b1565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b60006104c36113eb565b604080517f776974686472617728616464726573732c75696e74323536290000000000000081528151908190036019018120602080850151938501516060868101516080808901515173ffffffffffffffffffffffffffffffffffffffff8916602489019081527fffffffff00000000000000000000000000000000000000000000000000000000861660448a01526064890184905260848901928352815160a48a0152815194999798959693959194909360c49092019185019080838360005b83811015610f4e578181015183820152602001610f36565b50505050905090810190601f168015610f7b5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090991698909817909752509495505050505050919050565b61100f611875565b611017611875565b6104678186868663ffffffff61140716565b604080517f6f7261636c655265717565737428616464726573732c75696e743235362c627981527f74657333322c616464726573732c6279746573342c75696e743235362c75696e6020808301919091527f743235362c62797465732900000000000000000000000000000000000000000082840152825191829003604b0182208451858301519486015160608781015160808901515160006024890181815260448a0182905260648a0187905273ffffffffffffffffffffffffffffffffffffffff8b1660848b01527fffffffff00000000000000000000000000000000000000000000000000000000861660a48b015260c48a01849052600160e48b018190526101006101048c0190815284516101248d01528451969c999b939a8b9a9897929594919261014490920191908501908083838e5b8381101561117757818101518382015260200161115f565b50505050905090810190601f1680156111a45780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b6003546000906103a89073ffffffffffffffffffffffffffffffffffffffff16848461141f565b604080517f6f7261636c655265717565737428616464726573732c75696e743235362c627981527f74657333322c616464726573732c6279746573342c75696e743235362c75696e6020808301919091527f743235362c62797465732900000000000000000000000000000000000000000082840152825191829003604b01822084518583015194860151606087810151608089015151600060248901818152671bc16d674ec8000060448b0181905260648b0188905273ffffffffffffffffffffffffffffffffffffffff8c1660848c01527fffffffff00000000000000000000000000000000000000000000000000000000871660a48c015260c48b01859052600160e48c018190526101006101048d0190815285516101248e01528551979d9a9c949b929a9897919594909261014490910191908501908083838f8381101561117757818101518382015260200161115f565b6113b96118aa565b60208206156113ce5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b61140f611875565b610e2185608001516101006113b1565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106114d357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611496565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea085846115c487611781565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561166457818101518382015260200161164c565b50505050905090810190601f1680156116915780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1580156116b257600080fd5b505af11580156116c6573d6000803e3d6000fd5b505050506040513d60208110156116dc57600080fd5b5051151561177157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e8381101561117757818101518382015260200161115f565b6040805160c0810182526000808252602082018190529181018290526060810191909152608081016118a56118aa565b905290565b604080518082019091526060815260006020820152905600a165627a7a7230582005363350d0b44306c69d371623f925ad0ca9a10f51babfa583c8521c77aa330e0029";
