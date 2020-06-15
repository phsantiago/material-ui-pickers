import * as React from 'react';
import { ToolbarComponentProps, ExportedPickerProps } from './Picker';
import { ParsableDate } from '../constants/prop-types';
import { SomeWrapper, ExtendWrapper } from '../wrappers/Wrapper';
import { ResponsiveWrapper } from '../wrappers/ResponsiveWrapper';
import { DateInputProps } from '../_shared/PureDateInput';
import { AnyPickerView, AllSharedPickerProps } from './SharedPickerProps';
declare type AllAvailableForOverrideProps = ExportedPickerProps<AnyPickerView>;
export declare type AllPickerProps<T, TWrapper extends SomeWrapper = SomeWrapper> = T & AllSharedPickerProps & ExtendWrapper<TWrapper>;
export interface MakePickerOptions<T extends unknown> {
    name: string;
    /**
     * Hook that running validation for the `value` and input.
     */
    useValidation: (value: ParsableDate, props: T) => string | null;
    /**
     * Intercept props to override or inject default props specifically for picker.
     */
    useInterceptProps: (props: AllPickerProps<T>) => AllPickerProps<T> & {
        inputFormat: string;
    };
    DefaultToolbarComponent: React.ComponentType<ToolbarComponentProps>;
}
export declare function makePickerWithStateAndWrapper<T extends AllAvailableForOverrideProps, TWrapper extends SomeWrapper = typeof ResponsiveWrapper>(Wrapper: TWrapper, { name, useInterceptProps, useValidation, DefaultToolbarComponent }: MakePickerOptions<T>): React.ForwardRefExoticComponent<React.PropsWithoutRef<React.PropsWithChildren<T & import("..").BasePickerProps<unknown, unknown> & Pick<DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & ExtendWrapper<TWrapper>>> & React.RefAttributes<HTMLInputElement>>;
export {};
