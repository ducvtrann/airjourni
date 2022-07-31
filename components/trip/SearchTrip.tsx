// Package
import { MdSearch } from 'react-icons/md';
import { TextInput } from 'flowbite-react';

// Main
const SearchTrip: React.FC = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <TextInput
          id="destination"
          type="text"
          placeholder="Give your trip a name"
          required={true}
          icon={MdSearch}
        />
      </div>
    </form>
  );
};

export default SearchTrip;
