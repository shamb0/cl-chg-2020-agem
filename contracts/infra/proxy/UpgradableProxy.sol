// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

pragma experimental ABIEncoderV2;

import {Proxy} from "./Proxy.sol";
import {OwnableProxy} from "./OwnableProxy.sol";

import "@nomiclabs/buidler/console.sol";

contract UpgradableProxy is OwnableProxy, Proxy {
    bytes32 constant IMPLEMENTATION_SLOT = keccak256("proxy.implementation");

    event ProxyUpdated(address indexed previousImpl, address indexed newImpl);

    fallback() external payable {
        delegatedFwd(implementation(), msg.data);
    }

    receive () external payable virtual {

    }

    function implementation() public override view returns(address _impl) {
        bytes32 position = IMPLEMENTATION_SLOT;
        assembly {
            _impl := sload(position)
        }
    }

    // ACLed on onlyOwner via the call to updateImplementation()
    function updateAndCall(address _newProxyTo, bytes memory data) public {
        updateImplementation(_newProxyTo);
        // sometimes required to initialize the contract
        (bool success, bytes memory returnData) = address(this).call(data);
        require(success, string(returnData));
    }

    function updateImplementation(address _newProxyTo) public onlyOwner {
        require(_newProxyTo != address(0x0), "INVALID_PROXY_ADDRESS");
        require(isContract(_newProxyTo), "DESTINATION_ADDRESS_IS_NOT_A_CONTRACT");
        emit ProxyUpdated(implementation(), _newProxyTo);
        console.log("updateImplementation Addr: %s,", address(this));
        setImplementation(_newProxyTo);
    }

    function setImplementation(address _newProxyTo) private {
        bytes32 position = IMPLEMENTATION_SLOT;
        assembly {
            sstore(position, _newProxyTo)
        }
    }

    function isContract(address _target) internal view returns (bool) {
        if (_target == address(0)) {
            return false;
        }
        uint size;
        assembly {
            size := extcodesize(_target)
        }
        return size > 0;
    }
}
