import * as React from 'react';
import { WrapperProps } from './Wrapper';
import { StaticWrapperProps } from './StaticWrapper';
import { InnerDesktopWrapperProps } from './DesktopWrapper';
import { DialogProps as MuiDialogProps } from '@material-ui/core/Dialog';
import { ExportedPickerModalProps } from '../_shared/PickerModalDialog';
export interface InnerMobileWrapperProps extends ExportedPickerModalProps {
    /**
     * Props to be passed directly to material-ui Dialog
     * @type {Partial<MuiDialogProps>}
     */
    DialogProps?: Partial<MuiDialogProps>;
}
export interface MobileWrapperProps extends InnerMobileWrapperProps, WrapperProps, Partial<InnerDesktopWrapperProps & StaticWrapperProps> {
}
export declare const MobileWrapper: React.FC<MobileWrapperProps>;
