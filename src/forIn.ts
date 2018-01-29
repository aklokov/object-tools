import { isFunction } from "./isFunction";

export function forIn<T>(src: { [id: string]: T; }, func: (item: T, field: string) => void): void;
export function forIn(src: any, func: (item: any, field: string) => void): void;
export function forIn(src: any, func: (item: any, field: string) => void): void {
  if (isFunction(src.hasOwnProperty)) {
    for (let field in src) {
      if (src.hasOwnProperty(field)) {
        func(src[field], field);
      }
    }
  } else {
    /* tslint:disable */
    for (let field in src) {
      func(src[field], field);
    }
    /* tslint:enable */
  }
}
