'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const Median = contract({
 "contractName": "Median",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058201790a76049bc230ccf20e68e01e052d23062e56b0d81bb2d5ca56e67127fe1e10029",
   "opcodes": "PUSH1 0x4C PUSH1 0x2C PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x0 DUP2 EQ PUSH1 0x1C JUMPI PUSH1 0x1E JUMP JUMPDEST INVALID JUMPDEST POP ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 OR SWAP1 0xa7 PUSH1 0x49 0xbc 0x23 0xc 0xcf KECCAK256 0xe6 DUP15 ADD 0xe0 MSTORE 0xd2 ADDRESS PUSH3 0xE56B0D DUP2 0xbb 0x2d 0x5c 0xa5 PUSH15 0x67127FE1E100290000000000000000 ",
   "sourceMap": "96:2804:3:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058201790a76049bc230ccf20e68e01e052d23062e56b0d81bb2d5ca56e67127fe1e10029",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 OR SWAP1 0xa7 PUSH1 0x49 0xbc 0x23 0xc 0xcf KECCAK256 0xe6 DUP15 ADD 0xe0 MSTORE 0xd2 ADDRESS PUSH3 0xE56B0D DUP2 0xbb 0x2d 0x5c 0xa5 PUSH15 0x67127FE1E100290000000000000000 ",
   "sourceMap": "96:2804:3:-;;;;;;;;"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/Median.sol\":\"Median\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/Median.sol\":{\"keccak256\":\"0x6491c1e3e3b8e12f5f4add057dbc1282aadffd3f0dfbed0046baa4b2a41e27c7\",\"urls\":[\"bzzr://1cd04dd6f0285e38b54e63aceb32ac132f9da0f532e8668561a625b2b429c6a6\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/vendor/SafeMath.sol\":{\"keccak256\":\"0x3c9aed70447b5aafb455bf2b124405f87979c19e628553c194f741660197265b\",\"urls\":[\"bzzr://560515f0c0118bae3cb38a64c2b67a75a80e87647618ba02f1e614a113cdfeea\"]},\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/vendor/SignedSafeMath.sol\":{\"keccak256\":\"0x2695f6b8893d0333f719b12156bb8e2c2589c431fdf7241aca428bd2b5564dd4\",\"urls\":[\"bzzr://b82f0e4c561256ead4b559e2bc4585731001e99b572702849cb12b918c213fe8\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('Median.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.Median = Median
