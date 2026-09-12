import {
  applicationDefault,
  getApps,
  initializeApp,
} from "firebase-admin/app";

import { getAuth } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";

const projectId = process.env.FIREBASE_PROJECT_ID;
const bucketName = process.env.FIREBASE_STORAGE_BUCKET;

if (!projectId) {
  throw new Error(
    "FIREBASE_PROJECT_ID is not configured."
  );
}

if (!bucketName) {
  throw new Error(
    "FIREBASE_STORAGE_BUCKET is not configured."
  );
}

const firebaseAdminApp =
  getApps()[0] ??
  initializeApp({
    credential: applicationDefault(),
    projectId,
    storageBucket: bucketName,
  });

export const adminAuth =
  getAuth(firebaseAdminApp);

export const adminStorage =
  getStorage(firebaseAdminApp);