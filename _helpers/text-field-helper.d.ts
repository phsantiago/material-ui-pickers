import { ParsableDate } from '../constants/prop-types';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
export declare function getTextFieldAriaText(rawValue: ParsableDate, utils: MuiPickersAdapter): string;
export declare const getDisplayDate: (utils: MuiPickersAdapter, value: ParsableDate, inputFormat: string) => string;
export declare function pick12hOr24hFormat(userFormat: string | undefined, ampm: boolean | undefined, formats: {
    localized: string;
    '12h': string;
    '24h': string;
}): string;
export declare const staticDateWith2DigitTokens: Date;
export declare const staticDateWith1DigitTokens: Date;
export declare function checkMaskIsValidForCurrentFormat(mask: string, format: string, acceptRegex: RegExp, utils: MuiPickersAdapter): boolean;
export declare const maskedDateFormatter: (mask: string, acceptRegexp: RegExp) => (value: string) => string;
