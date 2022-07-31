// Package
import { Dispatch, SetStateAction } from 'react';

// Component
import TripNavigation from './TripNavigation';

// Interface
interface IContactList {
  isShowingTrip: boolean;
  setShowTrip: Dispatch<SetStateAction<boolean>>;
}

// Main
const ContactList: React.FC<IContactList> = ({
  isShowingTrip,
  setShowTrip,
}) => {
  return (
    <>
      <TripNavigation isShowingTrip={isShowingTrip} setShowTrip={setShowTrip} />
      <div>Contact list</div>
    </>
  );
};

export default ContactList;
