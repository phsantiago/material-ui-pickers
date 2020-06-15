import * as React from 'react';
import { MaterialUiPickersDate } from '../../typings/date';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { ExportedArrowSwitcherProps } from '../../_shared/ArrowSwitcher';
import { TimeValidationProps } from '../../_helpers/time-utils';
export interface ExportedClockViewProps extends TimeValidationProps {
    /**
     * 12h/24h view for hour selection clock
     * @default true
     */
    ampm?: boolean;
    /**
     * Step over minutes
     * @default 1
     */
    minutesStep?: number;
    /**
     * Display ampm controls under the clock (instead of in the toolbar)
     * @default false
     */
    ampmInClock?: boolean;
    /**
     * Enables keyboard listener for moving between days in calendar
     * @default currentWrapper !== 'static'
     */
    allowKeyboardControl?: boolean;
}
export interface ClockViewProps extends ExportedClockViewProps, ExportedArrowSwitcherProps {
    /**
     * Selected date @DateIOType.
     */
    date: MaterialUiPickersDate;
    /**
     * Clock type.
     */
    type: 'hours' | 'minutes' | 'seconds';
    /**
     * On change date without moving between views @DateIOType.
     */
    onDateChange: PickerOnChangeFn;
    /**
     * On change callback @DateIOType.
     */
    onChange: PickerOnChangeFn;
    /**
     * Get clock number aria-text for hours.
     */
    getHoursClockNumberText?: (hoursText: string) => string;
    /**
     * Get clock number aria-text for minutes.
     */
    getMinutesClockNumberText?: (minutesText: string) => string;
    /**
     * Get clock number aria-text for seconds.
     */
    getSecondsClockNumberText?: (secondsText: string) => string;
    openNextView: () => void;
    openPreviousView: () => void;
    nextViewAvailable: boolean;
    previousViewAvailable: boolean;
    showViewSwitcher?: boolean;
}
export declare const useStyles: (props?: any) => Record<"arrowSwitcher", string>;
export declare const ClockView: React.FC<ClockViewProps>;
