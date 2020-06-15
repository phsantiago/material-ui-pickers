import * as React from 'react';
export interface YearProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected: boolean;
    focused: boolean;
    value: any;
    allowKeyboardControl?: boolean;
    forwardedRef?: React.Ref<HTMLButtonElement>;
}
export declare const useStyles: (props?: any) => Record<"yearButtonContainer" | "yearButtonContainerDesktop" | "yearButton" | "yearSelected" | "yearDisabled", string>;
export declare const Year: React.FC<YearProps>;
declare const _default: React.ForwardRefExoticComponent<YearProps & React.RefAttributes<HTMLButtonElement>>;
export default _default;
