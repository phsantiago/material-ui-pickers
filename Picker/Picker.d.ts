import * as React from 'react';
import { DateTimePickerView } from '../DateTimePicker';
import { ParsableDate } from '../constants/prop-types';
import { BasePickerProps } from '../typings/BasePicker';
import { MaterialUiPickersDate } from '../typings/date';
import { ExportedClockViewProps } from '../views/Clock/ClockView';
import { WithViewsProps, AnyPickerView, SharedPickerProps } from './SharedPickerProps';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
declare type CalendarAndClockProps = ExportedCalendarViewProps & ExportedClockViewProps;
export declare type ToolbarComponentProps<TDate = MaterialUiPickersDate, TView extends AnyPickerView = AnyPickerView> = CalendarAndClockProps & {
    ampmInClock?: boolean;
    date: TDate;
    dateRangeIcon?: React.ReactNode;
    getMobileKeyboardInputViewButtonText?: () => string;
    hideTabs?: boolean;
    isLandscape: boolean;
    isMobileKeyboardViewOpen: boolean;
    onChange: (date: TDate, isFinish?: boolean) => void;
    openView: TView;
    setOpenView: (view: TView) => void;
    timeIcon?: React.ReactNode;
    toggleMobileKeyboardView: () => void;
    toolbarFormat?: string;
    toolbarPlaceholder?: React.ReactNode;
    toolbarTitle?: React.ReactNode;
    views: TView[];
};
export interface ExportedPickerProps<TView extends AnyPickerView> extends Omit<BasePickerProps, 'value' | 'onChange'>, CalendarAndClockProps, WithViewsProps<TView> {
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
}
export declare type PickerProps<TView extends AnyPickerView, TInputValue = ParsableDate, TDateValue = MaterialUiPickersDate> = ExportedPickerProps<TView> & SharedPickerProps<TInputValue, TDateValue>;
export declare const useStyles: (props?: any) => Record<"container" | "containerLandscape" | "pickerView" | "pickerViewLandscape", string>;
declare const _default: React.FC<PickerProps<DateTimePickerView, unknown, unknown>>;
export default _default;
