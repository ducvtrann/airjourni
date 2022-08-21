import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  connectFirestoreEmulator,
  Firestore,
} from 'firebase/firestore';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-ymkefT34cm3d0U8QnriVfvFPBFVMl5I',
  authDomain: 'airjourni-84e2f.firebaseapp.com',
  projectId: 'airjourni-84e2f',
  storageBucket: 'airjourni-84e2f.appspot.com',
  messagingSenderId: '207866934591',
  appId: '1:207866934591:web:fe6881a694825aa08d8f8a',
  measurementId: 'G-4STMDZNLLG',
};

// Initialize Firebase
function initialize() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  return { firebaseApp, auth, firestore };
}

// Connect to Emulators
function connectToEmulators({
  firebaseApp,
  auth,
  firestore,
}: {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}) {
  if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, 'http://localhost:9099', {
      disableWarnings: true,
    });
    connectFirestoreEmulator(firestore, 'localhost', 8080);
  }

  return { firebaseApp, auth, firestore };
}

export function getFirebase() {
  const existingApp = getApps().at(0);
  if (existingApp) return initialize();

  const services = connectToEmulators(initialize());
  return services;
}
