import * as React from 'react';
import { RangeInput, DateRange } from './RangeTypes';
import { CurrentlySelectingRangeEndProps } from './RangeTypes';
import { DateRangeValidationError } from '../_helpers/date-utils';
import { DateInputProps, MuiTextFieldProps } from '../_shared/PureDateInput';
export declare const useStyles: (props?: any) => Record<"rangeInputsContainer" | "toLabelDelimiter", string>;
export interface ExportedDateRangePickerInputProps {
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `startProps` and `endProps` arguments of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api),
     * that you need to forward to the range start/end inputs respectively.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example
     * ```jsx
     * <DateRangePicker
     * renderInput={(startProps, endProps) => (
         <>
           <TextField {...startProps} />
           <Typography> to <Typography>
           <TextField {...endProps} />
         </>;
       )}
       />
     * ````
     */
    renderInput: (startProps: MuiTextFieldProps, endProps: MuiTextFieldProps) => React.ReactElement;
}
export interface DateRangeInputProps extends ExportedDateRangePickerInputProps, CurrentlySelectingRangeEndProps, Omit<DateInputProps<RangeInput, DateRange>, 'validationError' | 'renderInput' | 'forwardedRef'> {
    startText: React.ReactNode;
    endText: React.ReactNode;
    forwardedRef?: React.Ref<HTMLDivElement>;
    containerRef?: React.Ref<HTMLDivElement>;
    validationError: DateRangeValidationError;
}
export declare const DateRangePickerInput: React.FC<DateRangeInputProps>;
