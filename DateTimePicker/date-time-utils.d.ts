import { ParsableDate } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { DateValidationProps } from '../_helpers/date-utils';
import { TimeValidationProps } from '../_helpers/time-utils';
export declare function validateDateAndTime(utils: MuiPickersAdapter, value: MaterialUiPickersDate | ParsableDate, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast, ...timeValidationProps }: DateValidationProps & TimeValidationProps): "shouldDisableDate" | "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | "disableFuture" | "maxDate" | "disablePast" | "minDate" | null;
export declare type DateAndTimeValidationError = ReturnType<typeof validateDateAndTime>;
