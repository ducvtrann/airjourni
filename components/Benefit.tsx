// Package
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

// Component
import BaseContainer from './BaseContainer';

// Interface
export interface IBenefit {
  title: string;
  desc: string;
  image: StaticImageData;
  imagePosition: string;
  bullets: {
    title: string;
    desc: string;
    icon: JSX.Element;
  }[];
}

export interface IBenefitItem {
  title: string;
  desc: string;
  icon: JSX.Element;
}

// Main
const Benefit: React.FC<IBenefit> = ({
  title,
  desc,
  image,
  imagePosition,
  bullets,
}) => {
  return (
    <BaseContainer className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div
        id="features"
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imagePosition === 'right' ? 'lg:order-1' : ''
        }`}
      >
        <div>
          <Image
            src={image}
            width="521"
            height="482"
            alt="Benefits"
            layout="intrinsic"
            placeholder="blur"
          />
        </div>
      </div>

      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imagePosition === 'left' ? 'lg:order-0' : ''
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h3>
            <p className="max-w-2xl py-4 text-lg text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {desc}
            </p>
          </div>
          <div className="w-full mt-5">
            {bullets.map((item, index) => (
              <BenefitItem key={index} {...item}></BenefitItem>
            ))}
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

const BenefitItem: React.FC<IBenefitItem> = ({ title, desc, icon }) => {
  return (
    <>
      <div className="flex items-end mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-600 rounded-md w-11 h-11">
          {React.cloneElement(icon, {
            className: 'w-7 h-7 text-white',
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Benefit;
