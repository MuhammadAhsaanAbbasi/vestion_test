import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/Frame 106.svg"

const Header = () => {
    return (
        <header className='py-9 px-16 flex justify-between items-center bg-[#00010A]'>
            <Image
                src={Logo}
                alt='Logo'
                width={160}
                height={45}
            />
            <nav className='flex items-center gap-6'>
                <li className="">
                    Home
                </li>
                <li>
                    EcoSystem
                </li>
                <li>
                    Benefits
                </li>
                <li>
                    tokenomics
                </li>
            </nav>
            <button className='py-3 px-7 border-white rounded-lg'>
                Explore Ecosystem
            </button>
        </header>
    )
}

export default Header