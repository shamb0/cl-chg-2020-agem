// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

pragma experimental ABIEncoderV2;

import "@nomiclabs/buidler/console.sol";

interface IERCProxy {
    function proxyType() external virtual pure returns (uint proxyTypeId);
    function implementation() external virtual view returns (address codeAddr);
}
