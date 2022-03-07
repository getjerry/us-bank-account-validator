"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    if (typeof value !== "string") {
        return {
            isValid: false,
            isPotentiallyValid: false,
        };
    }
    return {
        isValid: value.length >= 4 && value.length <= 17,
        isPotentiallyValid: value.length <= 17,
    };
}
exports.default = default_1;
