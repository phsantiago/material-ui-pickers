import * as React from 'react';
import { DateIOFormats } from '@date-io/core/IUtils';
import { MuiPickersAdapter } from './_shared/hooks/useUtils';
export declare const MuiPickersAdapterContext: React.Context<MuiPickersAdapter | null>;
export interface LocalizationProviderProps {
    dateAdapter: new (...args: any) => MuiPickersAdapter;
    children: React.ReactNode;
    locale?: any;
    dateLibInstance?: any;
    dateFormats?: Partial<DateIOFormats>;
}
export declare const LocalizationProvider: React.FC<LocalizationProviderProps>;
declare const _default: React.FC<LocalizationProviderProps>;
export default _default;
