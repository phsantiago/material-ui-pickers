import * as React from 'react';
import { DayProps } from '../views/Calendar/Day';
interface DateRangeDayProps extends DayProps {
    isHighlighting: boolean;
    isEndOfHighlighting: boolean;
    isStartOfHighlighting: boolean;
    isPreviewing: boolean;
    isEndOfPreviewing: boolean;
    isStartOfPreviewing: boolean;
}
export declare const PureDateRangeDay: {
    ({ day, className, selected, isPreviewing, isStartOfPreviewing, isEndOfPreviewing, isHighlighting, isEndOfHighlighting, isStartOfHighlighting, inCurrentMonth, ...other }: DateRangeDayProps): JSX.Element;
    displayName: string;
};
export declare const DateRangeDay: React.MemoExoticComponent<{
    ({ day, className, selected, isPreviewing, isStartOfPreviewing, isEndOfPreviewing, isHighlighting, isEndOfHighlighting, isStartOfHighlighting, inCurrentMonth, ...other }: DateRangeDayProps): JSX.Element;
    displayName: string;
}>;
export {};
