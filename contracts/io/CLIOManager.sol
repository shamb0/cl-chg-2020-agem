// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";
import { Initializable } from "../infra/proxy/Initializable.sol";
import { OwnableProxy } from "../infra/proxy/OwnableProxy.sol";
import { ICLIOManager } from "../indef/ICLIOManager.sol";

// import { ChainlinkClient } from "@chainlink/contracts/src/v0.5/ChainlinkClient.sol";

import { VRFConsumerBase } from "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

import "@nomiclabs/buidler/console.sol";

contract CLIOManager is ContractResolver, OwnableProxy, Initializable, VRFConsumerBase, ICLIOManager {

    bytes32 internal keyHash;
    uint256 internal fee;

    uint256 public randomResult;

    /**
     * Constructor inherits VRFConsumerBase
     *
     * Network: Kovan
     * Chainlink VRF Coordinator address: 0xf490AC64087d59381faF8Bf49Da299C073aAC152
     * LINK token address:                0xa36085F69e2889c224210F603D836748e7dC0088
     * Key Hash: 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4
     */
    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
        VRFConsumerBase(
            0xf490AC64087d59381faF8Bf49Da299C073aAC152, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        )
    {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    /**
     * Requests randomness from a user-provided seed
     */
    function getRandomNumber(uint256 userProvidedSeed) public override returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee, userProvidedSeed);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {

        randomResult = randomness;
        console.log("nodeid: %s,", randomness);

    }
}