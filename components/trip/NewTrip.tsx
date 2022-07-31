// Package
import { MdPlace, MdPersonAdd } from 'react-icons/md';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';

// Component
import Calendar from './Calendar';

// Interface
interface INewTrip {
  setShowTrip: Dispatch<SetStateAction<boolean>>;
}

// Main
const NewTrip: React.FC<INewTrip> = ({ setShowTrip }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <form className="flex flex-col gap-4">
      <div>
        <TextInput
          id="destination"
          type="text"
          placeholder="Give your trip a name"
          required={true}
          icon={MdPlace}
        />
      </div>
      <div>
        <Calendar {...{ startDate, setStartDate, endDate, setEndDate }} />
      </div>
      <div>
        <TextInput
          id="members"
          type="text"
          placeholder="Invite friends or solo your journey"
          required={false}
          icon={MdPersonAdd}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          color="gray"
          size="sm"
          onClick={() => {
            setShowTrip(true);
          }}
        >
          Cancel
        </Button>
        <Button size="sm">Create</Button>
      </div>
    </form>
  );
};

export default NewTrip;
