import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { MaterialUiPickersDate } from '../../typings/date';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { useMeridiemMode } from '../../TimePicker/TimePickerToolbar';
export interface ClockProps extends ReturnType<typeof useMeridiemMode> {
    date: MaterialUiPickersDate;
    type: ClockViewType;
    value: number;
    isTimeDisabled: (timeValue: number, type: ClockViewType) => boolean;
    children: React.ReactElement<any>[];
    onDateChange: PickerOnChangeFn;
    onChange: (value: number, isFinish?: boolean | symbol) => void;
    ampm?: boolean;
    minutesStep?: number;
    ampmInClock?: boolean;
    allowKeyboardControl?: boolean;
}
export declare const useStyles: (props?: any) => Record<"container" | "clock" | "squareMask" | "pin" | "amButton" | "pmButton" | "meridiemButtonSelected", string>;
export declare const Clock: React.FC<ClockProps>;
export default Clock;
