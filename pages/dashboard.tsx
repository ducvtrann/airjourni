// Package
import type { NextPage } from 'next';

// Component
import AuthCheck from '../components/AuthCheck';
import Navbar from '../components/Navbar';

// Main Component
const Dashboard: NextPage = () => {
  return (
    <>
      <AuthCheck>
        <Navbar />
        <div>This is protected</div>
      </AuthCheck>
    </>
  );
};

export default Dashboard;
