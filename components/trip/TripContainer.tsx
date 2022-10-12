// Package
import { useState } from 'react';

// Component
import NewTrip from './views/NewTrip';
import FriendRequest from './views/FriendRequest';
import CurrentTrip from './views/CurrentTrip';

// Interface
interface IViews {
  currentTrip: JSX.Element;
  friendRequests: JSX.Element;
  newTrip: JSX.Element;
}

// Main
const TripContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState('newTrip');

  const views: IViews = {
    currentTrip: <CurrentTrip setCurrentView={setCurrentView} />,
    friendRequests: <FriendRequest setCurrentView={setCurrentView} />,
    newTrip: <NewTrip setCurrentView={setCurrentView} />,
  };

  return views[currentView as keyof IViews];
};

export default TripContainer;
