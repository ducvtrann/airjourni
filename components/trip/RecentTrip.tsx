// Package
import { Dispatch, SetStateAction } from 'react';

// Component
import TripNavigation from './TripNavigation';
import ChatCard from './TripCard';

// Interface
interface IChatList {
  isShowingTrip: boolean;
  setShowTrip: Dispatch<SetStateAction<boolean>>;
}

// Main
const ChatList: React.FC<IChatList> = ({ isShowingTrip, setShowTrip }) => {
  const dummyData = [
    {
      nameInitial: 'JT',
      name: 'John Doe',
      lastMessage: 'The first of many texts',
    },
    {
      nameInitial: 'TT',
      name: 'Tommy Turner',
      lastMessage: 'The second of many texts',
    },
    {
      nameInitial: 'DT',
      name: 'Duc Tran',
      lastMessage: 'The third of many texts',
    },
  ];

  return (
    <div className="flex-grow">
      <TripNavigation isShowingTrip={isShowingTrip} setShowTrip={setShowTrip} />
      {dummyData.map((trip, index) => (
        <ChatCard key={index} {...trip} />
      ))}
    </div>
  );
};

export default ChatList;
