import { getFirebase } from './index';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const { auth } = getFirebase();

export const signInWithGoogle = () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signInWithFacebook = () =>
  signInWithPopup(auth, new FacebookAuthProvider());

export const signInWithTwitter = () =>
  signInWithPopup(auth, new TwitterAuthProvider());

export const authSignOut = () => signOut(auth);
