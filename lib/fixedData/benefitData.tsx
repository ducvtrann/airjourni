import {
  ChatIcon,
  CashIcon,
  PhotographIcon,
  CalendarIcon,
  MapIcon,
  ShareIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../../public/images/photo-friends.png';
import benefitTwoImg from '../../public/images/surf-friends.png';

const benefitOne = {
  title: 'Memorable and easier trips every time!',
  desc: 'AirJourni understands that travel plans with multiple people involved from different places are hard. Hence, we are here to facilitate you in planning the best trip ever with your friends. ',
  image: benefitOneImg,
  imagePosition: 'left',
  bullets: [
    {
      title: 'Chat within the app',
      desc: 'Chat with all your trip partners within the app to plan an immaculate trip.',
      icon: <ChatIcon />,
    },
    {
      title: 'Get access to flight costs for each member',
      desc: 'Are your friends traveling from different states? No worry, you can get the flight cost individually with AirJourni.',
      icon: <CashIcon />,
    },
    {
      title: 'Search for the most famous attractions',
      desc: 'Use the app to search for the best attractions at your travel destination.',
      icon: <PhotographIcon />,
    },
  ],
};

const benefitTwo = {
  title:
    'Get access to relevant information to enjoy your trip to the fullest!',
  desc: 'AirJourni is here to give you tools and access to information that will make your travel smooth and hassle-free. Get access to the distance between the destinations and share your experience with fellow travelers',
  image: benefitTwoImg,
  imagePosition: 'right',
  bullets: [
    {
      title: 'Calendar View Planning',
      desc: 'Drag and drop your favorite events onto the calendar for an organize view of your itinerary.',
      icon: <CalendarIcon />,
    },
    {
      title: 'Map View Planning',
      desc: 'Use our app to review your planned attractions while getting information about the time and distance between attractions.',
      icon: <MapIcon />,
    },
    {
      title: 'Share your trip',
      desc: 'Did you find hidden gems on your journeys? Let your fellow travelers know where. Get inspired from guides by people like yourself',
      icon: <ShareIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
