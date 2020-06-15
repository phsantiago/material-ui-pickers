import * as React from 'react';
export declare function arrayIncludes<T>(array: T[] | readonly T[], itemOrItems: T | T[]): boolean;
export declare const onSpaceOrEnter: (innerFn: () => void, onFocus?: ((e: React.KeyboardEvent<any>) => void) | undefined) => (e: React.KeyboardEvent) => void;
export declare const pipe: (...fns: ((...args: any[]) => any)[]) => (...args: any[]) => any;
export declare const executeInTheNextEventLoopTick: (fn: () => void) => void;
export declare function createDelegatedEventHandler<TEvent>(fn: (event: TEvent) => void, onEvent?: (event: TEvent) => void): (event: TEvent) => void;
export declare function mergeRefs<T>(refs: (React.Ref<T | null> | undefined)[]): (value: T) => void;
