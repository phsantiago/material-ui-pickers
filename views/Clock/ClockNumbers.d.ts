import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../../typings/date';
interface GetHourNumbersOptions {
    ampm: boolean;
    utils: IUtils<MaterialUiPickersDate>;
    date: MaterialUiPickersDate;
    onChange: (value: number, isFinish?: boolean) => void;
    getClockNumberText: (hour: string) => string;
    isDisabled: (value: number) => boolean;
}
export declare const getHourNumbers: ({ ampm, date, utils, onChange, isDisabled, getClockNumberText, }: GetHourNumbersOptions) => JSX.Element[];
export declare const getMinutesNumbers: ({ value, utils, onChange, isDisabled, getClockNumberText, }: {
    value: number;
    utils: IUtils<MaterialUiPickersDate>;
    onChange: (value: number, isFinish?: boolean | symbol | undefined) => void;
    getClockNumberText: (hour: string) => string;
    isDisabled: (value: number) => boolean;
}) => JSX.Element[];
export {};
