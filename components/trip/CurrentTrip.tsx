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
  Typography,
} from '@mui/material';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

// Component
import SearchTrip from './SearchTrip';

// Interface
interface IChatList {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const dummyData = [
  {
    name: 'Lima Peru',
    dates: Date.now(),
  },
  {
    name: 'Paris France',
    dates: Date.now(),
  },
  {
    name: 'Sao Paulo  Brazil ',
    dates: Date.now(),
  },
  {
    name: 'Lima Peru',
    dates: Date.now(),
  },
  {
    name: 'Paris France',
    dates: Date.now(),
  },
  {
    name: 'Sao Paulo  Brazil ',
    dates: Date.now(),
  },
  {
    name: 'Lima Peru',
    dates: Date.now(),
  },
  {
    name: 'Paris France',
    dates: Date.now(),
  },
  {
    name: 'Sao Paulo  Brazil ',
    dates: Date.now(),
  },
  {
    name: 'Sao Paulo  Brazil ',
    dates: Date.now(),
  },
  {
    name: 'Lima Peru',
    dates: Date.now(),
  },
  {
    name: 'Paris France',
    dates: Date.now(),
  },
  {
    name: 'Sao Paulo  Brazil ',
    dates: Date.now(),
  },
];
// Main
const CurrentTrip: React.FC<IChatList> = ({ setCurrentView }) => {
  const [staticCurrentTrip, setStaticCurrentTrip] = useState<
    { name: string; dates: number }[]
  >([]);
  const [currentTrip, setCurrentTrip] = useState<
    { name: string; dates: number }[]
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
    <Box
      sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: 30 }}
        >
          Trips
        </Typography>
        <IconButton
          onClick={() => setCurrentView('contactList')}
          size="medium"
          color="primary"
        >
          <MapsUgcIcon />
        </IconButton>
      </Box>
      <SearchTrip searchTrip={searchTrip} requestSearch={requestSearch} />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 0,
        }}
      >
        <List sx={{ overflowY: 'scroll' }}>
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
