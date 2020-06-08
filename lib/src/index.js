"use strict";
exports.__esModule = true;
var admin = require("firebase-admin");
var serviceAccount = require('../service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
// populate('leads');
var apollo_server_1 = require("apollo-server");
var typeDefs = require('./TypeDefs');
var resolvers = require('./Resolvers')["default"];
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
//# sourceMappingURL=index.js.map