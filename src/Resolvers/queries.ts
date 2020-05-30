import { Lead } from '../Shared/interfaces';
import * as admin from 'firebase-admin';
import { ValidationError, ApolloError } from 'apollo-server';

const queryResolvers = {
  Query: {
    async lead(_: null, args: { id: string }) {
      try {
        const docRef = await admin.firestore().collection('leads').doc(args.id);
        const response = await docRef.get();
        const resultLead = response.data();
        return (resultLead as Lead) || new ValidationError('ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async leads() {
      try {
        const leads = await admin.firestore().collection('leads').get();
        return (
          (leads.docs.map((lead) => lead.data()) as Lead[]) ||
          new ValidationError(
            'Lead collection not found. Have you added any yet?'
          )
        );
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async emailAddresses() {
      try {
        const leads = await admin.firestore().collection('leads').get();
        return (
          (leads.docs.map((lead) => lead.data().emailAddress) as string[]) ||
          new ValidationError(
            'Lead collection not found. Have you added any yet?'
          )
        );
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async names() {
      try {
        const leads = await admin.firestore().collection('leads').get();
        return (
          (leads.docs.map((lead) => lead.data().firstName) as string[]) ||
          new ValidationError(
            'Lead collection not found. Have you added any yet?'
          )
        );
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

export default queryResolvers;
