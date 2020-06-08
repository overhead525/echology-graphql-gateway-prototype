"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var queries_1 = require("./queries");
var mutations_1 = require("./mutations");
var baseTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  # A lead that submitted the form on the landing page\n  type Lead {\n    id: String!\n    firstName: String!\n    emailAddress: String!\n  }\n\n  input LeadInput {\n    id: String!\n    firstName: String!\n    emailAddress: String!\n  }\n\n  type RawLead {\n    firstName: String!\n    emailAddress: String!\n  }\n\n  input RawLeadInput {\n    firstName: String!\n    emailAddress: String!\n  }\n\n  type UpdateResponse {\n    success: Boolean!\n    lead: Lead\n  }\n\n  type Query {\n    root: String\n  }\n\n  type Mutation {\n    root: String\n  }\n"], ["\n  # A lead that submitted the form on the landing page\n  type Lead {\n    id: String!\n    firstName: String!\n    emailAddress: String!\n  }\n\n  input LeadInput {\n    id: String!\n    firstName: String!\n    emailAddress: String!\n  }\n\n  type RawLead {\n    firstName: String!\n    emailAddress: String!\n  }\n\n  input RawLeadInput {\n    firstName: String!\n    emailAddress: String!\n  }\n\n  type UpdateResponse {\n    success: Boolean!\n    lead: Lead\n  }\n\n  type Query {\n    root: String\n  }\n\n  type Mutation {\n    root: String\n  }\n"])));
var typeDefsArray = [baseTypeDefs, queries_1["default"], mutations_1["default"]];
module.exports = typeDefsArray;
var templateObject_1;
//# sourceMappingURL=index.js.map