// Package
import { useState } from 'react';

// Component
import CurrentTrip from './CurrentTrip';
import ContactList from './ContactList';

// Interface
interface IViews {
  currentTrip: JSX.Element;
  contactList: JSX.Element;
}

// Main
const TripContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState('contactList');
  const [showAddFriend, setAddFriend] = useState(false);

  const views: IViews = {
    currentTrip: (
      <CurrentTrip
        setCurrentView={setCurrentView}
        setAddFriend={setAddFriend}
      />
    ),
    contactList: (
      <ContactList
        setCurrentView={setCurrentView}
        setAddFriend={setAddFriend}
        showAddFriend={showAddFriend}
      />
    ),
  };

  return views[currentView as keyof IViews];
};

export default TripContainer;
