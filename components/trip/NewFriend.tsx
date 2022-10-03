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

// Interface
interface INewFriend {
  setCurrentView: Dispatch<SetStateAction<string>>;
  setAddFriend: Dispatch<SetStateAction<boolean>>;
}

// Main
const NewFriend: React.FC<INewFriend> = ({ setAddFriend, setCurrentView }) => {
  const [newFriendEmail, setNewFriendEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              setAddFriend(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default NewFriend;
