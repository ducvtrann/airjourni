import { getFirebase } from './index';
import {
  collection,
  doc,
  query,
  setDoc,
  where,
  limit,
  getDocs,
} from 'firebase/firestore';

const { auth, firestore } = getFirebase();

const locateUserBy = async (searchBy: string, searchValue: string) => {
  try {
    const usersCol = collection(firestore, 'users');
    const userQuery = query(
      usersCol,
      where(searchBy, '==', searchValue),
      limit(1)
    );
    const docsSnap = await getDocs(userQuery);

    return docsSnap.docs.map((doc) => doc.data()).at(0);
  } catch (error) {
    console.log(`Error locatingUser: ${error}`);
  }
};

export const sendFriendRequest = async (email: string) => {
  try {
    const currentUser = auth.currentUser;
    const requestedUser = await locateUserBy('email', email);

    if (requestedUser && currentUser) {
      await setDoc(
        doc(
          firestore,
          `users/${requestedUser.uid}/contact_requests/${currentUser.uid}`
        ),
        {
          id: currentUser.uid,
          name: currentUser.displayName,
          friendship: false,
          status: 'pending',
        }
      );
    }
  } catch (error) {
    console.log(`Error sendContactRequest: ${error}`);
  }
};
