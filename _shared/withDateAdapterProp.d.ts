import * as React from 'react';
import { MuiPickersAdapter } from './hooks/useUtils';
export interface WithDateAdapterProps {
    /**
     * Allows to pass configured date-io adapter directly. More info [here](https://material-ui-pickers.dev/guides/date-adapter-passing)
     * ```jsx
     * dateAdapter={new DateFnsAdapter({ locale: ruLocale })}
     * ```
     */
    dateAdapter?: MuiPickersAdapter;
}
export declare function withDateAdapterProp<T>(Component: React.ComponentType<T>): React.FC<T & WithDateAdapterProps>;
