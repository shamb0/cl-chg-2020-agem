// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

/**
 * @title IECUManager
 * @notice The Energy Charging Unit Manager Interface definitions
 */
abstract contract IECUManager {

    /***************
    * ChainLink IO *
    ****************/

    function getStorage(
        address _ovmContractAddress,
        bytes32 _slot
    ) public virtual returns (bytes32);

}
