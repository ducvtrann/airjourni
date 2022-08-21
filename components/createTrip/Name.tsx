import * as React from 'react';
import { Button, TextField } from '@mui/material';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IAppProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const CreateNameTrip: React.FC<IAppProps> = ({ name, setName }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        sx={{ flexGrow: 1 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Name
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: -10,
          horizontal: 132,
        }}
      >
        <MenuItem
          disableRipple
          sx={{
            width: 400,
            py: 2,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <TextField
            fullWidth
            label="Give your trip a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default CreateNameTrip;
