"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefMutation = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Mutation {\n    createLead(rawLead: RawLeadInput!): UpdateResponse!\n    deleteLead(id: String!): UpdateResponse!\n  }\n"], ["\n  extend type Mutation {\n    createLead(rawLead: RawLeadInput!): UpdateResponse!\n    deleteLead(id: String!): UpdateResponse!\n  }\n"])));
exports["default"] = typeDefMutation;
var templateObject_1;
//# sourceMappingURL=mutations.js.map