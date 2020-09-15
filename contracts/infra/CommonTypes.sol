// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;


import "@openzeppelin/contracts/math/SafeMath.sol";
// import "@openzeppelin/contracts/math/SignedSafeMath.sol";

/**
 * @title CommonTypes
 * @notice Common data structures shared among GEM sub smart contracts.
 */
library CommonTypes {

    using SafeMath for uint256;
    using SafeMath for int8;

    struct ECUNodeInfo {
        string  nodeid;
        bytes32 nodehash;
        address ioaddr;
        address owner;

        uint256 lastmeasuredreading;
        uint256 totalpowergenerated;
        int8    lastcomupower;
    }

    struct UserInfo {
        bool active;
        string[] ecunodelist;
    }

}