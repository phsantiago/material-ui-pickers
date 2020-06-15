import * as React from 'react';
export interface ClockNumberProps {
    index: number;
    label: string;
    selected: boolean;
    disabled: boolean;
    onSelect: (isFinish: boolean | symbol) => void;
    isInner?: boolean;
    getClockNumberText: (currentItemText: string) => string;
}
export declare const useStyles: (props?: any) => Record<"clockNumber" | "clockNumberSelected" | "clockNumberDisabled", string>;
export declare const ClockNumber: React.FC<ClockNumberProps>;
export default ClockNumber;
