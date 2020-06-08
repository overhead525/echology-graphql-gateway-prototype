"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var queries_1 = require("./queries");
var mutations_1 = require("./mutations");
var baseResolvers = __assign(__assign({}, queries_1["default"]), mutations_1["default"]);
exports["default"] = baseResolvers;
//# sourceMappingURL=index.js.map