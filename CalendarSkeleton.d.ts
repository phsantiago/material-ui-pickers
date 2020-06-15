import * as React from 'react';
export interface CalendarSkeletonProps extends React.HTMLProps<HTMLDivElement> {
}
export declare const useStyles: (props?: any) => Record<"hidden" | "root" | "daySkeleton", string>;
export declare const CalendarSkeleton: React.FC<CalendarSkeletonProps>;
export default CalendarSkeleton;
