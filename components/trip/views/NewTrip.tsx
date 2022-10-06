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
import NewTripInput from '../NewTripInput';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const ContactList: React.FC<IChatList> = ({ setCurrentView }) => {
  const dummyData: { name: string; dates: string }[] = [];

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, paddingBottom: 0 }}>
        <Stack direction="row" justifyContent="space-between">
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
