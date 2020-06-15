import * as React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export declare type SlideDirection = 'right' | 'left';
export interface SlideTransitionProps extends Omit<CSSTransitionProps, 'timeout'> {
    transKey: React.Key;
    className?: string;
    reduceAnimations: boolean;
    slideDirection: SlideDirection;
    children: React.ReactElement;
}
export declare const slideAnimationDuration = 350;
export declare const useStyles: (props?: any) => Record<"transitionContainer" | "slideEnter-left" | "slideEnter-right" | "slideEnterActive" | "slideExit" | "slideExitActiveLeft-left" | "slideExitActiveLeft-right", string>;
export declare const SlideTransition: React.SFC<SlideTransitionProps>;
