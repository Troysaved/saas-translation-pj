import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";
// const serviceAccount = require("./serviceAccountKey.json");

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// );

let app;

if (!admin.apps.length) {
  console.log('Initializing app');
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
} else {
  console.log('App already initialized');
  app = admin.apps[0]; // Use the existing app
}

const adminDb = app.firestore();
const adminAuth = app.auth();

export { adminDb, adminAuth };