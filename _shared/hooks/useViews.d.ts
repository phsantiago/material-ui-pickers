import * as React from 'react';
import { MaterialUiPickersDate } from '../../typings/date';
import { AnyPickerView } from '../../Picker/SharedPickerProps';
export declare type PickerOnChangeFn = (date: MaterialUiPickersDate, isFinish?: boolean | symbol) => void;
export declare function useViews({ views, openTo, onChange, isMobileKeyboardViewOpen, toggleMobileKeyboardView, }: {
    views: AnyPickerView[];
    openTo: AnyPickerView;
    onChange: PickerOnChangeFn;
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
}): {
    nextView: import("../..").DateTimePickerView;
    previousView: import("../..").DateTimePickerView;
    openNext: () => void;
    handleChangeAndOpenNext: (date: MaterialUiPickersDate, isFinishedSelectionInCurrentView?: boolean | symbol | undefined) => void;
    openView: import("../..").DateTimePickerView;
    setOpenView: (value: React.SetStateAction<import("../..").DateTimePickerView>) => void;
};
