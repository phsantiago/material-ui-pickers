import { ParsableDate } from '../constants/prop-types';
import { MaterialUiPickersDate } from '../typings/date';
import { AllSharedPickerProps } from '../Picker/SharedPickerProps';
import { ExportedDateRangePickerInputProps } from './DateRangePickerInput';
export declare type RangeInput = [ParsableDate, ParsableDate];
export declare type DateRange = [MaterialUiPickersDate, MaterialUiPickersDate];
export declare type AllSharedDateRangePickerProps = Omit<AllSharedPickerProps<RangeInput, DateRange>, 'renderInput'> & ExportedDateRangePickerInputProps;
export interface CurrentlySelectingRangeEndProps {
    currentlySelectingRangeEnd: 'start' | 'end';
    setCurrentlySelectingRangeEnd: (newSelectingEnd: 'start' | 'end') => void;
}
