import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const BannerCard = () => {
  return (
    <div className='px-3'>
      <div
        className="bg-cover rounded-lg bg-center h-[60vh] w-full bg-no-repeat flex 
       items-center mt-5 container mx-auto bg-[url('https://images.pexels.com/photos/5840847/pexels-photo-5840847.jpeg')]"

      >
        <div className='bg-black/50 w-full min-h-full flex flex-col rounded-lg items-center justify-center text-center'>
          <h1 className="text-white font-bold text-2xl md:text-4xl">Find Your Perfect <br /> <span className='text-[#9AD872]'>Qurbani Animal</span> Today</h1>

          <p className='text-gray-300 mt-4'>Find healthy, verified cows and goats from trusted sellers across Bangladesh.</p>
          <Link href={'/all-animals'}><Button className={'bg-[#468432] mt-3'}>Find Animals</Button></Link>
        </div>

      </div>
    </div>
  );
};

export default BannerCard;
