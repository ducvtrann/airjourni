import type { NextPage } from 'next';
import Image from 'next/image';
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-stone-800">
      <h1 className="text-white">Hello World</h1>
      <p className="mb-5 text-white">
        Duc is building your next favorite app - AirJourni! He is learning
        React, TailwindCSS, and a few more technologies to make your next trip
        an amazing experience!
      </p>
      <div>
        <Image
          src="https://c.tenor.com/vjP1NdkBNQwAAAAC/duck-walk.gif"
          alt="Walking duck"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Home;
