// Package
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../lib/context/auth.context';
import { authSignOut } from '../lib/firebase/authentication';
import { useMediaQuery } from 'react-responsive';

//  Component
import ThemeChanger from './DarkSwitch';

// Main
const Navbar: React.FC = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const hideNavbar = user && isMobile;

  if (hideNavbar) return <></>;
  return (
    <header className="w-full">
      <nav className="container flex items-center justify-between p-8 mx-auto">
        <Link href="/">
          <a className="flex items-center space-x-2 text-2xl font-medium text-blue-600 dark:text-gray-100">
            <span>
              <Image
                src="/images/svg/logo_v2.svg"
                alt="globe with airplane"
                width="32"
                height="32"
                className="w-8"
              />
            </span>
            <span>AirJourni</span>
          </a>
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <a
              className="px-2 py-1 text-white bg-blue-600 rounded-md"
              onClick={authSignOut}
            >
              Log Out
            </a>
          ) : (
            <Link href="/login">
              <a className="px-2 py-1 text-white bg-blue-600 rounded-md">
                Login
              </a>
            </Link>
          )}

          <div className="hidden ml-4 sm:block">
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
