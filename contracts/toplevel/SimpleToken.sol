// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.5.3;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Detailed.sol";


/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the sender.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract SimpleToken is Initializable, ERC20, ERC20Detailed {

    /**
     * @dev initialize that gives holder all of existing tokens.
     */
    function initialize(string memory name, string memory symbol, address holder) public initializer {
        ERC20Detailed.initialize(name, symbol, 18);
        _mint(holder, 1000000 * (10 ** uint256(decimals())));
    }
}