// Package
import { Dispatch, SetStateAction } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

// Component
import NewTrip from './NewTrip';
import NewFriend from './NewFriend';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
  setAddFriend: Dispatch<SetStateAction<boolean>>;
  showAddFriend: boolean;
}

// Main
const ContactList: React.FC<IChatList> = ({
  setCurrentView,
  setAddFriend,
  showAddFriend,
}) => {
  const dummyData = [
    {
      name: 'Duc Tran',
      dates: Date.now(),
    },
    {
      name: 'Ducky',
      dates: Date.now(),
    },
    {
      name: 'Duck Sauce',
      dates: Date.now(),
    },
  ];

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, paddingBottom: 0 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: 24 }}
          >
            New Trip
          </Typography>
        </Stack>
        {showAddFriend ? (
          <NewFriend
            setCurrentView={setCurrentView}
            setAddFriend={setAddFriend}
          />
        ) : (
          <NewTrip setCurrentView={setCurrentView} />
        )}
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
          {dummyData.map((trip, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar></Avatar>
              </ListItemAvatar>
              <ListItemText primary={trip.name} secondary={trip.dates} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ContactList;
