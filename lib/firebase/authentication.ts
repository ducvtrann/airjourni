import { getFirebase } from './index';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const { auth, firestore } = getFirebase();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    const detailedResponse = getAdditionalUserInfo(response);

    if (detailedResponse?.isNewUser) {
      const user = response.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        friends: [],
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const signInWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, new FacebookAuthProvider());
    const detailedResponse = getAdditionalUserInfo(response);

    if (detailedResponse?.isNewUser) {
      const user = response.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const signInWithTwitter = async () => {
  try {
    const response = await signInWithPopup(auth, new TwitterAuthProvider());
    const detailedResponse = getAdditionalUserInfo(response);

    if (detailedResponse?.isNewUser) {
      const user = response.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const authSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
