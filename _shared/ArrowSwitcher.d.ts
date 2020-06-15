import * as React from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface ExportedArrowSwitcherProps {
    /**
     * Left arrow icon
     */
    leftArrowIcon?: React.ReactNode;
    /**
     * Right arrow icon
     */
    rightArrowIcon?: React.ReactNode;
    /**
     * Left arrow icon aria-label text
     */
    leftArrowButtonText?: string;
    /**
     * Right arrow icon aria-label text
     */
    rightArrowButtonText?: string;
    /**
     * Props to pass to left arrow button
     * @type {Partial<IconButtonProps>}
     */
    leftArrowButtonProps?: Partial<IconButtonProps>;
    /**
     * Props to pass to right arrow button
     * @type {Partial<IconButtonProps>}
     */
    rightArrowButtonProps?: Partial<IconButtonProps>;
}
interface ArrowSwitcherProps extends ExportedArrowSwitcherProps, React.HTMLProps<HTMLDivElement> {
    isLeftDisabled: boolean;
    isLeftHidden?: boolean;
    isRightDisabled: boolean;
    isRightHidden?: boolean;
    onLeftClick: () => void;
    onRightClick: () => void;
    text?: string;
}
export declare const useStyles: (props?: any) => Record<"hidden" | "iconButton" | "previousMonthButtonMargin", string>;
export declare const ArrowSwitcher: React.NamedExoticComponent<ArrowSwitcherProps>;
export {};
