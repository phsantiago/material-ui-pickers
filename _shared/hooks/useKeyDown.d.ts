import * as React from 'react';
export declare const useIsomorphicEffect: typeof React.useEffect;
declare type KeyHandlers = Record<number, () => void>;
export declare function runKeyHandler(e: KeyboardEvent | React.KeyboardEvent, keyHandlers: KeyHandlers): void;
export declare function useKeyDownHandler(active: boolean, keyHandlers: KeyHandlers): (e: React.KeyboardEvent) => void;
export declare function useGlobalKeyDown(active: boolean, keyHandlers: KeyHandlers): void;
export declare const keycode: {
    ArrowUp: number;
    ArrowDown: number;
    ArrowLeft: number;
    ArrowRight: number;
    Enter: number;
    Home: number;
    End: number;
    PageUp: number;
    PageDown: number;
    Esc: number;
};
export {};
