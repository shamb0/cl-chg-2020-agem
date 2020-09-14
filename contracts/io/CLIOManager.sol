pragma solidity ^0.5.0;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";

contract CLIOManager is ContractResolver {

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

}
