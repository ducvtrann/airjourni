import * as React from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { Button, Menu, MenuItem } from '@mui/material';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface IDate {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DatePicker: React.FC<IDate> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges?.selection?.startDate || new Date());
    setEndDate(ranges?.selection?.endDate || new Date());
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Date
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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: -10,
          horizontal: 165,
        }}
      >
        <MenuItem
          disableRipple
          sx={{
            width: 400,
            justifyContent: 'center',
            py: 2,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <DateRange
            minDate={new Date()}
            rangeColors={['#005bbb']}
            ranges={[selectionRange]}
            onChange={(ranges) => handleSelect(ranges)}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default DatePicker;
