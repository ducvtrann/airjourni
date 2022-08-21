// Package
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { NextPage } from 'next';

const DynamicPrivacyContainer = dynamic(
  () => import('../components/legal/PrivacyContainer'),
  {
    suspense: true,
  }
);

// Main Component
const Privacy: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicPrivacyContainer />
    </Suspense>
  );
};

export default Privacy;
