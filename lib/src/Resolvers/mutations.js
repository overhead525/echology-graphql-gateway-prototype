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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var admin = require("firebase-admin");
var apollo_server_1 = require("apollo-server");
var helpers_1 = require("../Shared/helpers");
var mutationResolvers = {
    Mutation: {
        createLead: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var lastID, response, success, newLeadDoc, newLead, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, helpers_1.checkIfDuplicateLead('leads', args.rawLead)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, helpers_1.getProperID('leads')];
                        case 2:
                            lastID = _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 6, , 7]);
                            return [4 /*yield*/, admin
                                    .firestore()
                                    .collection('leads')
                                    .doc(helpers_1.incrementID(lastID))
                                    .set(__assign(__assign({}, args.rawLead), { id: helpers_1.incrementID(lastID) }))];
                        case 4:
                            response = _a.sent();
                            success = response.writeTime ? true : false;
                            return [4 /*yield*/, admin
                                    .firestore()
                                    .collection('leads')
                                    .doc(helpers_1.incrementID(lastID))
                                    .get()];
                        case 5:
                            newLeadDoc = _a.sent();
                            newLead = newLeadDoc.data();
                            return [2 /*return*/, ({
                                    success: success,
                                    lead: newLead
                                } ||
                                    new apollo_server_1.ValidationError('Error: Lead could not be added'))];
                        case 6:
                            error_1 = _a.sent();
                            throw new apollo_server_1.ApolloError(error_1);
                        case 7: return [2 /*return*/];
                    }
                });
            });
        },
        deleteLead: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var initDoc, prevDoc, success, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, admin.firestore().doc("leads/" + args.id).get()];
                        case 1:
                            initDoc = _a.sent();
                            if (!initDoc.exists) return [3 /*break*/, 4];
                            return [4 /*yield*/, admin.firestore().doc("leads/" + args.id)["delete"]()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, admin.firestore().doc("leads/" + args.id).get()];
                        case 3:
                            prevDoc = _a.sent();
                            success = !prevDoc.exists;
                            return [2 /*return*/, ({
                                    success: success
                                } ||
                                    new apollo_server_1.ValidationError('Error: Lead could not be deleted'))];
                        case 4: return [2 /*return*/, new apollo_server_1.ValidationError("There is no lead with id: " + args.id + " to delete.")];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_2 = _a.sent();
                            throw new apollo_server_1.ApolloError(error_2);
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
    }
};
exports["default"] = mutationResolvers;
//# sourceMappingURL=mutations.js.map