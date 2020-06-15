import { MaterialUiPickersDate } from '../../typings/date';
export declare function useParsedDate(possiblyUnparsedValue: any): MaterialUiPickersDate | undefined;
interface MonthValidationOptions {
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
}
export declare function useNextMonthDisabled(month: MaterialUiPickersDate, { disableFuture, maxDate }: Pick<MonthValidationOptions, 'disableFuture' | 'maxDate'>): boolean;
export declare function usePreviousMonthDisabled(month: MaterialUiPickersDate, { disablePast, minDate }: Pick<MonthValidationOptions, 'disablePast' | 'minDate'>): boolean;
export {};
