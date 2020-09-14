pragma solidity ^0.5.0;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";

import { ERC20Detailed } from "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import { ERC20Mintable } from "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract GEFTokenManager is ContractResolver, ERC20Detailed, ERC20Mintable, ERC20Burnable {

    /**
     * @param _addressResolver Address of the AddressResolver contract.
     */
    constructor(
        address _addressResolver,
        string memory name,
        string memory symbol,
        uint8 decimals
    )
        public
        ContractResolver(_addressResolver)
        ERC20Detailed( name, symbol, decimals )
    {

    }

}