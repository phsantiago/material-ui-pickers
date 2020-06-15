import { ExportedClockViewProps } from '../views/Clock/ClockView';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { WithViewsProps } from '../Picker/SharedPickerProps';
import { DateAndTimeValidationError } from './date-time-utils';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { ParsableDate } from '../constants/prop-types';
export declare type DateTimePickerView = 'year' | 'date' | 'month' | 'hours' | 'minutes' | 'seconds';
export interface BaseDateTimePickerProps extends WithViewsProps<'year' | 'date' | 'month' | 'hours' | 'minutes'>, ValidationProps<DateAndTimeValidationError, ParsableDate>, ExportedClockViewProps, ExportedCalendarViewProps {
    /**
     * To show tabs.
     */
    hideTabs?: boolean;
    /**
     * Date tab icon.
     */
    dateRangeIcon?: React.ReactNode;
    /**
     * Time tab icon.
     */
    timeIcon?: React.ReactNode;
    /**
     * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
     */
    minDateTime?: ParsableDate;
    /**
     * Minimal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
     */
    maxDateTime?: ParsableDate;
    /**
     * Date format, that is displaying in toolbar.
     */
    toolbarFormat?: string;
}
export declare const DateTimePicker: import("react").ForwardRefExoticComponent<BaseDateTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type DateTimePickerProps = React.ComponentProps<typeof DateTimePicker>;
export declare const DesktopDateTimePicker: import("react").ForwardRefExoticComponent<BaseDateTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type DesktopDateTimePickerProps = React.ComponentProps<typeof DesktopDateTimePicker>;
export declare const MobileDateTimePicker: import("react").ForwardRefExoticComponent<BaseDateTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type MobileDateTimePickerProps = React.ComponentProps<typeof MobileDateTimePicker>;
export declare const StaticDateTimePicker: import("react").ForwardRefExoticComponent<BaseDateTimePickerProps & import("..").BasePickerProps<unknown, unknown> & Pick<import("../_shared/PureDateInput").DateInputProps<unknown, unknown>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "PopoverProps" | "PopperProps" | "TransitionComponent" | "desktopModeMediaQuery"> & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare type StaticDateTimePickerProps = React.ComponentProps<typeof StaticDateTimePicker>;
