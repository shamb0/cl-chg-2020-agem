// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";

import { ERC20PresetMinterPauser } from "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";
// import { ERC20Detailed } from "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract GEFTokenManager is ContractResolver, ERC20PresetMinterPauser {

    /**
     * @param _addressResolver Address of the AddressResolver contract.
     */
    constructor(
        address _addressResolver,
        string memory name,
        string memory symbol
    )
        public
        ContractResolver(_addressResolver)
        ERC20PresetMinterPauser( name, symbol )
    {

    }

}