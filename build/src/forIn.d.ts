export declare function forIn<T>(src: {
    [id: string]: T;
}, func: (item: T, field: string) => void): void;
export declare function forIn(src: any, func: (item: any, field: string) => void): void;
