import * as admin from 'firebase-admin';

import { Lead, RawLead } from '../Shared/interfaces';

export const getProperID = async (collectionString: string) => {
  try {
    const collectionRef = await admin
      .firestore()
      .collection(collectionString)
      .get();
    const collectionObject = collectionRef.docs.map(
      (lead) => lead.data() as Lead
    );
    if (collectionObject.length > 0) {
      const collectionIDs = collectionObject.map((lead) => {
        return lead.id;
      });
      const maxID: string = collectionIDs.reduce((prev, curr) => {
        const convPrev: number = parseInt(prev);
        const convCurr: number = parseInt(curr);
        return convCurr > convPrev
          ? convCurr.toString(10)
          : convPrev.toString(10);
      });
      return maxID;
    } else {
      return '10000';
    }
  } catch (error) {
    throw error;
  }
};

export const incrementID = (id: string): string => {
  const incrementedID: number = parseInt(id, 10) + 1;
  return incrementedID.toString();
};

export const checkIfDuplicateLead = async (
  collectionString: string,
  rawLead: RawLead
): Promise<void> => {
  const collectionRef = await admin
    .firestore()
    .collection(collectionString)
    .where('emailAddress', '==', `${rawLead.emailAddress}`)
    // .where('firstName', '==', `${rawLead.firstName}`)
    .get();
  const collectionObject = collectionRef.docs.map(
    (lead) => lead.data() as Lead
  );
  if (collectionObject.length > 0) {
    throw new Error(
      `There is already a lead with emailAddress: ${rawLead.emailAddress} and firstName: ${rawLead.firstName} with id: ${collectionObject[0].id}`
    );
  }
};
