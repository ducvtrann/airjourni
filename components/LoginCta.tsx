// Package
import Link from 'next/link';

// Component
import BaseContainer from './BaseContainer';

// Main Component
const LoginCta: React.FC = () => {
  return (
    <BaseContainer className="py-0">
      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white bg-blue-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Summer is the perfect time to plan your much-awaited trip with your
            friends.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Experience an unforgettable trip anywhere across the globe.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link href="/login">
            <a className="inline-block py-3 mx-auto text-lg font-medium text-center text-blue-600 bg-white rounded-md px-7 lg:px-10 lg:py-5">
              Start your journey
            </a>
          </Link>
        </div>
      </div>
    </BaseContainer>
  );
};

export default LoginCta;
