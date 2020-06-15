import * as React from 'react';
import { DatePickerView } from '../../DatePicker';
import { SlideDirection } from './SlideTransition';
import { MaterialUiPickersDate } from '../../typings/date';
import { DateValidationProps } from '../../_helpers/date-utils';
import { ExportedArrowSwitcherProps } from '../../_shared/ArrowSwitcher';
export interface CalendarHeaderProps extends ExportedArrowSwitcherProps, Omit<DateValidationProps, 'shouldDisableDate'> {
    view: DatePickerView;
    views: DatePickerView[];
    currentMonth: MaterialUiPickersDate;
    /**
     * Get aria-label text for switching between views button.
     */
    getViewSwitchingButtonText?: (currentView: DatePickerView) => string;
    reduceAnimations: boolean;
    changeView: (view: DatePickerView) => void;
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
    onMonthChange: (date: MaterialUiPickersDate, slideDirection: SlideDirection) => void;
}
export declare const useStyles: (props?: any) => Record<"switchHeader" | "yearSelectionSwitcher" | "previousMonthButton" | "switchViewDropdown" | "switchViewDropdownDown" | "monthTitleContainer" | "monthText", string>;
export declare const CalendarHeader: React.SFC<CalendarHeaderProps>;
export default CalendarHeader;
