import * as React from 'react';
import { MaterialUiPickersDate } from '../typings/date';
import { ToolbarComponentProps } from '../Picker/Picker';
export declare const useStyles: (props?: any) => Record<"separator" | "hourMinuteLabel" | "hourMinuteLabelLandscape" | "hourMinuteLabelReverse" | "ampmSelection" | "ampmLandscape" | "ampmLabel" | "penIconLandscape", string>;
export declare function useMeridiemMode(date: MaterialUiPickersDate, ampm: boolean | undefined, onChange: (date: MaterialUiPickersDate, isFinished?: boolean) => void): {
    meridiemMode: "am" | "pm" | null;
    handleMeridiemChange: (mode: 'am' | 'pm') => void;
};
export declare const TimePickerToolbar: React.FC<ToolbarComponentProps>;
export default TimePickerToolbar;
