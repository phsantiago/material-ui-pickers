import * as React from 'react';
import { DayProps } from './Day';
import { MaterialUiPickersDate } from '../../typings/date';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { SlideDirection, SlideTransitionProps } from './SlideTransition';
export interface ExportedCalendarProps extends Pick<DayProps, 'disableHighlightToday' | 'showDaysOutsideCurrentMonth'> {
    /**
     * Calendar onChange.
     */
    onChange: PickerOnChangeFn;
    /**
     * Custom renderer for day. Check [DayComponentProps api](https://material-ui-pickers.dev/api/Day) @DateIOType.
     */
    renderDay?: (day: MaterialUiPickersDate, selectedDates: MaterialUiPickersDate[], DayComponentProps: DayProps) => JSX.Element;
    /**
     * Enables keyboard listener for moving between days in calendar.
     * @default currentWrapper !== 'static'
     */
    allowKeyboardControl?: boolean;
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     * @default false
     */
    loading?: boolean;
    /**
     * Component displaying when passed `loading` true.
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode;
}
export interface CalendarProps extends ExportedCalendarProps {
    date: MaterialUiPickersDate | MaterialUiPickersDate[];
    isDateDisabled: (day: MaterialUiPickersDate) => boolean;
    slideDirection: SlideDirection;
    currentMonth: MaterialUiPickersDate;
    reduceAnimations: boolean;
    focusedDay: MaterialUiPickersDate | null;
    changeFocusedDay: (newFocusedDay: MaterialUiPickersDate) => void;
    isMonthSwitchingAnimating: boolean;
    onMonthSwitchingAnimationEnd: () => void;
    className?: string;
    TransitionProps?: Partial<SlideTransitionProps>;
}
export declare const useStyles: (props?: any) => Record<"iconButton" | "previousMonthButton" | "calendarContainer" | "loadingContainer" | "weekContainer" | "week" | "daysHeader" | "weekDayLabel", string>;
export declare const Calendar: React.FC<CalendarProps>;
