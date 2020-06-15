import { IUtils } from '@date-io/core/IUtils';
import { ParsableDate } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
declare type Meridiem = 'am' | 'pm' | null;
export declare const getMeridiem: (date: MaterialUiPickersDate, utils: IUtils<MaterialUiPickersDate>) => Meridiem;
export declare const convertValueToMeridiem: (value: number, meridiem: Meridiem, ampm: boolean) => number;
export declare const convertToMeridiem: (time: MaterialUiPickersDate, meridiem: 'am' | 'pm', ampm: boolean, utils: IUtils<MaterialUiPickersDate>) => unknown;
export declare const getMinutes: (offsetX: number, offsetY: number, step?: number) => number;
export declare const getHours: (offsetX: number, offsetY: number, ampm: boolean) => number;
export declare function getSecondsInDay(date: MaterialUiPickersDate, utils: MuiPickersAdapter): number;
export declare const createIsAfterIgnoreDatePart: (disableIgnoringDatePartForTimeValidation: boolean, utils: MuiPickersAdapter) => (dateLeft: MaterialUiPickersDate, dateRight: MaterialUiPickersDate) => boolean;
export interface TimeValidationProps {
    /**
     * Min time acceptable time.
     * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
     */
    minTime?: MaterialUiPickersDate;
    /**
     * Max time acceptable time.
     * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
     */
    maxTime?: MaterialUiPickersDate;
    /**
     * Dynamically check if time is disabled or not.
     * If returns `false` appropriate time point will ot be acceptable.
     */
    shouldDisableTime?: (timeValue: number, clockType: 'hours' | 'minutes' | 'seconds') => boolean;
    /**
     * Do not ignore date part when validating min/max time
     * @default false
     */
    disableIgnoringDatePartForTimeValidation?: boolean;
}
export declare const validateTime: (utils: MuiPickersAdapter, value: MaterialUiPickersDate | ParsableDate, { minTime, maxTime, shouldDisableTime, disableIgnoringDatePartForTimeValidation }: TimeValidationProps) => "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | null;
export declare type TimeValidationError = ReturnType<typeof validateTime>;
export {};
