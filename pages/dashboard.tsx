// Package
import type { NextPage } from 'next';

// Component
import AuthCheck from '../components/AuthCheck';
import Navbar from '../components/Navbar';
import DashboardContainer from 'components/dashboard/DashboardContainer';

// Main
const Dashboard: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-y-hidden">
        <AuthCheck>
          <Navbar />
          <DashboardContainer />
        </AuthCheck>
      </div>
    </>
  );
};

export default Dashboard;
