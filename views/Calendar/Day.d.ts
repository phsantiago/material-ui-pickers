import * as React from 'react';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { ExtendMui } from '../../typings/helpers';
import { MaterialUiPickersDate } from '../../typings/date';
export declare const useStyles: (props?: any) => Record<"day" | "dayWithMargin" | "dayOutsideMonth" | "hiddenDaySpacingFiller" | "today" | "daySelected" | "dayDisabled" | "dayLabel", string>;
export interface DayProps extends ExtendMui<ButtonBaseProps> {
    /**
     * The date to show.
     */
    day: MaterialUiPickersDate;
    /**
     * Is focused by keyboard navigation.
     */
    focused?: boolean;
    /**
     * Can be focused by tabbing in.
     */
    focusable?: boolean;
    /**
     * Is day in current month.
     */
    inCurrentMonth: boolean;
    /**
     * Is switching month animation going on right now.
     */
    isAnimating?: boolean;
    /**
     * Is today?
     */
    today?: boolean;
    /**
     * Disabled?.
     */
    disabled?: boolean;
    /**
     * Selected?
     */
    selected?: boolean;
    /**
     * Is keyboard control and focus management enabled.
     */
    allowKeyboardControl?: boolean;
    /**
     * Disable margin between days, useful for displaying range of days.
     */
    disableMargin?: boolean;
    /**
     * Display disabled dates outside the current month.
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean;
    /**
     * Disable highlighting today date with a circle.
     * @default false
     */
    disableHighlightToday?: boolean;
    onDayFocus: (day: MaterialUiPickersDate) => void;
    onDaySelect: (day: MaterialUiPickersDate, isFinish: boolean | symbol) => void;
}
export declare const areDayPropsEqual: (prevProps: DayProps, nextProps: DayProps) => boolean;
export declare const Day: React.FC<DayProps>;
