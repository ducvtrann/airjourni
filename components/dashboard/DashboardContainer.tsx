// Package
// Component
import Layout from '../layout';
import Navbar from 'components/Navbar';

// Main
const DashboardContainer: React.FC = () => {
  return (
    <Layout.Root>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.SidePane></Layout.SidePane>
      <Layout.Main></Layout.Main>
    </Layout.Root>
  );
};

export default DashboardContainer;
