// Package
import { Dispatch, SetStateAction } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

// Component
import NewTrip from './NewTrip';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const ContactList: React.FC<IChatList> = ({ setCurrentView }) => {
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
    ,
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
    ,
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
    <Box
      sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 1,
        }}
      >
        <Typography
          sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: 30 }}
        >
          New Trip
        </Typography>
      </Box>

      <NewTrip setCurrentView={setCurrentView} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 0,
        }}
      >
        <List sx={{ overflowY: 'scroll' }}>
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
