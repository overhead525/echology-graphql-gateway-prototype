import { gql } from 'apollo-server';

const typeDefQuery = gql`
  extend type Query {
    lead(id: String!): Lead
    leads: [Lead]!
    emailAddresses: [String]!
    names: [String]!
  }
`;

export default typeDefQuery;
