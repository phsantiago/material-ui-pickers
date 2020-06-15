import { IUtils } from '@date-io/core/IUtils';
import { ParsableDate } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { BasePickerProps } from '../typings/BasePicker';
import { DatePickerView } from '../DatePicker/DatePicker';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { DateRange, RangeInput } from '../DateRangePicker/RangeTypes';
interface FindClosestDateParams {
    date: MaterialUiPickersDate;
    utils: IUtils<MaterialUiPickersDate>;
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: MaterialUiPickersDate) => boolean;
}
export declare const findClosestEnabledDate: ({ date, utils, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams) => unknown;
export declare const isYearOnlyView: (views: readonly DatePickerView[]) => boolean;
export declare const isYearAndMonthViews: (views: readonly DatePickerView[]) => boolean;
export declare const getFormatByViews: (views: readonly DatePickerView[], utils: IUtils<MaterialUiPickersDate>) => any;
export declare function parsePickerInputValue(utils: MuiPickersAdapter, { value }: BasePickerProps): MaterialUiPickersDate | null;
export declare function parseRangeInputValue(utils: MuiPickersAdapter, { value }: BasePickerProps<RangeInput, DateRange>): DateRange;
export declare const isRangeValid: (utils: MuiPickersAdapter, range: DateRange | null) => range is DateRange;
export declare const isWithinRange: (utils: MuiPickersAdapter, day: MaterialUiPickersDate, range: DateRange | null) => boolean;
export declare const isStartOfRange: (utils: MuiPickersAdapter, day: MaterialUiPickersDate, range: DateRange | null) => boolean;
export declare const isEndOfRange: (utils: MuiPickersAdapter, day: MaterialUiPickersDate, range: DateRange | null) => boolean;
export interface DateValidationProps {
    /**
     * Min selectable date.
     * @default Date(1900-01-01)
     */
    minDate?: MaterialUiPickersDate;
    /**
     * Max selectable date.
     * @default Date(2099-31-12)
     */
    maxDate?: MaterialUiPickersDate;
    /**
     * Disable specific date @DateIOType.
     */
    shouldDisableDate?: (day: MaterialUiPickersDate) => boolean;
    /**
     * Disable past dates.
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates.
     * @default false
     */
    disableFuture?: boolean;
}
export declare const validateDate: (utils: MuiPickersAdapter, value: MaterialUiPickersDate | ParsableDate, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast }: DateValidationProps) => "shouldDisableDate" | "invalidDate" | "disableFuture" | "maxDate" | "disablePast" | "minDate" | null;
export declare type DateValidationError = ReturnType<typeof validateDate>;
declare type DateRangeValidationErrorValue = DateValidationError | 'invalidRange' | null;
export declare type DateRangeValidationError = [DateRangeValidationErrorValue, DateRangeValidationErrorValue];
export declare const validateDateRange: (utils: MuiPickersAdapter, value: RangeInput, dateValidationProps: DateValidationProps) => [DateRangeValidationErrorValue, DateRangeValidationErrorValue];
export {};
