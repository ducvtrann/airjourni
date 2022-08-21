// Package
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { ChangeEvent } from 'react';

// Interface
interface ISearchTrip {
  searchTrip: string;
  requestSearch: (searchedVal: string) => void;
}

// Main
const SearchTrip: React.FC<ISearchTrip> = ({ searchTrip, requestSearch }) => {
  const filterTrip = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    requestSearch(e.target.value);
  };
  return (
    <FormControl
      margin="dense"
      size="small"
      fullWidth={true}
      sx={{ borderBottom: 1, borderColor: 'grey.300' }}
    >
      <OutlinedInput
        placeholder="Search recent trips"
        sx={{ bgcolor: 'grey.100', borderRadius: 4, mb: 2 }}
        value={searchTrip}
        onChange={(e) => filterTrip(e)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchTrip;
