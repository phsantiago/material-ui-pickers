import * as React from 'react';
import { DateInputProps, MuiTextFieldProps } from '../PureDateInput';
declare type MaskedInputProps = Omit<DateInputProps, 'open' | 'adornmentPosition' | 'renderInput' | 'openPicker' | 'InputProps' | 'InputAdornmentProps' | 'openPickerIcon' | 'disableOpenPicker' | 'getOpenDialogAriaText' | 'OpenPickerButtonProps'> & {
    inputProps?: Partial<React.HTMLProps<HTMLInputElement>>;
};
export declare function useMaskedInput({ disableMaskedInput, rawValue, validationError, onChange, mask, acceptRegex, inputFormat, disabled, rifmFormatter, ignoreInvalidInputs, readOnly, TextFieldProps, label, inputProps, }: MaskedInputProps): MuiTextFieldProps;
export {};
