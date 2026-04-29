import DetailsAnimal from '@/components/DetailsAnimal';
import { getAnimalsData } from '@/lib/dataFetch';
import React from 'react';

const AnimalPageDetails = async({params}) => {
    const data=await getAnimalsData()
    const {id}=await params;
    const matchedData=data.find(animal=>animal.id=== Number(id));
    
    return (
        <div className='flex container mx-auto gap-5'>
           <DetailsAnimal matchedData={matchedData}/>

           {/* form */}
           <div>

           </div>
        </div>
    );
};

export default AnimalPageDetails;