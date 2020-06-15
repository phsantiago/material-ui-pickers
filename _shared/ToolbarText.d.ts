import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { ExtendMui } from '../typings/helpers';
export interface ToolbarTextProps extends ExtendMui<TypographyProps> {
    selected?: boolean;
    value: React.ReactNode;
}
export declare const useStyles: (props?: any) => Record<"toolbarTxt" | "toolbarBtnSelected", string>;
declare const ToolbarText: React.FC<ToolbarTextProps>;
export default ToolbarText;
