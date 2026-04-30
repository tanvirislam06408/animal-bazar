'use client'

import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navImg from '../assets/nav-logo.svg'
import { authClient } from '@/lib/auth-client';
import { GoSignOut } from 'react-icons/go';
const Navbar = () => {
    const { data: session } = authClient.useSession();
    console.log(session);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="container mx-auto flex h-16 items-center justify-between px-6">
                <div className="md:flex items-center  gap-3 hidden">
                    <Link href={'/'}><Image src={navImg} height={50} width={200} alt='nav-logo' /></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li className='hover:text-[#9AD872]'><Link href="/">Home</Link></li>
                    <li className='hover:text-[#9AD872]'><Link href="/all-animals">All Animals</Link></li>
                </ul>
                {!session?.user &&
                    <div className='flex items-center gap-4'>
                        <Link href={'/login'}><Button className={'bg-[#9AD872]'}> Login</Button></Link>
                        <Link href={'/register'}><Button variant='outline' className={'border-[#468432] text-[#468432]'}>Register</Button></Link>
                    </div>
                }
                {session?.user &&
                    <div className='flex items-center gap-4'>
                        <Avatar>
                            <Avatar.Image alt="John Doe" referrerPolicy='no-referrer' src={session?.user?.image}/>
                            <Avatar.Fallback>{session?.user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={async () => await authClient.signOut()} className={'bg-[#9AD872]'}><GoSignOut /> Sign Out</Button>
                    </div>}
            </header>
        </nav >
    );
};

export default Navbar;