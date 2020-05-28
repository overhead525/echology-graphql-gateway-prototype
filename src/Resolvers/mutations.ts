import { Lead, RawLead, UpdateResponse } from '../Shared/interfaces';
import * as admin from 'firebase-admin';
import { ValidationError, ApolloError } from 'apollo-server';

const mutationResolvers = {
  async createLead(rawLeadInput: RawLead) {
    try {
      const response = await (
        await admin.firestore().collection('leads').add(rawLeadInput)
      ).get();
      const success = response.id ? true : false; // If there is an id, it must've been added by firebase
      const newLead = response.data() as Lead | undefined;
      return (
        ({
          success,
          lead: newLead,
        } as UpdateResponse) ||
        new ValidationError('Error: Lead could not be added')
      );
    } catch (error) {
      throw new ApolloError(error);
    }
  },
  async deleteLead(id: string) {
    try {
      const response = await admin.firestore().doc(`leads/${id}`).delete();
      const success = response.writeTime ? true : false;
      return (
        ({
          success,
        } as UpdateResponse) ||
        new ValidationError('Error: Lead could not be deleted')
      );
    } catch (error) {
      throw new ApolloError(error);
    }
  },
};

export default mutationResolvers;
