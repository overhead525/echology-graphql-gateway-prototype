import { Lead, RawLead, UpdateResponse } from '../Shared/interfaces';
import * as admin from 'firebase-admin';
import { ValidationError, ApolloError } from 'apollo-server';
import {
  getProperID,
  incrementID,
  checkIfDuplicateLead,
} from '../Shared/helpers';

const mutationResolvers = {
  Mutation: {
    async createLead(_: null, args: { rawLead: RawLead }) {
      await checkIfDuplicateLead('leads', args.rawLead);
      const lastID = await getProperID('leads');
      try {
        const response = await admin
          .firestore()
          .collection('leads')
          .doc(incrementID(lastID))
          .set({
            ...args.rawLead,
            id: incrementID(lastID),
          });
        const success = response.writeTime ? true : false; // If there is an id, it must've been added by firebase
        const newLeadDoc = await admin
          .firestore()
          .collection('leads')
          .doc(incrementID(lastID))
          .get();
        const newLead = newLeadDoc.data() as Lead;
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
    async deleteLead(_: null, args: { id: string }) {
      try {
        const initDoc = await admin.firestore().doc(`leads/${args.id}`).get();
        if (initDoc.exists) {
          await admin.firestore().doc(`leads/${args.id}`).delete();
          const prevDoc = await admin.firestore().doc(`leads/${args.id}`).get();
          const success = !prevDoc.exists;
          return (
            ({
              success,
            } as UpdateResponse) ||
            new ValidationError('Error: Lead could not be deleted')
          );
        } else {
          return new ValidationError(
            `There is no lead with id: ${args.id} to delete.`
          );
        }
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

export default mutationResolvers;
