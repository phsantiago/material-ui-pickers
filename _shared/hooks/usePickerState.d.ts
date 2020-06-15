import { WrapperVariant } from '../../wrappers/Wrapper';
import { BasePickerProps } from '../../typings/BasePicker';
import { MuiPickersAdapter } from './useUtils';
export declare const FORCE_FINISH_PICKER: unique symbol;
export interface PickerStateValueManager<TInput, TDateValue> {
    parseInput: (utils: MuiPickersAdapter, props: BasePickerProps<TInput, TDateValue>) => TDateValue;
    emptyValue: TDateValue;
    areValuesEqual: (utils: MuiPickersAdapter, valueLeft: TDateValue, valueRight: TDateValue) => boolean;
}
export declare function usePickerState<TInput, TDateValue>(props: BasePickerProps<TInput, TDateValue>, valueManager: PickerStateValueManager<TInput, TDateValue>): {
    pickerProps: {
        date: TDateValue;
        isMobileKeyboardViewOpen: boolean;
        toggleMobileKeyboardView: () => void;
        onDateChange: (newDate: TDateValue, currentVariant: WrapperVariant, isFinish?: boolean | symbol) => void;
    };
    inputProps: {
        onChange: (date: TDateValue, keyboardInputValue?: string | undefined) => void;
        inputFormat: string;
        open: boolean;
        rawValue: TInput;
        openPicker: () => false | void;
    };
    wrapperProps: {
        open: boolean;
        onClear: () => void;
        onAccept: () => void;
        onDismiss: () => void;
        onSetToday: () => void;
    };
};
