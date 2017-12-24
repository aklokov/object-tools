"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = require("./isFunction");
function forIn(src, func) {
    if (isFunction_1.isFunction(src.hasOwnProperty)) {
        for (let field in src) {
            if (src.hasOwnProperty(field)) {
                func(src[field], field);
            }
        }
    }
    else {
        for (let field in src) {
            func(src[field], field);
        }
    }
}
exports.forIn = forIn;
//# sourceMappingURL=forIn.js.map