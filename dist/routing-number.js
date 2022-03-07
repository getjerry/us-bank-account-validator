"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_number_list_1 = require("./routing-number-list");
var allowedRoutingNumbers = routing_number_list_1.default.reduce(function (result, number) {
    result[number] = true;
    return result;
}, Object.create(null));
function default_1(value) {
    if (typeof value !== "string") {
        return {
            isValid: false,
            isPotentiallyValid: false,
        };
    }
    var isValid = value in allowedRoutingNumbers;
    var isPotentiallyValid = /^\d{0,8}$/.test(value);
    return {
        isValid: isValid,
        isPotentiallyValid: isValid || isPotentiallyValid,
    };
}
exports.default = default_1;
