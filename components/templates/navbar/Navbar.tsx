// Package
import Link from 'next/link';
import Image from 'next/image';
import ThemeChanger from '../darkSwitch/DarkSwitch';

// Main Component
const Navbar: React.FC = () => {
  return (
    <header className="w-full">
      <nav className="container flex items-center justify-between p-8 mx-auto xl:px-0">
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
        <div className="flex space-x-4">
          <Link href="/login">
            <a className="px-2 py-1 text-white bg-blue-600 rounded-md">Login</a>
          </Link>
          <div className="hidden ml-4 sm:block">
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
