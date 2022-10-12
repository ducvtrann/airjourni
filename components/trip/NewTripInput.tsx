// Package
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from '@mui/material';

// Component
import Calendar from './CalendarInput';

// Interface
interface INewTrip {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const NewTrip: React.FC<INewTrip> = ({ setCurrentView }) => {
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(tripName);
    console.log(startDate);
    console.log(endDate);
  };

  return (
    <Box component="form" onSubmit={(e) => handleSubmit(e)}>
      <Stack spacing={2}>
        <FormControl
          margin="dense"
          size="small"
          fullWidth={true}
          sx={{ mb: -0.5 }}
        >
          <OutlinedInput
            placeholder="Give your trip a name"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <Calendar {...{ startDate, setStartDate, endDate, setEndDate }} />

        <FormControl margin="dense" size="small" fullWidth={true}>
          <OutlinedInput
            placeholder="Invite friends"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <GroupAddIcon />
              </InputAdornment>
            }
          />
        </FormControl>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={() => setCurrentView('currentTrip')}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewTrip;
