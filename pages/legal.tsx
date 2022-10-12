// Package
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import type { NextPage } from 'next';

const DynamicLegalContainer = dynamic(
  () => import('../components/legal/LegalContainer'),
  {
    suspense: true,
  }
);

// Main Component
const Legal: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLegalContainer />
    </Suspense>
  );
};

export default Legal;
