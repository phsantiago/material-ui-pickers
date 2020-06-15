import * as React from 'react';
import { BasePickerProps } from '../typings/BasePicker';
import { SharedPickerProps } from '../Picker/SharedPickerProps';
import { DateRangeInputProps } from './DateRangePickerInput';
import { RangeInput, DateRange, CurrentlySelectingRangeEndProps } from './RangeTypes';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
declare type BaseCalendarPropsToReuse = Omit<ExportedCalendarViewProps, 'onYearChange'>;
export interface ExportedDateRangePickerViewProps extends BaseCalendarPropsToReuse, ExportedDesktopDateRangeCalendarProps, Omit<BasePickerProps, 'value' | 'onChange'> {
    /**
     * if `true` after selecting `start` date  calendar will not automatically switch to the month of `end` date
     * @default false
     */
    disableAutoMonthSwitching?: boolean;
}
interface DateRangePickerViewProps extends ExportedDateRangePickerViewProps, CurrentlySelectingRangeEndProps, SharedPickerProps<RangeInput, DateRange, DateRangeInputProps> {
    open: boolean;
    startText: React.ReactNode;
    endText: React.ReactNode;
}
export declare const DateRangePickerView: React.FC<DateRangePickerViewProps>;
export {};
