// pragma solidity ^0.5.0;
pragma solidity ^0.6.6;

pragma experimental ABIEncoderV2;

import { ContractResolver } from "../infra/resolvers/ContractResolver.sol";
import { GEFTokenManager } from "../gef/GEFTokenManager.sol";
import { ECUManager } from "../ecu/ECUManager.sol";
import { CommonTypes } from "../infra/CommonTypes.sol";

import "@nomiclabs/buidler/console.sol";

contract GEFMain is ContractResolver {

    /*
     * Contract Variables
     */
    address[] private userList;
    mapping (address => CommonTypes.UserInfo) private userEcuMap;

    /*
     * Constructor
     */

    /**
     * @param _addressResolver Address of the AddressResolver contract.
     */
    constructor(
        address _addressResolver
    )
        public
        ContractResolver(_addressResolver)
    {
        // #if FLAG_IS_DEBUG
        console.log("Calling GEFMain Constructor !!!");
        // #endif
    }

    /*
     * Internal Functions
     */


    /*
     * Public Functions
     */

    function regiGEFUser( address _newuser ) public {

        CommonTypes.UserInfo storage userinfo = userEcuMap[_newuser];

        require( !userinfo.active, "Err User already in list");

        userinfo.active = true;
        userList.push( _newuser );

    }

    function regiECUNode(
            string memory _ecunodeid,
            address _ecunodeowner
    )
        public
    {
        CommonTypes.UserInfo storage userinfo = userEcuMap[_ecunodeowner];

        ECUManager ecumgr = ECUManager( resolveContract( 'ECUManager' ) );

        require( userinfo.active, "Err Invalid User/not active !!!" );

        ecumgr.regiECUNode( _ecunodeid, _ecunodeowner );

        userinfo.ecunodelist.push( _ecunodeid );

        ecumgr.printECUNode( _ecunodeid );
    }

    function scanECUStatus() public {

        int8    lastcomupower;
        ECUManager ecumgr = ECUManager( resolveContract( 'ECUManager' ) );
        GEFTokenManager geftokmgr = GEFTokenManager( resolveContract( 'GEFTokenManager' ) );

        for (uint8 i=0; i<userList.length; i++) {

            CommonTypes.UserInfo storage userinfo = userEcuMap[userList[i]];

            if( userinfo.active == true ){

                for (uint8 j=0; j<userinfo.ecunodelist.length; j++) {

                    lastcomupower = ecumgr.getECUGeneratedEnergyUnits( userinfo.ecunodelist[j] );

                    if( lastcomupower > 0 )
                    {
                        // deposit the GEF tokens to user wallet
                        geftokmgr.mint( userList[i], uint256(lastcomupower));
                    }

                }

            }

        }

    }

    function viewGEFBalance( address _ecunodeowner ) public view returns (uint256) {
        uint256 gefbalance = 0;
        GEFTokenManager geftokmgr = GEFTokenManager( resolveContract( 'GEFTokenManager' ) );
        CommonTypes.UserInfo storage userinfo = userEcuMap[_ecunodeowner];

        require( userinfo.active, "Err Invalid User/not active !!!" );

        gefbalance = geftokmgr.balanceOf( _ecunodeowner );

        console.log("User Gef Balance %s", gefbalance );

        return gefbalance;
    }

}
