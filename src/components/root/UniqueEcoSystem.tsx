import { uniqueEcoSystemData } from '@/constants/constant';
import React from 'react'

const UniqueEcoSystem = () => {
    return (
        <section className="text-white px-4 sm:px-10 py-10 sm:py-16 md:py-28 md:px-16 space-y-12">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    WHAT MAKES THE VESTION ECOSYSTEM UNIQUE?
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueEcoSystemData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/5 w-full md:w-[359px] h-[281.49px] md:h-[329px] rounded-xl shadow-lg py-7 px-5 space-y-6 border border-gray-700 hover:shadow-2xl hover:cursor-pointer transition duration-300"
                    >
                        {/* Title */}
                        <h4 className="text-lg font-medium text-white"
                            style={{
                                background: 'linear-gradient(101.92deg, rgba(255, 255, 255, 0.7) 11.14%, rgba(255, 255, 255, 0) 107%)',
                                WebkitBackgroundClip: 'text',   // Clip gradient to text
                                WebkitTextFillColor: 'transparent', // Make text transparent
                            }}>
                            {item.title}
                        </h4>
                        <hr className='border-gray-700 border-solid border' />
                        {/* Description */}
                        <p className="text-gray-400 text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UniqueEcoSystem;
