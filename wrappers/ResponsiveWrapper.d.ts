import * as React from 'react';
import { MobileWrapperProps } from './MobileWrapper';
import { DesktopWrapperProps } from './DesktopWrapper';
import { DesktopPopperWrapperProps } from './DesktopPopperWrapper';
export interface ResponsiveWrapperProps extends DesktopWrapperProps, DesktopPopperWrapperProps, MobileWrapperProps {
    /**
     * CSS media query when `Mobile` mode will be changed to `Desktop`.
     *
     * @default "@media (pointer: fine)"
     * @example "@media (min-width: 720px)" or theme.breakpoints.up("sm")
     */
    desktopModeMediaQuery?: string;
}
export declare const makeResponsiveWrapper: (DesktopWrapperComponent: React.FC<DesktopWrapperProps | DesktopPopperWrapperProps>, MobileWrapperComponent: React.FC<MobileWrapperProps>) => React.FC<ResponsiveWrapperProps>;
export declare const ResponsiveWrapper: React.FC<ResponsiveWrapperProps>;
export declare const ResponsivePopperWrapper: React.FC<ResponsiveWrapperProps>;
