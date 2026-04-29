import React from 'react';
import AnimalCard from './AnimalCard';
import { getAnimalsData } from '@/lib/dataFetch';


const Featured = async () => {
   
    const data=await getAnimalsData();
    return (
        <div className='container mx-auto mt-7'>
            <h1>Available for Qurbani</h1>
            <div className='grid grid-cols-1 mt-3.5 md:grid-cols-2 gap-5  lg:grid-cols-4'>
                {
                    data.slice(0, 4).map(animal => <AnimalCard key={animal.id} animal={animal}

                    />)
                }
            </div>
        </div>
    );
};

export default Featured;