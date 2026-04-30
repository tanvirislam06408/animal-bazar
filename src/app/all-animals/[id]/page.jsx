import BookingForm from '@/components/BookingForm';
import DetailsAnimal from '@/components/DetailsAnimal';
import { getAnimalsData } from '@/lib/dataFetch';
import React from 'react';

const AnimalPageDetails = async({params}) => {
    const data=await getAnimalsData()
    const {id}=await params;
    const matchedData=data.find(animal=>Number(animal.id)=== Number(id));
    
    return (
        <div className='flex p-6 md:p-0 flex-col md:flex-row space-y-5 container mx-auto gap-5 mt-20'>
           <div className='flex-1'>
            <DetailsAnimal  matchedData={matchedData}/>

           </div>
           {/* form */}
           <div className='w-full flex-1'>
                <BookingForm/>
           </div>
        </div>
    );
};

export default AnimalPageDetails;