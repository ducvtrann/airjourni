// Package
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from '@mui/material';
import { sendFriendRequest } from '../../lib/firebase/contact';

// Interface
interface INewFriend {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Main
const NewFriend: React.FC<INewFriend> = ({ setCurrentView }) => {
  const [newFriendEmail, setNewFriendEmail] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendFriendRequest(newFriendEmail);
    console.log(newFriendEmail);
    // setNewFriendEmail('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Stack spacing={2} sx={{ pb: 2 }}>
        <FormControl margin="dense" size="small" fullWidth={true}>
          <OutlinedInput
            sx={{ bgcolor: 'grey.100', borderRadius: 4 }}
            placeholder="Add friends by email"
            value={newFriendEmail}
            onChange={(e) => setNewFriendEmail(e.target.value)}
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
            onClick={() => {
              setCurrentView('currentTrip');
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Send request
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default NewFriend;
