import * as React from 'react';
import { DateRange } from './RangeTypes';
import { MaterialUiPickersDate } from '../typings/date';
import { CalendarProps } from '../views/Calendar/Calendar';
import { ExportedArrowSwitcherProps } from '../_shared/ArrowSwitcher';
import { DateValidationProps } from '../_helpers/date-utils';
export interface ExportedMobileDateRangeCalendarProps {
}
interface DesktopDateRangeCalendarProps extends ExportedMobileDateRangeCalendarProps, CalendarProps, DateValidationProps, ExportedArrowSwitcherProps {
    date: DateRange;
    changeMonth: (date: MaterialUiPickersDate) => void;
}
export declare const DateRangePickerViewMobile: React.FC<DesktopDateRangeCalendarProps>;
export {};
