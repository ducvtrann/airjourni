// Package
// Component
import Layout from '../layout';
import Navbar from 'components/Navbar';
import TripContainer from 'components/trip/TripContainer';

// Main
const DashboardContainer: React.FC = () => {
  return (
    <Layout.Root>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.SidePane>
        <TripContainer />
      </Layout.SidePane>
      <Layout.Main></Layout.Main>
    </Layout.Root>
  );
};

export default DashboardContainer;
