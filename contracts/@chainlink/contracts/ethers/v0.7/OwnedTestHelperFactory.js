"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class OwnedTestHelperFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.OwnedTestHelperFactory = OwnedTestHelperFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [],
        name: "Here",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "OwnershipTransferRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "modifierOnlyOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556103c8806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806379ba5097146100515780638da5cb5b1461005b578063d1f4537e1461008c578063f2fde38b14610094575b600080fd5b6100596100c7565b005b6100636101c9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596101e5565b610059600480360360208110156100aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610296565b60015473ffffffffffffffffffffffffffffffffffffffff16331461014d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461026b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b6040517ffe92bbc330eb12cd316e909741296a7fbde0684922f2564d9a9021f08959374090600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea2646970667358221220c3ce01bcfc6700f729c5dc246c887ecddeef5abcef4300a5549e21817830bb6b64736f6c63430007000033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3duZWRUZXN0SGVscGVyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk93bmVkVGVzdEhlbHBlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLHNCQUF1QixTQUFRLHdCQUFlO0lBQ3pELFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTZCLENBQUM7SUFDN0QsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFvQixDQUFDO0lBQ2xELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUEyQixDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBb0IsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUF2QkQsd0RBdUJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSw0QkFBNEI7UUFDbEMsSUFBSSxFQUFFLE9BQU87S0FDZDtJQUNEO1FBQ0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUUsRUFBRTtRQUNYLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxtQkFBbUI7UUFDekIsT0FBTyxFQUFFLEVBQUU7UUFDWCxlQUFlLEVBQUUsWUFBWTtRQUM3QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixPQUFPLEVBQUUsRUFBRTtRQUNYLGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUNiLHcvREFBdy9ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IE93bmVkVGVzdEhlbHBlciB9IGZyb20gXCIuL093bmVkVGVzdEhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgT3duZWRUZXN0SGVscGVyRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFByb21pc2U8T3duZWRUZXN0SGVscGVyPiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8T3duZWRUZXN0SGVscGVyPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBPd25lZFRlc3RIZWxwZXIge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgT3duZWRUZXN0SGVscGVyO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBPd25lZFRlc3RIZWxwZXJGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIE93bmVkVGVzdEhlbHBlckZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IE93bmVkVGVzdEhlbHBlciB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBPd25lZFRlc3RIZWxwZXI7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcIkhlcmVcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiZnJvbVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJ0b1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJPd25lcnNoaXBUcmFuc2ZlclJlcXVlc3RlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInRvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIk93bmVyc2hpcFRyYW5zZmVycmVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiYWNjZXB0T3duZXJzaGlwXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJtb2RpZmllck9ubHlPd25lclwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwib3duZXJcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiX3RvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcInRyYW5zZmVyT3duZXJzaGlwXCIsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfVxuXTtcblxuY29uc3QgX2J5dGVjb2RlID1cbiAgXCIweDYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwMDA4MDU0NjAwMTYwMDE2MGEwMWIwMzE5MTYzMzE3OTA1NTYxMDNjODgwNjEwMDMyNjAwMDM5NjAwMGYzZmU2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MDA0MzYxMDYxMDA0YzU3NjAwMDM1NjBlMDFjODA2Mzc5YmE1MDk3MTQ2MTAwNTE1NzgwNjM4ZGE1Y2I1YjE0NjEwMDViNTc4MDYzZDFmNDUzN2UxNDYxMDA4YzU3ODA2M2YyZmRlMzhiMTQ2MTAwOTQ1NzViNjAwMDgwZmQ1YjYxMDA1OTYxMDBjNzU2NWIwMDViNjEwMDYzNjEwMWM5NTY1YjYwNDA4MDUxNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MjE2ODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWI2MTAwNTk2MTAxZTU1NjViNjEwMDU5NjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAwYWE1NzYwMDA4MGZkNWI1MDM1NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MTAyOTY1NjViNjAwMTU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTYzMzE0NjEwMTRkNTc2MDQwODA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDIwNjAwNDgyMDE1MjYwMTY2MDI0ODIwMTUyN2Y0ZDc1NzM3NDIwNjI2NTIwNzA3MjZmNzA2ZjczNjU2NDIwNmY3NzZlNjU3MjAwMDAwMDAwMDAwMDAwMDAwMDAwNjA0NDgyMDE1MjkwNTE5MDgxOTAwMzYwNjQwMTkwZmQ1YjYwMDA4MDU0MzM3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MDgzMTY4MjE3ODQ1NTYwMDE4MDU0OTA5MTE2OTA1NTYwNDA1MTczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjkwOTIxNjkyOTA5MTgzOTE3ZjhiZTAwNzljNTMxNjU5MTQxMzQ0Y2QxZmQwYTRmMjg0MTk0OTdmOTcyMmEzZGFhZmUzYjQxODZmNmI2NDU3ZTA5MWEzNTA1NjViNjAwMDU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY4MTU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTAyNmI1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRmNmU2Yzc5MjA2MzYxNmM2YzYxNjI2YzY1MjA2Mjc5MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjA0MDUxN2ZmZTkyYmJjMzMwZWIxMmNkMzE2ZTkwOTc0MTI5NmE3ZmJkZTA2ODQ5MjJmMjU2NGQ5YTkwMjFmMDg5NTkzNzQwOTA2MDAwOTBhMTU2NWI2MDAwNTQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTAzMWM1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxNjYwMjQ4MjAxNTI3ZjRmNmU2Yzc5MjA2MzYxNmM2YzYxNjI2YzY1MjA2Mjc5MjA2Zjc3NmU2NTcyMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNjAwMTgwNTQ3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgzODExNjkxODIxNzkwOTI1NTYwMDA4MDU0NjA0MDUxOTI5MzE2OTE3ZmVkODg4OWY1NjAzMjZlYjEzODkyMGQ4NDIxOTJmMGViM2RkMjJiNGYxMzljODdhMmM1NzUzOGUwNWJhZTEyNzg5MTkwYTM1MDU2ZmVhMjY0Njk3MDY2NzM1ODIyMTIyMGMzY2UwMWJjZmM2NzAwZjcyOWM1ZGMyNDZjODg3ZWNkZGVlZjVhYmNlZjQzMDBhNTU0OWUyMTgxNzgzMGJiNmI2NDczNmY2YzYzNDMwMDA3MDAwMDMzXCI7XG4iXX0=