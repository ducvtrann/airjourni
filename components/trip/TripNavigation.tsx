// Package
import { MdNoteAdd } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';
import { Button } from 'flowbite-react';

// Component
import SearchTrip from './SearchTrip';
import NewTrip from './NewTrip';
interface IChatNavigation {
  isShowingTrip: boolean;
  setShowTrip: Dispatch<SetStateAction<boolean>>;
}

// Main
const TripNavigation: React.FC<IChatNavigation> = ({
  isShowingTrip,
  setShowTrip,
}) => {
  return (
    <div className="p-4 border-b border-gray-300">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-semibold text-blue-700">Trips</h1>
        <Button size="xs" onClick={() => setShowTrip(false)}>
          <MdNoteAdd className="w-4 h-4" />
        </Button>
      </div>
      {isShowingTrip ? <SearchTrip /> : <NewTrip setShowTrip={setShowTrip} />}
    </div>
  );
};

export default TripNavigation;
