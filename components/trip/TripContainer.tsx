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
const ChatContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState('contactList');
  const views: IViews = {
    currentTrip: <CurrentTrip setCurrentView={setCurrentView} />,
    contactList: <ContactList setCurrentView={setCurrentView} />,
  };

  return views[currentView as keyof IViews];
};

export default ChatContainer;
