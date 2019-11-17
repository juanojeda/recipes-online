import fetch from "isomorphic-unfetch";
import get from "lodash/get";
import { default as firestore } from "./firebase";
import firebaseFieldsToDoc from "../utils/firebaseFieldsToDoc";

const convertToRealDate = secs => {
  let date = new Date(0);
  date.setUTCSeconds(secs);
  return date.toISOString();
};

const handler = async function handler(req, res) {
  try {
    const dbSnapshot = await firestore()
      .collection("recipes")
      .get();

    let docPromises = [];

    dbSnapshot.forEach(doc => {
      const docPromise = new Promise(async (res, rej) => {
        try {
          const documentSnapshot = doc.data();

          const response = {
            id: doc.id,
            fields: documentSnapshot,
            created: doc.createTime,
            updated: doc.updateTime
          };

          res(response);
        } catch (e) {
          console.log(e);
          rej(e);
        }
      });
      docPromises.push(docPromise);
    });

    const docs = await Promise.all(docPromises);

    return {
      statusCode: 200,
      body: JSON.stringify(docs),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    console.log("Error getting documents", err);
    return new Error(err);
  }
};

export { handler };
