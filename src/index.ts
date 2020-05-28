import * as admin from 'firebase-admin';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';

const typeDefs = require('./TypeDefs');
const resolvers = require('./Resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
