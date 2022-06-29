// Package
import Image from 'next/image';
import Link from 'next/link';

// Image
import heroImg from '../../../public/images/travel-friends.png';

// Component
import BaseContainer from '../baseContainer/BaseContainer';

// Main Component
const Hero: React.FC = () => {
  return (
    <BaseContainer className="flex flex-wrap">
      <div id="product" className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Less time planning and more time enjoying your next trip
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Plan your trips with all the information available in one place. No
            need to back and forth between different platforms to plan one trip.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link href="/login">
              <a className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="shadow-outline">
          <Image
            src={heroImg}
            width="640"
            height="505"
            alt="Hero Illustration"
            layout="intrinsic"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </BaseContainer>
  );
};

export default Hero;
