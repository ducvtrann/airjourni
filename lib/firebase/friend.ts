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

export const friendList = async () => {
  try {
    const currentUser = auth.currentUser;
    const docsRef = collection(firestore, `users/${currentUser?.uid}/friends`);
    const querySnapshot = await getDocs(docsRef);
    const friendList = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: data.id,
        name: data.name,
      };
    });

    return friendList;
  } catch (error) {
    console.log(`Error friendList: ${error}`);
  }
};

export const friendRequestList = async () => {
  try {
    const currentUser = auth.currentUser;
    const getFriendRequestsQuery = query(
      collection(firestore, `users/${currentUser?.uid}/friend_requests`),
      where('status', '==', 'pending')
    );
    const querySnapshot = await getDocs(getFriendRequestsQuery);
    const friendRequestList = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: data.id,
        name: data.name,
      };
    });

    return friendRequestList;
  } catch (error) {
    console.log(`Error friendRequestList: ${error}`);
  }
};

export const sendFriendRequest = async (email: string) => {
  try {
    const currentUser = auth.currentUser;
    const requestedUser = await locateUserBy('email', email);

    if (requestedUser && currentUser) {
      setDoc(
        doc(
          firestore,
          `users/${requestedUser.uid}/friend_requests/${currentUser.uid}`
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
    console.log(`Error sendFriendRequest: ${error}`);
  }
};

export const addFriend = async (uid: string) => {
  try {
    const currentUser = auth.currentUser;
    const docRef = doc(
      firestore,
      `users/${currentUser?.uid}/friend_requests/${uid}`
    );
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const friend = docSnap.data();
      setDoc(
        doc(firestore, `users/${currentUser?.uid}/friend_requests/${uid}`),
        {
          ...friend,
          status: 'accepted',
        },
        { merge: true }
      );

      setDoc(doc(firestore, `users/${currentUser?.uid}/friends/${uid}`), {
        name: friend.name,
        id: friend.id,
      });

      setDoc(doc(firestore, `users/${uid}/friends/${currentUser?.uid}`), {
        name: currentUser?.displayName,
        id: currentUser?.uid,
      });
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log(`Error addFriend: ${error}`);
  }
};

export const declineFriend = async (uid: string) => {
  try {
    const currentUser = auth.currentUser;
    const docRef = doc(
      firestore,
      `users/${currentUser?.uid}/friend_requests/${uid}`
    );
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const friend = docSnap.data();
      setDoc(
        doc(firestore, `users/${currentUser?.uid}/friend_requests/${uid}`),
        {
          ...friend,
          status: 'decline',
        },
        { merge: true }
      );
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log(`Error declineFriend: ${error}`);
  }
};
