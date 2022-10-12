// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Package
import React from 'react';
import DatePicker from 'react-datepicker';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Stack } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import 'react-datepicker/dist/react-datepicker.css';

// Interface
interface ICalendar {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endDate: Date;
  setEndDate: Dispatch<SetStateAction<Date>>;
}

// Main
const Calendar: React.FC<ICalendar> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: '0px !important' }}>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          setEndDate(date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<StartDatePickerCustom />}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<EndDatePickerCustom />}
      />
    </Stack>
  );
};

const StartDatePickerCustom = React.forwardRef((props, ref) => {
  return (
    <FormControl margin="dense" size="small" fullWidth={true}>
      <OutlinedInput
        onClick={props.onClick}
        ref={ref}
        value={props.value}
        startAdornment={
          <InputAdornment position="start">
            <CalendarTodayIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

StartDatePickerCustom.displayName = 'Start Date Picker';

const EndDatePickerCustom = React.forwardRef((props, ref) => {
  return (
    <FormControl margin="dense" size="small" fullWidth={true}>
      <OutlinedInput
        onClick={props.onClick}
        ref={ref}
        value={props.value}
        startAdornment={
          <InputAdornment position="start">
            <EventIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

EndDatePickerCustom.displayName = 'Start Date Picker';

export default Calendar;
