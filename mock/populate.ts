import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

const jsonData = fs.readFileSync(
  path.join(__dirname + '/../mock/leads.json'),
  'utf-8'
);

interface DataElement {
  id: string;
  first_name: string;
  email: string;
}

const data: Array<DataElement> = JSON.parse(jsonData);

const populate = async (collectionString: string) => {
  const collection = await admin.firestore().collection(collectionString).get();
  const toUseID = 10000;
  /*
  const ids = await collection.docs.map(async (doc) => {
    return await doc.data().id;
  });
  if (ids.length > 0) {
    toUseID = ids.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });
    toUseID += 1;
  } else {
    toUseID = 10000;
  }
  */
  data.forEach(async (element, index) => {
    const elementID = toUseID + index;
    await admin
      .firestore()
      .collection(collectionString)
      .doc(`${elementID}`)
      .set({
        id: elementID,
        firstName: element.first_name,
        emailAddress: element.email,
      })
      .then((docRef) => {
        console.log(`Document written at: ${docRef.writeTime}`);
      })
      .catch((error) => {
        console.error(`Error adding document: `, error);
      });
  });
};

export default populate;
