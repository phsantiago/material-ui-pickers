import * as React from 'react';
import { PopperProps } from '@material-ui/core/Popper';
import { WrapperProps } from './Wrapper';
import { StaticWrapperProps } from './StaticWrapper';
import { InnerMobileWrapperProps } from './MobileWrapper';
import { InnerDesktopWrapperProps } from './DesktopWrapper';
import { TransitionProps } from '@material-ui/core/transitions/transition';
export interface InnerDesktopPopperWrapperProps {
    /**
     * Popper props passed to material-ui [Popper](https://material-ui.com/api/popper/#popper-api).
     */
    PopperProps?: Partial<PopperProps>;
    /**
     * Custom component for [transition](https://material-ui.com/components/transitions/#transitioncomponent-prop).
     */
    TransitionComponent?: React.ComponentType<TransitionProps>;
}
export interface DesktopPopperWrapperProps extends InnerDesktopPopperWrapperProps, WrapperProps, Partial<InnerMobileWrapperProps & StaticWrapperProps & InnerDesktopWrapperProps> {
}
export declare const DesktopPopperWrapper: React.FC<DesktopPopperWrapperProps>;
