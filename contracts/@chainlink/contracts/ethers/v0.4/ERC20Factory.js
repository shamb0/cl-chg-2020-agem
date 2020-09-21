"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ERC20Factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20Factory = ERC20Factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "value",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "who",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address"
            },
            {
                name: "value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVJDMjBGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRVJDMjBGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMEM7QUFLMUMsTUFBYSxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZSxFQUFFLGdCQUFtQztRQUNqRSxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFVLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBSkQsb0NBSUM7QUFFRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLEVBQUU7UUFDVixJQUFJLEVBQUUsYUFBYTtRQUNuQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsTUFBTTtRQUN2QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0UsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUU7WUFDTjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtn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TztLQUNkO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYXRlZCBieSB0cy1nZW5lcmF0b3IgdmVyLiAwLjAuOCAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHsgQ29udHJhY3QsIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcblxuaW1wb3J0IHsgRVJDMjAgfSBmcm9tIFwiLi9FUkMyMFwiO1xuXG5leHBvcnQgY2xhc3MgRVJDMjBGYWN0b3J5IHtcbiAgc3RhdGljIGNvbm5lY3QoYWRkcmVzczogc3RyaW5nLCBzaWduZXJPclByb3ZpZGVyOiBTaWduZXIgfCBQcm92aWRlcik6IEVSQzIwIHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIF9hYmksIHNpZ25lck9yUHJvdmlkZXIpIGFzIEVSQzIwO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwic3BlbmRlclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJhcHByb3ZlXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJvb2xcIlxuICAgICAgfVxuICAgIF0sXG4gICAgcGF5YWJsZTogZmFsc2UsXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGNvbnN0YW50OiB0cnVlLFxuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJ0b3RhbFN1cHBseVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZnJvbVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ0b1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJ0cmFuc2ZlckZyb21cIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IHRydWUsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwid2hvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImJhbGFuY2VPZlwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHBheWFibGU6IGZhbHNlLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBjb25zdGFudDogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidG9cIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwidHJhbnNmZXJcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiYm9vbFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgY29uc3RhbnQ6IHRydWUsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwib3duZXJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwic3BlbmRlclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJhbGxvd2FuY2VcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBwYXlhYmxlOiBmYWxzZSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJvd25lclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJzcGVuZGVyXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJBcHByb3ZhbFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJmcm9tXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcInRvXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJUcmFuc2ZlclwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9XG5dO1xuIl19