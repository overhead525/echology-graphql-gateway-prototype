import { gql } from 'apollo-server';
import typeDefQuery from './queries';
import typeDefMutation from './mutations';

const baseTypeDefs = gql`
  # A lead that submitted the form on the landing page
  type Lead {
    id: String!
    firstName: String!
    emailAddress: String!
  }

  input LeadInput {
    id: String!
    firstName: String!
    emailAddress: String!
  }

  type RawLead {
    firstName: String!
    emailAddress: String!
  }

  input RawLeadInput {
    firstName: String!
    emailAddress: String!
  }

  type UpdateResponse {
    success: Boolean!
    message: String!
    lead: Lead
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const typeDefsArray = [baseTypeDefs, typeDefQuery, typeDefMutation];

module.exports = typeDefsArray;
