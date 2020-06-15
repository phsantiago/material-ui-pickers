import * as React from 'react';
import { MonthProps } from './Month';
import { ParsableDate } from '../../constants/prop-types';
import { MaterialUiPickersDate } from '../../typings/date';
export interface MonthSelectionProps {
    date: MaterialUiPickersDate;
    minDate?: ParsableDate;
    maxDate?: ParsableDate;
    onChange: (date: MaterialUiPickersDate, isFinish: boolean) => void;
    disablePast?: boolean | null | undefined;
    disableFuture?: boolean | null | undefined;
    onMonthChange?: (date: MaterialUiPickersDate) => void | Promise<void>;
    renderMonth?: (date: MaterialUiPickersDate, monthProps: MonthProps) => JSX.Element;
}
export declare const useStyles: (props?: any) => Record<"container", string>;
export declare const MonthSelection: React.FC<MonthSelectionProps>;
