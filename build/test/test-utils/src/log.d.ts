import { Logger } from '../intf';
export declare const LOG_NEWLINE_STRING: string;
export declare const getLogger: (identifier: string, isTest?: boolean, debugToUseTestOnly?: any) => Logger;
export declare const logError: (logger: Logger, message: string, e: Error) => void;
