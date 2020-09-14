pragma solidity ^0.5.0;
/**
 * @title ICLIOManager
 * @notice The ChainLinkIO Manager Interface definitions
 */
contract ICLIOManager {

    /***************
    * ChainLink IO *
    ****************/

    function getStorage(
        address _ovmContractAddress,
        bytes32 _slot
    ) public returns (bytes32);

}