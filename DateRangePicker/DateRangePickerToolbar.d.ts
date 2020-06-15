import * as React from 'react';
import { ToolbarComponentProps } from '../Picker/Picker';
import { DateRange, CurrentlySelectingRangeEndProps } from './RangeTypes';
export declare const useStyles: (props?: any) => Record<"penIcon" | "dateTextContainer", string>;
interface DateRangePickerToolbarProps extends CurrentlySelectingRangeEndProps, Pick<ToolbarComponentProps, 'isMobileKeyboardViewOpen' | 'toggleMobileKeyboardView' | 'toolbarTitle' | 'toolbarFormat'> {
    date: DateRange;
    startText: React.ReactNode;
    endText: React.ReactNode;
    currentlySelectingRangeEnd: 'start' | 'end';
    setCurrentlySelectingRangeEnd: (newSelectingEnd: 'start' | 'end') => void;
}
export declare const DateRangePickerToolbar: React.FC<DateRangePickerToolbarProps>;
export {};
