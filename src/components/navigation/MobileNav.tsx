"use client";
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetTitle, // Importing SheetTitle
} from "@/components/ui/sheet";

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { navList } from '@/constants/constant';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from "@/../public/Frame 106.svg"
import ExploreButton from '../shared/ExploreButton';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='lg:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu height={36} width={36} className='cursor-pointer text-white' />
                </SheetTrigger>
                <SheetContent side={"right"} className='bg-secondary'>
                    {/* Adding SheetTitle for accessibility */}
                    <SheetTitle className="my-4">
                        <Link href={"/"} className='flex items-center gap-1'>
                            <Image
                                src={Logo}
                                alt="logo"
                                height={80}
                                width={80}
                                className='cursor-pointer max-sm:size-20'
                                priority={true}
                            />
                        </Link>
                    </SheetTitle>
                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <ul className="flex flex-col gap-6 mt-10">
                                {navList.map((link, index) => {
                                    const isActive = pathname === link.link;
                                    return (
                                        <SheetClose asChild={true} key={index}>
                                            <Link href={link.link}
                                                className={cn(
                                                    'font-medium px-3 py-2 hover:bg-circle hover:text-secondary rounded-3xl cursor-pointer',
                                                    {
                                                        'bg-primary': isActive,
                                                    }
                                                )}
                                            >
                                                <li 
                                                    className='font-semibold uppercase'>
                                                    {link.name}
                                                </li>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                                <SheetClose asChild>
                                    <ExploreButton />
                                </SheetClose>
                            </ul>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;