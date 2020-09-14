"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.getLogger = exports.LOG_NEWLINE_STRING = void 0;
const debug_1 = __importDefault(require("debug"));
exports.LOG_NEWLINE_STRING = process.env.LOG_NEW_LINES ? '\n' : ' <\\n> ';
exports.getLogger = (identifier, isTest = false, debugToUseTestOnly) => {
    const testString = isTest ? 'test:' : '';
    return {
        debug: getLogFunction(`${testString}debug:${identifier}`, debugToUseTestOnly),
        info: getLogFunction(`${testString}info:${identifier}`, debugToUseTestOnly),
        warn: getLogFunction(`${testString}warn:${identifier}`, debugToUseTestOnly),
        error: getLogFunction(`${testString}error:${identifier}`, debugToUseTestOnly),
    };
};
exports.logError = (logger, message, e) => {
    logger.error(`${message}.
    Error: ${e.message}.
    Stack: ${e.stack}`);
};
const joinNewLines = (...logs) => {
    const stringifiedLogs = [];
    for (const l of logs) {
        if (typeof l !== 'string') {
            stringifiedLogs.push(JSON.stringify(l));
        }
        else {
            stringifiedLogs.push(l);
        }
    }
    return stringifiedLogs.join(' ').replace(/\n/g, exports.LOG_NEWLINE_STRING);
};
const getLogFunction = (identifier, debugToUseTestOnly = debug_1.default) => {
    const d = debugToUseTestOnly(identifier);
    return (...logs) => {
        const singleLine = joinNewLines(...logs);
        return d(singleLine);
    };
};
//# sourceMappingURL=log.js.map