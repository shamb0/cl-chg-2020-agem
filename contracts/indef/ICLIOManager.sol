// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

/**
 * @title ICLIOManager
 * @notice The ChainLinkIO Manager Interface definitions
 */
abstract contract ICLIOManager {

    /***************
    * ChainLink IO *
    ****************/

    function getRandomNumber(uint256 userProvidedSeed) public virtual returns (bytes32 requestId);
}