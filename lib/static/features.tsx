import ChatIcon from '@mui/icons-material/Chat';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MapIcon from '@mui/icons-material/Map';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

import benefitOneImg from 'public/images/gif/World.gif';
import benefitTwoImg from 'public/images/gif/Journey.gif';

export const featureOne = {
  title: 'Memorable and easier trips every time!',
  desc: 'AirJourni understands that planning a trip with multiple people is hard. Hence, we are here to facilitate you in planning the best trip ever with your friends. ',
  image: benefitOneImg,
  isImageFirst: true,
  bullets: [
    {
      title: 'Chat within the app',
      desc: 'Chat with all your trip partners within the app to plan an immaculate trip.',
      icon: <ChatIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Get access to flight costs for each member',
      desc: 'Are your friends traveling from different states? No worry, you can get the flight cost individually with AirJourni.',
      icon: <AirplaneTicketIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Search for the most famous attractions',
      desc: 'Use the app to search for the best attractions at your travel destination.',
      icon: <LocalActivityIcon fontSize="large" color="primary" />,
    },
  ],
};

export const featureTwo = {
  title:
    'Get access to relevant information to enjoy your trip to the fullest!',
  desc: 'AirJourni gives you tools and access to information that will make your travel smooth and hassle-free. Get access to the distance between the destinations and share your experience with fellow travelers',
  image: benefitTwoImg,
  isImageFirst: false,
  bullets: [
    {
      title: 'Calendar View Planning',
      desc: 'Drag and drop your favorite events onto the calendar for an organize view of your itinerary.',
      icon: <EventNoteIcon fontSize="large" color="secondary" />,
    },
    {
      title: 'Map View Planning',
      desc: 'Review your planned attractions while getting information about the time and distance between attractions.',
      icon: <MapIcon fontSize="large" color="secondary" />,
    },
    {
      title: 'Share your trip',
      desc: 'Did you find hidden gems on your journeys? Let your fellow travelers know where. Get inspired from guides by people like yourself',
      icon: <ShareLocationIcon fontSize="large" color="secondary" />,
    },
  ],
};

export const features = [featureOne, featureTwo];
