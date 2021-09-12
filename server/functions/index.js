const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send("Hello from Firebase!");
  });
});
