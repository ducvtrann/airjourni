// Package
import { Dispatch, SetStateAction } from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

// Component
import FriendRequestInput from '../FriendRequestInput';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const dummyData: { name: string; dates: string }[] = [];
// Main
const FriendRequest: React.FC<IChatList> = ({ setCurrentView }) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, paddingBottom: 0 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{ color: 'grey.800', fontWeight: 'bold', fontSize: 20 }}
          >
            Friend Requests
          </Typography>
        </Stack>
        <FriendRequestInput setCurrentView={setCurrentView} />
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
            <Box key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={trip.name} secondary={trip.dates} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FriendRequest;
