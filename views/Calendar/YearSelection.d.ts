import * as React from 'react';
import { MaterialUiPickersDate } from '../../typings/date';
export interface ExportedYearSelectionProps {
    /**
     * Callback firing on year change @DateIOType.
     */
    onYearChange?: (date: MaterialUiPickersDate) => void;
    /**
     * Disable specific years dynamically.
     * Works like `shouldDisableDate` but for year selection view. @DateIOType.
     */
    shouldDisableYear?: (day: MaterialUiPickersDate) => boolean;
}
export interface YearSelectionProps extends ExportedYearSelectionProps {
    date: MaterialUiPickersDate;
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
    onChange: (date: MaterialUiPickersDate, isFinish: boolean) => void;
    disablePast?: boolean | null | undefined;
    disableFuture?: boolean | null | undefined;
    allowKeyboardControl?: boolean;
    isDateDisabled: (day: MaterialUiPickersDate) => boolean;
    changeFocusedDay: (day: MaterialUiPickersDate) => void;
}
export declare const useStyles: (props?: any) => Record<"container", string>;
export declare const YearSelection: React.FC<YearSelectionProps>;
