"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefQuery = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    lead(id: String!): Lead\n    leads: [Lead]!\n    emailAddresses: [String]!\n    names: [String]!\n  }\n"], ["\n  extend type Query {\n    lead(id: String!): Lead\n    leads: [Lead]!\n    emailAddresses: [String]!\n    names: [String]!\n  }\n"])));
exports["default"] = typeDefQuery;
var templateObject_1;
//# sourceMappingURL=queries.js.map