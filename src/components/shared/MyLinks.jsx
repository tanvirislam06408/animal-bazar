'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLinks = ({href,children}) => {
    const pathName=usePathname();
    
    return (
        <Link className={`${pathName === href ? "text-[#9AD872]": ""}`} href={href}>
            {children}
        </Link>
    );
};

export default MyLinks;