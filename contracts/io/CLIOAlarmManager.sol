// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";
import "../@chainlink/contracts/src/v0.6/ChainlinkClient.sol";

import "@nomiclabs/buidler/console.sol";

contract CLIOAlarmManager is ContractResolver, ChainlinkClient {

    address internal _oracleaddr;
    bytes32 internal _jobId;
    uint256 internal _oraclePayment;

    // event eventReceivedRandomNumber(
    //     bytes32 requestId,
    //     uint256 randomness,
    //     uint256 linkbalance
    // );

    event eventAlaramDone(
        bytes32 requestId
    );

    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
    {

    }

    // Kovan
    // LINK token address: 0xa36085F69e2889c224210F603D836748e7dC0088
    // Oracle address: 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e
    // JobID: a7ab70d561d34eb49e9b1612fd2e044b

    function initCLIOAlarmManager( ) public {

        setPublicChainlinkToken();

        _oracleaddr = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        _jobId = "a7ab70d561d34eb49e9b1612fd2e044b";
        _oraclePayment = 0.1 * 10 ** 18; // 0.1 LINK

    }

    function delayStart(
        uint256 delayInMin
    )
    public
    {
        Chainlink.Request memory req = buildChainlinkRequest(_jobId, address(this), this.fulfill.selector);
        req.addUint("until", now + ( delayInMin * 1 minutes) );
        sendChainlinkRequestTo(_oracleaddr, req, _oraclePayment);
    }

    function fulfill(bytes32 _requestId)
    public
    recordChainlinkFulfillment(_requestId)
    {
        /* additional computation here */
        emit eventAlaramDone( _requestId );
    }

}