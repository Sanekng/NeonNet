import admin from 'firebase-admin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseServicePath = path.resolve(__dirname, '../firebaseServiceKey.json');

admin.initializeApp({
    credential: admin.credential.cert(firebaseServicePath),
    storageBucket: 'gs://neonnet-58dcc.appspot.com'
});

const bucket = admin.storage().bucket();
export default bucket;