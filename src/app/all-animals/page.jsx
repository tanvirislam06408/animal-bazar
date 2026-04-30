'use client'
import AnimalCard from '@/components/shared/AnimalCard';
import Sort from '@/components/Sort';
import { getAnimalsData } from '@/lib/dataFetch';
import React, { useEffect, useState } from 'react';

const AllAnimalsPage = () => {
    const [defaultAnimal, setDefaultAnimal] = useState([]);
    const [animals, setAnimals] = useState([...defaultAnimal]);



    useEffect(() => {
        const handleAnimalData = async () => {
            const animalData = await getAnimalsData();
            setDefaultAnimal(animalData);
            setAnimals(animalData);
        }
        handleAnimalData();
    }, [])
    console.log(defaultAnimal, "default");

    const handleSort = async (e) => {
        const sortValue = e.target.value;
        const animalData = await getAnimalsData();
        setDefaultAnimal(animalData);
        const sortedData = [...animalData].sort((a, b) => {
            if (sortValue === 'low') {
                return a.price - b.price
            }
            else if (sortValue === 'heigh') {
                return b.price - a.price
            }
            return 0;
        })
        setAnimals(sortedData);

    }




    return (
        <div className='container mx-auto mt-5 px-5 md:px-0'>
            <h1 className='text-3xl font-bold mt-3  mb-5'>Available for Booking</h1>
            <div className="">
                <fieldset onChange={handleSort} className="fieldset">
                    <legend className="fieldset-legend">Sort By Price</legend>
                    <select defaultValue="Pick a browser" className="select text-center flex items-center justify-center">
                        <option value={''}>Mixed</option>
                        <option value={'low'}>Low to Heigh</option>
                        <option value={'heigh'}>Heigh to Low</option>
                    </select>
                </fieldset>
            </div>
             <div className='grid grid-cols-1 mt-3.5 md:grid-cols-2 gap-5  lg:grid-cols-4'>
                    {
                        animals.map(animal => <AnimalCard key={animal.id} animal={animal}

                        />)
                    }
                </div>
        </div>
    );
};

export default AllAnimalsPage;