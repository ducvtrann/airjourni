import { getFirebase } from './index';
import {
  collection,
  doc,
  query,
  setDoc,
  where,
  limit,
  getDocs,
  getDoc,
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

export const getFriendRequests = async () => {
  try {
    const currentUser = auth.currentUser;
    const friendRequestCol = collection(
      firestore,
      `users/${currentUser?.uid}/contact_requests`
    );

    const getFriendRequestsQuery = query(
      friendRequestCol,
      where('status', '==', 'pending')
    );
    const docsSnap = await getDocs(getFriendRequestsQuery);

    return docsSnap.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(`Error getFriendRequests: ${error}`);
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

// export const acceptFriendRequest = async (userId: string) => {
//   try {
//     const currentUser = auth.currentUser;
//     const requestedUser = await locateUser(email);

//   } catch (error) {
//     console.log(`Error acceptFriendRequest: ${error}`);
//   }
// };
