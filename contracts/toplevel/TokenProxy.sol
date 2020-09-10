pragma solidity 0.5.17;

import {UpgradableProxy} from "../infra/proxy/UpgradableProxy.sol";

contract TokenProxy is UpgradableProxy {
    constructor() public UpgradableProxy() {}
}
