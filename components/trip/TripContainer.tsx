// Package
import { useState } from 'react';

// Component
import NewTrip from './views/NewTrip';
import FriendRequest from './views/FriendRequest';
import CurrentTrip from './views/CurrentTrip';

// Interface
interface IViews {
  currentTrip: JSX.Element;
  newTrip: JSX.Element;
  friendRequests: JSX.Element;
}

// Main
const TripContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState('friendRequests');

  const views: IViews = {
    newTrip: <NewTrip setCurrentView={setCurrentView} />,
    friendRequests: <FriendRequest setCurrentView={setCurrentView} />,
    currentTrip: <CurrentTrip setCurrentView={setCurrentView} />,
  };

  return views[currentView as keyof IViews];
};

export default TripContainer;
