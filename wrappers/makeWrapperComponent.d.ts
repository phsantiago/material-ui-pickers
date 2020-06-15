import React from 'react';
import { StaticWrapperProps } from './StaticWrapper';
import { BasePickerProps } from '../typings/BasePicker';
import { DateInputProps } from '../_shared/PureDateInput';
import { ResponsiveWrapperProps } from './ResponsiveWrapper';
import { OmitInnerWrapperProps, SomeWrapper, WrapperProps, DateInputPropsLike } from './Wrapper';
interface MakePickerOptions<TInputProps> {
    PureDateInputComponent?: React.FC<TInputProps>;
    KeyboardDateInputComponent?: React.FC<TInputProps>;
}
interface WithWrapperProps<TInputProps = DateInputProps> {
    children: React.ReactNode;
    DateInputProps: TInputProps;
    wrapperProps: Omit<WrapperProps, 'DateInputProps'>;
}
export declare function makeWrapperComponent<TInputProps extends DateInputPropsLike<TInputValue, TDateValue>, TInputValue, TDateValue, TWrapper extends SomeWrapper = any>(Wrapper: TWrapper, { KeyboardDateInputComponent, PureDateInputComponent }: MakePickerOptions<TInputProps>): (props: Partial<BasePickerProps<TInputValue, TDateValue>> & WithWrapperProps<TInputProps> & Partial<OmitInnerWrapperProps<ResponsiveWrapperProps> & StaticWrapperProps>) => JSX.Element;
export {};
