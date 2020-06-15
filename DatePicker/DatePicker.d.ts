import { WithViewsProps } from '../Picker/SharedPickerProps';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { ParsableDate } from '../constants/prop-types';
import { DateValidationError } from '../_helpers/date-utils';
export declare type DatePickerView = 'year' | 'date' | 'month';
export interface BaseDatePickerProps extends WithViewsProps<'year' | 'date' | 'month'>, ValidationProps<DateValidationError, ParsableDate>, ExportedCalendarViewProps {
}
export declare const DatePicker: import("react").ForwardRefExoticComponent<BaseDatePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type DatePickerProps = React.ComponentProps<typeof DatePicker>;
export declare const MobileDatePicker: import("react").ForwardRefExoticComponent<BaseDatePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type MobileDatePickerProps = React.ComponentProps<typeof MobileDatePicker>;
export declare const DesktopDatePicker: import("react").ForwardRefExoticComponent<BaseDatePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type DesktopDatePickerProps = React.ComponentProps<typeof DesktopDatePicker>;
export declare const StaticDatePicker: import("react").ForwardRefExoticComponent<BaseDatePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type StaticDatePickerProps = React.ComponentProps<typeof StaticDatePicker>;
