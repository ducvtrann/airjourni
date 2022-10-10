// Package
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { friendList } from '../../../lib/firebase/friend';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Component
import NewTripInput from '../NewTripInput';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const ContactList: React.FC<IChatList> = ({ setCurrentView }) => {
  const [friendsList, setFriendsList] = useState<
    { id: string; name: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await friendList();
      if (data) {
        setFriendsList(data);
      }
    };

    fetchData();
  }, []);

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
            New Trip
          </Typography>
        </Stack>
        <NewTripInput setCurrentView={setCurrentView} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 0,
        }}
      >
        <List sx={{ overflowY: 'auto', borderTop: 1, borderColor: 'grey.300' }}>
          {friendsList.map((friend, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText primary={friend.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ContactList;
