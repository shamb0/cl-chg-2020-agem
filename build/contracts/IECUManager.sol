pragma solidity ^0.5.0;
/**
 * @title IECUManager
 * @notice The Energy Charging Unit Manager Interface definitions
 */
contract IECUManager {

    /***************
    * ChainLink IO *
    ****************/

    function getStorage(
        address _ovmContractAddress,
        bytes32 _slot
    ) public returns (bytes32);

}
