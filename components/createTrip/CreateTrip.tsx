// Package
import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

// Component
import Name from './Name';
import DatePicker from './Date';
import Member from './Member';

const CreateTrip: React.FC = () => {
  const [name, setName] = React.useState('');
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  return (
    <Box
      sx={{
        width: 400,
        py: 2,
        height: 40,
        border: 1,
        borderRadius: 2,
        borderColor: 'grey.300',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 1,
      }}
    >
      <Name name={name} setName={setName} />
      <DatePicker {...{ startDate, setStartDate, endDate, setEndDate }} />
      <Member />
      <IconButton disabled={!Boolean(name)}>
        <Add color={Boolean(name) ? 'primary' : 'inherit'} />
      </IconButton>
    </Box>
  );
};

export default CreateTrip;
