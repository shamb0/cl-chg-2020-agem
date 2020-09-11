pragma solidity ^0.5.3;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/upgrades/contracts/upgradeability/ProxyFactory.sol";

contract SimpleTokenFactory is Initializable, ProxyFactory {
    address[] public tokens;

    event TokenCreated(address indexed tokenAddress);

    function initialize(address logic, string calldata name, string calldata symbol, address holder) external {

        bytes memory payload = abi.encodeWithSignature("initialize(string,string,address)", name, symbol, holder);

        // Deploy minimal proxy
        address token = deployMinimal(logic, payload);
        emit TokenCreated(token);

        tokens.push(token);
    }
}