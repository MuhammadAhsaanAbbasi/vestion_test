"use client";
import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/Frame 106.svg"
import ExploreButton from '../shared/ExploreButton'
import MobileNav from './MobileNav'
import { navList } from '@/constants/constant'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';


const Header = () => {
    const pathname = usePathname();
    return (
        <header className='py-3 px-6 sm:py-5 sm:px-8 md:py-7 md:px-12 xl:py-9 xl:px-16 flex justify-between items-center bg-secondary text-white font-inter text-base'>
            <Image
                src={Logo}
                alt='Logo'
                width={160}
                height={45}
            />
            <nav className='hidden lg:flex'>
                <ul className='flex items-center gap-6'>
                    {navList.map((link, index) => {
                        const isActive = pathname === link.link;
                        return (
                                <Link href={link.link} key={index}
                                    className={cn(
                                        'font-medium px-3 py-2 hover:bg-muted hover:text-primary rounded-3xl cursor-pointer transition-all duration-300',
                                        {
                                            'text-primary': isActive,
                                        }
                                    )}
                                >
                                    <li
                                        className='font-semibold uppercase'>
                                        {link.name}
                                    </li>
                                </Link>
                        );
                    })}
                </ul>
            </nav>
            <div className='hidden lg:inline-flex'>
                <ExploreButton />
            </div>
            <MobileNav />
        </header>
    )
}

export default Header