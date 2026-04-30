import AnimalCard from '@/components/shared/AnimalCard';
import { getAnimalsData } from '@/lib/dataFetch';
import React from 'react';

const AllAnimalsPage = async () => {
    const data = await getAnimalsData();
    console.log(data);
    
    return (
        <div className='container mx-auto mt-5 px-5 md:px-0'>
            <h1 className='text-3xl font-bold mt-3  mb-5'>Available for Booking</h1>
            <div className='grid grid-cols-1 mt-3.5 md:grid-cols-2 gap-5  lg:grid-cols-4'>
                {
                    data.map(animal => <AnimalCard key={animal.id} animal={animal}

                    />)
                }
            </div>
        </div>
    );
};

export default AllAnimalsPage;