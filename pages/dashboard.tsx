// Package
import type { NextPage } from 'next';

// Component
import AuthCheck from '../components/AuthCheck';
import DashboardContainer from 'components/dashboard/DashboardContainer';

// Main
const Dashboard: NextPage = () => {
  return (
    <AuthCheck>
      <DashboardContainer />
    </AuthCheck>
  );
};

export default Dashboard;
