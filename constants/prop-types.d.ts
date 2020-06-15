import * as PropTypes from 'prop-types';
import { MaterialUiPickersDate } from '../typings/date';
export declare const date: PropTypes.Requireable<string | number | object>;
export declare type ParsableDate = string | number | Date | null | undefined | MaterialUiPickersDate;
export declare const DomainPropTypes: {
    date: PropTypes.Requireable<string | number | object>;
    datePickerView: PropTypes.Requireable<string>;
};
export declare const defaultMinDate: any;
export declare const defaultMaxDate: any;
