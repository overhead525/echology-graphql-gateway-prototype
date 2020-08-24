import * as admin from 'firebase-admin';
import populate from '../mock/populate';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://echology-9feb2.firebaseio.com',
});

// populate('leads');

import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';

const typeDefs = require('./TypeDefs');
const resolvers = require('./Resolvers').default;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
