"use client";

import GujaratCard from './GujaratCard/GujaratCard';
import { Gujarat_Khabar } from '@/action';
import { GujaratType } from '@/action';
import React from 'react';

const Gujarat = () => {





  return (
    <div className='flex bg-[#f0f0f0]  mb-[100px]   justify-center items-center'>
    <div className='  flex gap-[100px]'>
      {Gujarat_Khabar.map((GujaratSingleCard:GujaratType, index:number) => {
          return <GujaratCard key={index} index={index} {...GujaratSingleCard} />;
      })}
    </div>
    </div>
  );
};

export default Gujarat;
