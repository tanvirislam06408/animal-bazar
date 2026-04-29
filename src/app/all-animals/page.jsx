import AnimalCard from '@/components/AnimalCard';
import { getAnimalsData } from '@/lib/dataFetch';
import React from 'react';

const AllAnimalsPage = async () => {
    const data = await getAnimalsData();
    return (
        <div className='container mx-auto mt-5'>

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