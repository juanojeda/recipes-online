import { default as firestore } from "./firebase";

const convertToRealDate = secs => {
  let date = new Date(0);
  date.setUTCSeconds(secs);
  return date.toISOString();
};

const buildListResponse = async () => {
  const dbSnapshot = await firestore()
    .collection("recipes")
    .get();

  let docPromises = [];

  dbSnapshot.forEach(doc => {
    const docPromise = new Promise(async (res, rej) => {
      try {
        const { slug, title } = doc.data();
        const response = {
          id: doc.id,
          slug,
          title
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

  return docs;
};

const buildDetailResponse = async slug => {
  const dbSnapshot = await firestore()
    .collection("recipes")
    .where("slug", "==", slug)
    .get();

  let docPromises = [];

  dbSnapshot.forEach(doc => {
    const docPromise = new Promise(async (res, rej) => {
      try {
        const { title, slug, ...fields } = doc.data();
        const response = {
          id: doc.id,
          title,
          fields
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

  return docs;
};

const handler = async function handler(event, context) {
  const { slug } = event.queryStringParameters || {};
  let response;
  try {
    if (slug) {
      const data = await buildDetailResponse(slug);
      if (data.length) {
        response = data[0];
      } else {
        response = {
          error: true,
          errorMessage: "No recipe found with that slug"
        };
      }
    } else {
      response = await buildListResponse();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    console.log("Error getting documents", err);
    return new Error(err);
  }
};

export { handler };
