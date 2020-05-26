import { gql } from 'apollo-server';

const typeDefMutation = gql`
  extend type Mutation {
    createLead(rawLead: RawLeadInput!): UpdateResponse!
    deleteLead(id: String!): UpdateResponse!
  }
`;

export default typeDefMutation;
