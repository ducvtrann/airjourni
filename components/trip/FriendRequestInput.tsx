// Package
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddIcon from '@mui/icons-material/Add';
import { FormEvent, useState } from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { sendFriendRequest } from '../../lib/firebase/contact';

// Main
const NewFriend: React.FC = ({}) => {
  const [newFriendEmail, setNewFriendEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendFriendRequest(newFriendEmail);
    setNewFriendEmail('');
  };

  return (
    <Box component="form" onSubmit={(e) => handleSubmit(e)}>
      <FormControl margin="dense" size="small" fullWidth={true}>
        <OutlinedInput
          placeholder="Add friends by email"
          value={newFriendEmail}
          onChange={(e) => setNewFriendEmail(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <GroupAddIcon />
            </InputAdornment>
          }
          endAdornment={
            <IconButton type="submit" aria-label="search">
              <AddIcon />
            </IconButton>
          }
          sx={{ pr: 0 }}
        />
      </FormControl>
    </Box>
  );
};

export default NewFriend;
