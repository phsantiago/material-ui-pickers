import * as React from 'react';
import { DatePickerView } from '../../DatePicker';
import { MaterialUiPickersDate } from '../../typings/date';
import { ExportedCalendarProps } from './Calendar';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { CalendarHeaderProps } from './CalendarHeader';
import { ExportedYearSelectionProps } from './YearSelection';
import { DateValidationProps } from '../../_helpers/date-utils';
declare type PublicCalendarHeaderProps = Pick<CalendarHeaderProps, 'leftArrowIcon' | 'rightArrowIcon' | 'leftArrowButtonProps' | 'rightArrowButtonProps' | 'leftArrowButtonText' | 'rightArrowButtonText' | 'getViewSwitchingButtonText'>;
export interface CalendarViewProps extends DateValidationProps, ExportedCalendarProps, ExportedYearSelectionProps, PublicCalendarHeaderProps {
    date: MaterialUiPickersDate;
    view: DatePickerView;
    views: DatePickerView[];
    changeView: (view: DatePickerView) => void;
    onChange: PickerOnChangeFn;
    /**
     * Disable heavy animations.
     * @default /(android)/i.test(window.navigator.userAgent).
     */
    reduceAnimations?: boolean;
    /**
     * Callback firing on month change.
     */
    onMonthChange?: (date: MaterialUiPickersDate) => void;
}
export declare type ExportedCalendarViewProps = Omit<CalendarViewProps, 'date' | 'view' | 'views' | 'onChange' | 'changeView' | 'slideDirection' | 'currentMonth'>;
export declare const useStyles: (props?: any) => Record<"viewTransitionContainer" | "fullHeightContainer", string>;
export declare const defaultReduceAnimations: boolean;
export declare const CalendarView: React.FC<CalendarViewProps>;
export {};
