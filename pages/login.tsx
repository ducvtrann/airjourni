// Package
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';

// Data
import photo from '../public/images/remote-friends.png';
import logo from '../public/images/svg/logo_v2.svg';
import apple from '../public/images/svg/apple-logo.svg';
import facebook from '../public/images/svg/facebook-logo.svg';
import google from '../public/images/svg/google-logo.svg';
import twitter from '../public/images/svg/twitter-logo.svg';

const loginMethods = [
  {
    name: 'Apple',
    icon: apple,
    color:
      'bg-[#050708] hover:bg-[#050708]/90 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30',
  },
  {
    name: 'Facebook',
    icon: facebook,
    color:
      'bg-[#3b5998] hover:bg-[#3b5998]/90 dark:focus:ring-[#3b5998]/50 dark:hover:bg-[#3b5998]/30',
  },
  {
    name: 'Google',
    icon: google,
    color:
      'bg-[#DB4437] hover:bg-[#DB4437]/90 dark:focus:ring-[#DB4437]/50 dark:hover:bg-[#DB4437]/30',
  },
  {
    name: 'Twitter',
    icon: twitter,
    color:
      'bg-[#1da1f2] hover:bg-[#1da1f2]/90 dark:focus:ring-[#1da1f2]/50 dark:hover:bg-[#1da1f2]/30',
  },
];

// Main Component
const Login: NextPage = () => {
  return (
    <div className="flex flex-wrap w-screen h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2 order-1 md:order-0 bg-gradient-to-tr from-[#1c63fb] to-[#ff89d8]">
        <Image
          src={photo}
          width="521"
          height="482"
          alt="Benefits"
          layout="intrinsic"
          placeholder="blur"
          className="border-4 border-white"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 bg-gray-100 md:w-1/2 order-0 md:order-1">
        <Link href="/">
          <a>
            <Image
              src={logo}
              width="100"
              height="100"
              alt="apple"
              layout="intrinsic"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-2xl font-bold leading-snug tracking-tight text-center text-gray-800 md:text-4xl sm">
            Welcome back to <span className="text-blue-600">AirJourni</span>
          </h1>

          <p className="text-center text-gray-500 text-md md:text-lg">
            We are excited for your next journey
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          {loginMethods.map((login, index) => (
            <button
              key={index}
              aria-label={`Continue with ${login.name}`}
              type="button"
              className={`mx-4 max-w-sm text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 inline-flex items-center ${login.color}`}
            >
              <span className="mx-auto">
                <Image
                  src={login.icon}
                  width="24"
                  height="24"
                  alt={`${login.name} icon`}
                  layout="intrinsic"
                ></Image>
              </span>
              <span className="mx-auto ml-4 w-36 text-start">
                Login with {login.name}
              </span>
            </button>
          ))}
        </div>
        <p className="pt-4 mx-8 text-sm text-center text-gray-600 border-t-2">
          When you &apos;Log in&apos;, you agree to AirJourni&apos;s{' '}
          <Link href="/legal">
            <a className="underline hover:text-blue-600">Terms of Service</a>
          </Link>
          . We will manage information about you as described in our{' '}
          <Link href="/privacy">
            <a className="underline hover:text-blue-600">Privacy Policy</a>
          </Link>
          .
        </p>
        <div className="text-sm text-center text-gray-600">
          © {new Date().getFullYear()} AirJourni
        </div>
      </div>
    </div>
  );
};

export default Login;
