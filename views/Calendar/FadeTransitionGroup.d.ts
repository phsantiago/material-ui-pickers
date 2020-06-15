import * as React from 'react';
interface FadeTransitionProps {
    transKey: React.Key;
    className?: string;
    reduceAnimations: boolean;
    children: React.ReactElement;
}
export declare const useStyles: (props?: any) => Record<"transitionContainer" | "fadeEnter" | "fadeEnterActive" | "fadeExit" | "fadeExitActive", string>;
export declare const FadeTransitionGroup: React.FC<FadeTransitionProps>;
export {};
