// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;


import { UpgradableProxy } from "../infra/proxy/UpgradableProxy.sol";
import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";

contract CLIOManagerProxy is ContractResolver, UpgradableProxy {

    /**
     * @param _addressResolver Address of the AddressResolver contract.
     */
    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
        UpgradableProxy()
    {

    }

}
