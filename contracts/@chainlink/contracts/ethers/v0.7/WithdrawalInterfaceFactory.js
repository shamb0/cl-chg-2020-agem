"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class WithdrawalInterfaceFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.WithdrawalInterfaceFactory = WithdrawalInterfaceFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "withdrawable",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2l0aGRyYXdhbEludGVyZmFjZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaXRoZHJhd2FsSW50ZXJmYWNlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTBDO0FBSzFDLE1BQWEsMEJBQTBCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUF3QixDQUFDO0lBQzlFLENBQUM7Q0FDRjtBQVBELGdFQU9DO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGNBQWM7UUFDcEIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBTaWduZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJldGhlcnMvcHJvdmlkZXJzXCI7XG5cbmltcG9ydCB7IFdpdGhkcmF3YWxJbnRlcmZhY2UgfSBmcm9tIFwiLi9XaXRoZHJhd2FsSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBXaXRoZHJhd2FsSW50ZXJmYWNlRmFjdG9yeSB7XG4gIHN0YXRpYyBjb25uZWN0KFxuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduZXJPclByb3ZpZGVyOiBTaWduZXIgfCBQcm92aWRlclxuICApOiBXaXRoZHJhd2FsSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIF9hYmksIHNpZ25lck9yUHJvdmlkZXIpIGFzIFdpdGhkcmF3YWxJbnRlcmZhY2U7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInJlY2lwaWVudFwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJhbW91bnRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwid2l0aGRyYXdcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcIndpdGhkcmF3YWJsZVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG4iXX0=