import { CalendarViewProps } from './CalendarView';
import { SlideDirection } from './SlideTransition';
import { MaterialUiPickersDate } from '../../typings/date';
import { MuiPickersAdapter } from '../../_shared/hooks/useUtils';
interface CalendarState {
    isMonthSwitchingAnimating: boolean;
    currentMonth: MaterialUiPickersDate;
    focusedDay: MaterialUiPickersDate | null;
    slideDirection: SlideDirection;
}
declare type ReducerAction<TType, TAdditional = {}> = {
    type: TType;
} & TAdditional;
interface ChangeMonthPayload {
    direction: SlideDirection;
    newMonth: MaterialUiPickersDate;
}
export declare const createCalendarStateReducer: (reduceAnimations: boolean, disableSwitchToMonthOnDayFocus: boolean, utils: MuiPickersAdapter) => (state: CalendarState, action: ReducerAction<'finishMonthSwitchingAnimation'> | ReducerAction<'changeMonth', ChangeMonthPayload> | ReducerAction<'changeFocusedDay', {
    focusedDay: MaterialUiPickersDate;
}>) => CalendarState;
declare type CalendarStateInput = Pick<CalendarViewProps, 'disableFuture' | 'disablePast' | 'shouldDisableDate' | 'date' | 'reduceAnimations' | 'onMonthChange'> & {
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
    disableSwitchToMonthOnDayFocus?: boolean;
};
export declare function useCalendarState({ date, reduceAnimations, onMonthChange, disablePast, disableFuture, minDate, maxDate, shouldDisableDate, disableSwitchToMonthOnDayFocus, }: CalendarStateInput): {
    calendarState: CalendarState;
    changeMonth: (newDate: MaterialUiPickersDate) => void;
    changeFocusedDay: (newFocusedDate: MaterialUiPickersDate) => void;
    isDateDisabled: (day: MaterialUiPickersDate) => boolean;
    onMonthSwitchingAnimationEnd: () => void;
    handleChangeMonth: (payload: ChangeMonthPayload) => void;
};
export {};
