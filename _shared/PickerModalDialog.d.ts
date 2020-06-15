import * as React from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
export interface ExportedPickerModalProps {
    /**
     * "OK" button text.
     * @default "OK"
     */
    okText?: React.ReactNode;
    /**
     * "CANCEL" Text message
     * @default "CANCEL"
     */
    cancelText?: React.ReactNode;
    /**
     * "CLEAR" Text message
     * @default "CLEAR"
     */
    clearText?: React.ReactNode;
    /**
     * "TODAY" Text message
     * @default "TODAY"
     */
    todayText?: React.ReactNode;
    /**
     * If `true`, it shows the clear action in the picker dialog.
     * @default false
     */
    clearable?: boolean;
    /**
     * If `true`, the today button will be displayed. **Note** that `showClearButton` has a higher priority.
     * @default false
     */
    showTodayButton?: boolean;
    showTabs?: boolean;
    wider?: boolean;
}
export interface PickerModalDialogProps extends ExportedPickerModalProps, DialogProps {
    onAccept: () => void;
    onClear: () => void;
    onDismiss: () => void;
    onSetToday: () => void;
}
export declare const useStyles: (props?: any) => Record<"dialog" | "dialogRoot" | "dialogRootWider" | "dialogContainer" | "dialogAction" | "withAdditionalAction", string>;
export declare const PickerModalDialog: React.FC<PickerModalDialogProps>;
