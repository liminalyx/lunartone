import { FirebaseApp, initializeApp } from "firebase/app"
import { Auth, getAuth } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore"
import { Functions, getFunctions } from "firebase/functions"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const modules = (() => {
  try {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const functions = getFunctions(app)

    return {
      app,
      auth,
      firestore,
      functions,
    }
  } catch (e) {
    console.warn(`Failed to initialize Firebase: ${e}`)
  }

  return {
    app: null,
    auth: null,
    firestore: null,
    functions: null,
  }
})()

export const app = modules.app as FirebaseApp
export const auth = modules.auth as Auth
export const firestore = modules.firestore as Firestore
export const functions = modules.functions as Functions
