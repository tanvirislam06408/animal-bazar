import { Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';
import { TbCoinTakaFilled } from 'react-icons/tb';

const DetailsAnimal = ({ matchedData }) => {
    const { id, name, type, breed, price, weight, age, location, description, image, category } = matchedData;

    return (
        <div className='px-7 md:px-5'>
            <div className=' mb-3 max-h-[600px] w-full'>
                <Image loading='eager' src={image} className='rounded-2xl' width={300} height={300} alt={name} />
            </div>

            <div className='flex flex-col gap-3 justify-between'>
                <div className='flex-1 mt-5 space-y-3'>
                    <h1 className='text-xl font-medium'>Name: {name}</h1>
                    <p className='font-medium'>{description}</p>
        <Separator orientation='horizontal'/>
                    <h2 className=' font-medium text-gray-500'>Type : {type}</h2>
                    <p className=' font-medium text-gray-500'>Weight : {weight} KG</p>
                    <p className='flex items-center gap-2 font-medium text-gray-500'>Price : <TbCoinTakaFilled /> {price}</p>
                </div>
                <div className='flex-1 '>
                    <h3 className='flex items-center gap-3 text-xl'><span className='text-green-400'><FaLocationDot /></span> Location : {location}</h3>
                </div>
            </div>

        </div>
    );
};

export default DetailsAnimal;