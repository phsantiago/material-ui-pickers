import * as React from 'react';
export interface StaticWrapperProps {
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode
     * @default "static"
     */
    displayStaticWrapperAs?: 'desktop' | 'mobile' | 'static';
}
export declare const StaticWrapper: React.FC<StaticWrapperProps>;
