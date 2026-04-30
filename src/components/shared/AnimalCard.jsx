import { Button, Chip, Surface } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosPricetags } from 'react-icons/io';
import { TbCoinTaka } from 'react-icons/tb';

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <Surface
                className="flex  flex-col gap-3 rounded-3xl shadow p-6"
                variant="transparent"
            >
                <div className='relative aspect-square '>
                    <Chip className='absolute left-3 top-3.5 z-10'><IoIosPricetags />{animal.price}</Chip>
                    <Image src={animal.image} fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={animal.type}
                        className='bg-cover rounded-xl w-auto h-auto' />
                </div>
                <h3 className="text-base font-semibold text-foreground">{animal.name}</h3>
                <p className="text-sm text-muted">
                    {animal.description}
                </p>
                <Link href={`/all-animals/${animal.id}`}>
                    <Button className={'bg-[#99AD7A] hover:bg-[#99AD7A50]'} variant="tertiary">
                        Details
                    </Button>
                </Link>
            </Surface>
        </div >
    );
};

export default AnimalCard;