// Package
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { getFirebase } from '../../../lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Component
import FriendRequestInput from '../FriendRequestInput';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const FriendRequest: React.FC<IChatList> = ({ setCurrentView }) => {
  const { auth, firestore } = getFirebase();
  const currentUser = auth.currentUser;
  const [friendRequests, setFriendRequests] = useState<
    { id: string; name: string }[]
  >([]);

  useEffect(() => {
    const getFriendRequestsQuery = query(
      collection(firestore, `users/${currentUser?.uid}/contact_requests`),
      where('status', '==', 'pending')
    );

    const unsubscribe = onSnapshot(getFriendRequestsQuery, (querySnapshot) => {
      const friendRequests = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: data.id,
          name: data.name,
        };
      });
      setFriendRequests(friendRequests);
    });

    return () => unsubscribe();
  }, [currentUser?.uid, firestore]);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center">
          <IconButton
            onClick={() => setCurrentView('currentTrip')}
            size="medium"
            color="primary"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            sx={{ color: 'grey.700', fontWeight: 'bold', fontSize: 20 }}
          >
            Friend Requests
          </Typography>
        </Stack>
        <FriendRequestInput />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 0,
        }}
      >
        <List
          sx={{
            overflowY: 'auto',
            borderTop: 1,
            borderColor: 'grey.300',
          }}
        >
          {friendRequests.map((friend) => (
            <ListItem key={friend.id} alignItems="flex-start" divider={true}>
              <ListItemAvatar>
                <Avatar alt={friend.name} src="doesNotExist.jpeg" />
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
                secondary={
                  <Stack
                    direction="row"
                    spacing={2}
                    component="span"
                    sx={{ mt: 1 }}
                  >
                    <Button variant="contained" type="submit">
                      Confirm
                    </Button>
                    <Button variant="outlined">Delete</Button>
                  </Stack>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FriendRequest;
