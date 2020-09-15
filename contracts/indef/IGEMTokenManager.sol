// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

/**
 * @title IGEMTokenManager
 * @notice The GEM Token Manager Interface definitions
 */
abstract contract IGEMTokenManager {

    /***************
    * ChainLink IO *
    ****************/

    function getStorage(
        address _ovmContractAddress,
        bytes32 _slot
    ) public virtual returns (bytes32);

}
