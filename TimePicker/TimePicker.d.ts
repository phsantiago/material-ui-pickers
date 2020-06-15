import React from 'react';
import { ParsableDate } from '../constants/prop-types';
import { ExportedClockViewProps } from '../views/Clock/ClockView';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { TimeValidationError } from '../_helpers/time-utils';
import { WithViewsProps } from '../Picker/SharedPickerProps';
import { ValidationProps } from '../_shared/hooks/useValidation';
export interface BaseTimePickerProps extends ExportedClockViewProps, ValidationProps<TimeValidationError, ParsableDate>, WithViewsProps<'hours' | 'minutes' | 'seconds'> {
}
export declare function getTextFieldAriaText(value: ParsableDate, utils: MuiPickersAdapter): string;
export declare const TimePicker: React.ForwardRefExoticComponent<BaseTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export declare type TimePickerProps = React.ComponentProps<typeof TimePicker>;
export declare const DesktopTimePicker: React.ForwardRefExoticComponent<BaseTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export declare type DesktopTimePickerProps = React.ComponentProps<typeof DesktopTimePicker>;
export declare const MobileTimePicker: React.ForwardRefExoticComponent<BaseTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export declare type MobileTimePickerProps = React.ComponentProps<typeof MobileTimePicker>;
export declare const StaticTimePicker: React.ForwardRefExoticComponent<BaseTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export declare type StaticTimePickerProps = React.ComponentProps<typeof StaticTimePicker>;
