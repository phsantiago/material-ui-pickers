import * as React from 'react';
import { DateRange } from './RangeTypes';
import { MaterialUiPickersDate } from '../typings/date';
import { CalendarProps } from '../views/Calendar/Calendar';
import { ExportedArrowSwitcherProps } from '../_shared/ArrowSwitcher';
import { DateValidationProps } from '../_helpers/date-utils';
export interface ExportedDesktopDateRangeCalendarProps {
    /**
     * How many calendars render on **desktop** DateRangePicker
     * @default 2
     */
    calendars?: 1 | 2 | 3;
}
interface DesktopDateRangeCalendarProps extends ExportedDesktopDateRangeCalendarProps, CalendarProps, DateValidationProps, ExportedArrowSwitcherProps {
    date: DateRange;
    changeMonth: (date: MaterialUiPickersDate) => void;
    currentlySelectingRangeEnd: 'start' | 'end';
}
export declare const useStyles: (props?: any) => Record<"arrowSwitcher" | "dateRangeContainer" | "rangeCalendarContainer" | "calendar", string>;
export declare const DateRangePickerViewDesktop: React.FC<DesktopDateRangeCalendarProps>;
export {};
