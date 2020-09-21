// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

import { ICLIOManager } from "../indef/ICLIOManager.sol";
import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";
import { VRFConsumerBaseUpgrade } from "../@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

import "@nomiclabs/buidler/console.sol";

contract CLIOVRFManager is ContractResolver, VRFConsumerBaseUpgrade, ICLIOManager {

    bytes32 internal keyHash;
    uint256 internal fee;

    uint256 public usrlinkBalance;

    // event eventReceivedRandomNumber(
    //     bytes32 requestId,
    //     uint256 randomness,
    //     uint256 linkbalance
    // );

    event eventReceivedRandomNumber(
        bytes32 requestId,
        uint256 randomness
    );

    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
    {

    }

    /**
     * Constructor inherits VRFConsumerBase
     *
     * Network: Kovan
     * Chainlink VRF Coordinator address: 0xf490AC64087d59381faF8Bf49Da299C073aAC152
     * LINK token address:                0xa36085F69e2889c224210F603D836748e7dC0088
     * Key Hash: 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4
     */
    // constructor( )
    //     public
    //     VRFConsumerBase(
    //         0xf490AC64087d59381faF8Bf49Da299C073aAC152, // VRF Coordinator
    //         0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
    //     )
    // {
    //     keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
    //     fee = 0.1 * 10 ** 18; // 0.1 LINK
    // }


    function initCLIOManager( ) public {

        initVRFConsumerBase(
            0xf490AC64087d59381faF8Bf49Da299C073aAC152, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        );

        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK

    }

    /**
     * Requests randomness from a user-provided seed
     */
    function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 requestId) {
        usrlinkBalance = LINK.balanceOf(address(this));
        require( usrlinkBalance > fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee, userProvidedSeed);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {

        randomResult = randomness;
        // emit eventReceivedRandomNumber( requestId, randomness, LINK.balanceOf(address(this)));
        emit eventReceivedRandomNumber( requestId, randomness);
        console.log("nodeid: %s,", randomness);

    }

    function getUserLinkBalance() public view returns (uint256) {
        return usrlinkBalance;
    }

}