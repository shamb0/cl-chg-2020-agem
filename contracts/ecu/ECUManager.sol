// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";
import { CommonTypes } from "../infra/CommonTypes.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
// import "@openzeppelin/contracts/math/SignedSafeMath.sol";

import { ICLIOManager } from "../indef/ICLIOManager.sol";

import "@nomiclabs/buidler/console.sol";

contract ECUManager is ContractResolver {

    using SafeMath for uint256;
    using SafeMath for int8;
    using SafeMath for uint;

    uint private nonce = 0;

    mapping (bytes32 => CommonTypes.ECUNodeInfo) private ECUNodeList;

    /**
     * @param _addressResolver Address of the AddressResolver contract.
     */
    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
    {

    }

    /*
     * Internal Functions
     */

    function random() private returns (uint256) {
        // ICLIOManager clio = ICLIOManager( resolveContract( 'CLIOVRFManager' ) );
        uint256 randomnumber = uint(keccak256(abi.encodePacked(now, msg.sender, nonce))) % 100;
        randomnumber = randomnumber + 1;
        nonce++;
        // randomnumber = randomnumber.add( clio.randomResult() ) % 10;
        return randomnumber;
    }

    /*
     * Public Functions
     */

    function getECUNode(
            string memory _ecunodeid
    )
        public view returns (CommonTypes.ECUNodeInfo memory)
    {
        CommonTypes.ECUNodeInfo memory ecunodeptr = ECUNodeList[ keccak256(abi.encodePacked(_ecunodeid)) ];
        return ecunodeptr;
    }

    function regiECUNode(
            string memory _ecunodeid,
            address _ecunodeowner
    )
        public
    {
        bytes32 ecunodehash;
        ecunodehash = keccak256(abi.encodePacked(_ecunodeid));
        CommonTypes.ECUNodeInfo storage ecunodeptr = ECUNodeList[ ecunodehash ];

        require(
            ecunodeptr.nodehash != ecunodehash,
            "Err :: ECU Node already registered"
        );

        ecunodeptr.nodeid = _ecunodeid;
        ecunodeptr.nodehash = ecunodehash;
        ecunodeptr.ioaddr = address(0);
        ecunodeptr.owner = _ecunodeowner;
    }

    function printECUNode(
            string memory _ecunodeid
    )
        public view
    {
        CommonTypes.ECUNodeInfo memory ecunodeptr = getECUNode( _ecunodeid );

        console.log("nodeid: %s,", ecunodeptr.nodeid);
        console.logBytes32(ecunodeptr.nodehash);
        console.log("owner: %s,", ecunodeptr.owner);
    }

    function getECUGeneratedEnergyUnits(
            string memory _ecunodeid
    )
        public returns( int8 )
    {
        uint256  currmeterreading;
        uint256  powercompu = 0;
        bytes32  ecunodehash;
        ecunodehash = keccak256(abi.encodePacked(_ecunodeid));
        CommonTypes.ECUNodeInfo storage ecunodeptr = ECUNodeList[ ecunodehash ];

        require(
            keccak256(abi.encodePacked(ecunodeptr.nodeid)) == keccak256(abi.encodePacked(_ecunodeid)),
            "Err Inavlid argument");

        // Talk to the external device unit via ChainLink & get the generated energy units
        currmeterreading = random();

        // currmeterreading = call to Chainlink Oracles

        // compare new reading with previous one ...

        // TODO :: "SafeMath: subtraction overflow"

        if( currmeterreading >= ecunodeptr.lastmeasuredreading )
        {
            powercompu = currmeterreading.sub( ecunodeptr.lastmeasuredreading );
        }
        else
        {
            powercompu = currmeterreading;
        }

        if( powercompu == 0 )
        {
            ecunodeptr.lastcomupower = -1;
        }
        else
        {
            ecunodeptr.lastmeasuredreading = currmeterreading;
            ecunodeptr.lastcomupower = int8(powercompu);
            ecunodeptr.totalpowergenerated = ecunodeptr.totalpowergenerated.add(powercompu);
        }

        return( ecunodeptr.lastcomupower );
    }

}