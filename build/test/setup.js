"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.should = void 0;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const bignum = require("chai-bignumber");
const ethereum_waffle_1 = require("ethereum-waffle");
chai.use(bignum());
chai.use(chaiAsPromised);
chai.use(ethereum_waffle_1.solidity);
const should = chai.should();
exports.should = should;
const expect = chai.expect;
exports.expect = expect;
//# sourceMappingURL=setup.js.map