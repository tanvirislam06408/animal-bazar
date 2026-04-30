'use client'

import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import navImg from '../../assets/nav-logo.svg'
import { authClient } from '@/lib/auth-client';
import { GoSignOut } from 'react-icons/go';
import MyLinks from './MyLinks';
const Navbar = () => {
    const { data: session } = authClient.useSession();
    console.log(session);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="container mx-auto flex h-16 items-center justify-between px-6">
                <div className="md:flex items-center  gap-3 hidden">
                    <Link href={'/'}><Image src={navImg} height={50} width={200} alt='nav-logo' /></Link>
                </div>
                <div className='md:hidden dropdown'>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='hover:text-[#9AD872]'><MyLinks href="/">Home</MyLinks></li>
                        <li className='hover:text-[#9AD872]'><MyLinks href="/all-animals">All Animals</MyLinks></li>
                        <li className='hover:text-[#9AD872]'><MyLinks href="/profile">Profile</MyLinks></li>
                    </ul>
                </div>
                <ul className="md:flex items-center gap-4 hidden">
                    <li className='hover:text-[#9AD872]'><MyLinks href="/">Home</MyLinks></li>
                    <li className='hover:text-[#9AD872]'><MyLinks href="/all-animals">All Animals</MyLinks></li>
                    <li className='hover:text-[#9AD872]'><MyLinks href="/profile">Profile</MyLinks></li>
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
                            <Avatar.Image alt="John Doe" referrerPolicy='no-referrer' src={session?.user?.image} />
                            <Avatar.Fallback>{session?.user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={async () => await authClient.signOut()} className={'bg-[#9AD872]'}><GoSignOut /> Sign Out</Button>
                    </div>}


            </header>
        </nav >
    );
};

export default Navbar;