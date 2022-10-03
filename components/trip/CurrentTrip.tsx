// Package
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// Component
import SearchTrip from './SearchTrip';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
  setAddFriend: Dispatch<SetStateAction<boolean>>;
}

const dummyData: { name: string; dates: string }[] = [];
// Main
const CurrentTrip: React.FC<IChatList> = ({ setCurrentView, setAddFriend }) => {
  const [staticCurrentTrip, setStaticCurrentTrip] = useState<
    { name: string; dates: string }[]
  >([]);
  const [currentTrip, setCurrentTrip] = useState<
    { name: string; dates: string }[]
  >([]);
  const [searchTrip, setSearchTrip] = useState('');

  useEffect(() => {
    setStaticCurrentTrip(dummyData);
    setCurrentTrip(dummyData);
  }, []);

  const requestSearch = (searchedVal: string) => {
    const filteredItems = currentTrip.filter((item) => {
      return item.name.toLowerCase().includes(searchedVal.toLowerCase());
    });

    setSearchTrip(searchedVal);
    searchedVal
      ? setCurrentTrip(filteredItems)
      : setCurrentTrip(staticCurrentTrip);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, paddingBottom: 0 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: 24 }}
          >
            Current Trips
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <IconButton
              onClick={() => setCurrentView('contactList')}
              size="medium"
              color="primary"
            >
              <AddPhotoAlternateIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setAddFriend(true);
                setCurrentView('contactList');
              }}
              size="medium"
              color="primary"
            >
              <PersonAddIcon />
            </IconButton>
          </Stack>
        </Stack>
        <SearchTrip searchTrip={searchTrip} requestSearch={requestSearch} />
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
          {currentTrip.map((trip, index) => (
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

export default CurrentTrip;
