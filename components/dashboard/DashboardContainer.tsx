// Package
import { useMediaQuery } from 'react-responsive';

// Component
import AttractionContainer from 'components/attraction/AttractionContainer';
import ChatContainer from 'components/trip/TripContainer';
import FlightContainer from 'components/flight/FlightContainer';
import MobileContainer from 'components/MobileContainer';

// Main
const DashboardContainer: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div
      id="dashboard"
      className="flex flex-col flex-grow border-t border-gray-300 md:flex-row"
    >
      {isMobile && <MobileContainer />}
      {isTablet && (
        <>
          <ChatContainer />
          <AttractionContainer />
          <FlightContainer />
        </>
      )}
    </div>
  );
};

export default DashboardContainer;
