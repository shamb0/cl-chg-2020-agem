"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_BIG_NUM = exports.ONE_HALF = exports.THREE = exports.TWO = exports.ONE = exports.ZERO = exports.BigNumber = exports.LITTLE_ENDIAN = exports.BIG_ENDIAN = void 0;
const BigNum = require("bn.js");
const assert = __importStar(require("assert"));
exports.BIG_ENDIAN = 'B';
exports.LITTLE_ENDIAN = 'L';
class BigNumber {
    constructor(number, base, endian) {
        const parsedNumber = number instanceof BigNumber ? number.num : number;
        const endianness = !!endian ? this.getBigNumEndianness(endian) : undefined;
        if (!!base) {
            this.num = new BigNum(parsedNumber, base, endianness);
        }
        else if (!!endian) {
            this.num = new BigNum(parsedNumber, endianness);
        }
        else {
            this.num = new BigNum(parsedNumber);
        }
    }
    static min(left, right) {
        return new BigNumber(BigNum.min(left.num, right.num));
    }
    static max(left, right) {
        return new BigNumber(BigNum.max(left.num, right.num));
    }
    static isBigNumber(num) {
        if (num instanceof BigNumber) {
            return BigNum.isBN(num.num);
        }
        return false;
    }
    clone() {
        return new BigNumber(this);
    }
    toString(base = 'hex', length) {
        return length === undefined
            ? this.num.toString(base)
            : this.num.toString(base, length);
    }
    toJSON() {
        return this.toString('hex');
    }
    toNumber() {
        return this.num.toNumber();
    }
    toBuffer(endian, length) {
        if (endian) {
            const endianness = this.getBigNumEndianness(endian);
            if (length) {
                return this.num.toBuffer(endianness, length);
            }
            return this.num.toBuffer(endianness);
        }
        return this.num.toBuffer();
    }
    add(other) {
        return new BigNumber(this.num.add(other.num));
    }
    sub(other) {
        return new BigNumber(this.num.sub(other.num));
    }
    mul(other) {
        return new BigNumber(this.num.mul(other.num));
    }
    div(other) {
        return new BigNumber(this.num.div(other.num));
    }
    divRound(other) {
        const thisAbs = this.abs();
        const otherAbs = other.abs();
        const remainderAbs = thisAbs.mod(otherAbs);
        const div = this.div(other);
        if (remainderAbs.eq(exports.ZERO)) {
            return div;
        }
        const decimalAbs = remainderAbs.div(otherAbs);
        if (decimalAbs.gte(exports.ONE_HALF)) {
            if (div.num.isNeg()) {
                return div.add(remainderAbs).sub(exports.ONE);
            }
            else {
                return div.sub(remainderAbs).add(exports.ONE);
            }
        }
        else {
            if (div.num.isNeg()) {
                return div.add(remainderAbs);
            }
            else {
                return div.sub(remainderAbs);
            }
        }
    }
    pow(exp) {
        assert.ok(exp.mod(exports.ONE).eq(exports.ZERO), 'BigNumber.pow(...) does not support fractions at this time.');
        assert.ok(!exp.num.isNeg(), 'BigNumber.pow(...) does not support negative exponents at this time.');
        return new BigNumber(this.num.pow(exp.num));
    }
    mod(mod) {
        assert.ok(!this.num.isNeg() || !mod.num.isNeg(), 'Big number does not support negative mod negative.');
        return new BigNumber(this.num.mod(mod.num));
    }
    modNum(mod) {
        assert.ok(!this.num.isNeg() || mod >= 0, 'Big number does not support negative mod negative.');
        return new BigNumber(this.num.modn(mod));
    }
    abs() {
        return new BigNumber(this.num.abs());
    }
    xor(num) {
        return new BigNumber(this.num.xor(num.num));
    }
    and(num) {
        return new BigNumber(this.num.and(num.num));
    }
    shiftLeft(num) {
        return new BigNumber(this.num.shln(num));
    }
    shiftRight(num) {
        return new BigNumber(this.num.shrn(num));
    }
    shiftLeftInPlace(num) {
        this.num.ishln(num);
        return this;
    }
    shiftRightInPlace(num) {
        this.num.ishrn(num);
        return this;
    }
    gt(other) {
        return this.num.gt(other.num);
    }
    gte(other) {
        return this.num.gte(other.num);
    }
    lt(other) {
        return this.num.lt(other.num);
    }
    lte(other) {
        return this.num.lte(other.num);
    }
    eq(other) {
        return this.num.eq(other.num);
    }
    equals(other) {
        return this.eq(other);
    }
    compare(other) {
        return this.lt(other) ? -1 : this.eq(other) ? 0 : 1;
    }
    getBigNumEndianness(endianness) {
        if (endianness === exports.BIG_ENDIAN) {
            return 'be';
        }
        else if (endianness === exports.LITTLE_ENDIAN) {
            return 'le';
        }
        throw Error(`Cannot get Endianness from ${JSON.stringify(endianness)}`);
    }
}
exports.BigNumber = BigNumber;
exports.ZERO = new BigNumber(0);
exports.ONE = new BigNumber(1);
exports.TWO = new BigNumber(2);
exports.THREE = new BigNumber(3);
exports.ONE_HALF = new BigNumber(0.5);
exports.MAX_BIG_NUM = new BigNumber('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
//# sourceMappingURL=numbers.js.map