import React from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ExploreButton from '../shared/ExploreButton';

const Hero = () => {
    return (
        <div className="relative w-full min-h-full md:min-h-screen h-[466px] md:h-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-[72px] md:py-5 gap-10 lg:gap-64"
            style={{
                backgroundImage: `radial-gradient(440.5% 46.31% at 50% 110.88%, rgba(0, 0, 0, 0.9) 43.05%, rgba(0, 0, 0, 0) 100%), 
                                linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                                linear-gradient(175.55deg, rgba(0, 0, 0, 0) 90.41%, #000000 99.82%), 
                                url('/images/hero.png')`
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary opacity-60"></div>
            <div className='w-[345px] md:w-[774px] flex flex-col md:justify-center items-start md:items-center text-left md:text-center font-normal gap-8 relative -top-10 sm:-top-5 md:top-0'>
                <div className='space-y-4'>
                    <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-4xl font-albert-sans font-normal leading-[36px] md:leading-[48px] lg:leading-[72px] tracking-[0.02em]"
                        style={{
                            background: 'linear-gradient(101.92deg, rgba(255, 255, 255, 0.7) 11.14%, rgba(255, 255, 255, 0) 107%)',
                            WebkitBackgroundClip: 'text',   // Clip gradient to text
                            WebkitTextFillColor: 'transparent', // Make text transparent
                        }}>
                        THE FUTURE OF DIGITAL AND <br /> TRADITIONAL FINANCE
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl px-0 md:px-28">
                        Experience the next evolution in finance, where blockchain technology empowers you to securely invest in and manage real-world assets with ease.
                    </p>
                </div>
                <Link href="#explore">
                    <ExploreButton />
                </Link>
            </div>
            <div className="hidden md:flex flex-col items-center gap-1.5">
                <span className="text-sm font-normal">Scroll</span>
                <ChevronDown className="animate-bounce h-4 w-4" />
            </div>
        </div>
    );
}

export default Hero;
