// Package
import { useState } from 'react';

// Component
import RecentTrip from './RecentTrip';
import ContactList from './ContactList';

// Main
const ChatContainer: React.FC = () => {
  const [isShowingTrip, setShowTrip] = useState(true);

  return (
    <div
      id="trip"
      className="flex flex-col flex-grow md:w-5/12 md:border-r md:border-gray-300 xl:w-3/12"
    >
      {isShowingTrip ? (
        <RecentTrip isShowingTrip={isShowingTrip} setShowTrip={setShowTrip} />
      ) : (
        <ContactList isShowingTrip={isShowingTrip} setShowTrip={setShowTrip} />
      )}
    </div>
  );
};

export default ChatContainer;
