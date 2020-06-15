import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../../typings/date';
export declare type MuiPickersAdapter = IUtils<MaterialUiPickersDate>;
export declare function useUtils(): MuiPickersAdapter;
export declare function useNow(): unknown;
