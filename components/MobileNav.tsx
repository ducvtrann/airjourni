// Package
import { Dispatch, SetStateAction } from 'react';
import {
  MdMms,
  MdAirplaneTicket,
  MdAccountCircle,
  MdLocalActivity,
} from 'react-icons/md';
import React from 'react';

// Interface
interface IMobileNav {
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Data
const navItems = [
  {
    visibleName: 'Trips',
    internalName: 'trips',
    icon: <MdMms className="w-6 h-6" />,
  },
  {
    visibleName: 'Attractions',
    internalName: 'attractions',
    icon: <MdLocalActivity className="w-6 h-6" />,
  },
  {
    visibleName: 'Flights',
    internalName: 'flights',
    icon: <MdAirplaneTicket className="w-6 h-6" />,
  },
  {
    visibleName: 'Profile',
    internalName: 'profile',
    icon: <MdAccountCircle className="w-6 h-6" />,
  },
];

// Main
const MobileNav: React.FC<IMobileNav> = ({ currentView, setCurrentView }) => {
  return (
    <div className="flex items-center justify-between h-16 p-3 border-t border-gray-300 md:hidden">
      {navItems.map((nav, index) => (
        <button
          key={index}
          type="button"
          className={`flex flex-col items-center ${
            currentView === nav.internalName ? 'text-blue-700' : 'text-gray-400'
          }`}
          onClick={() => setCurrentView(nav.internalName)}
        >
          {nav.icon}
          <span>{nav.visibleName}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
