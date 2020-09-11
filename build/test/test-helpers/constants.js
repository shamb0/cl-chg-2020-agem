"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAS_LIMIT = exports.DEFAULT_ACCOUNTS_BUIDLER = exports.DEFAULT_ACCOUNTS = void 0;
const ethereum_waffle_1 = require("ethereum-waffle");
exports.DEFAULT_ACCOUNTS = ethereum_waffle_1.defaultAccounts;
exports.DEFAULT_ACCOUNTS_BUIDLER = ethereum_waffle_1.defaultAccounts.map((account) => {
    return {
        balance: "1000",
        privateKey: account.secretKey,
    };
});
exports.GAS_LIMIT = 1000000000;
//# sourceMappingURL=constants.js.map