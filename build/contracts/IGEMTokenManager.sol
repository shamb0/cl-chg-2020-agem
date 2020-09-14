pragma solidity ^0.5.0;
/**
 * @title IGEMTokenManager
 * @notice The GEM Token Manager Interface definitions
 */
contract IGEMTokenManager {

    /***************
    * ChainLink IO *
    ****************/

    function getStorage(
        address _ovmContractAddress,
        bytes32 _slot
    ) public returns (bytes32);

}
