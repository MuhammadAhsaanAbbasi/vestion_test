import { uniqueEcoSystemData } from '@/constants/constant';
import React from 'react'

const UniqueEcoSystem = () => {
    return (
        <section className="text-white py-28 px-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    WHAT MAKES THE VESTION ECOSYSTEM UNIQUE?
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueEcoSystemData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1C1C1C] w-[359px] h-[329px] rounded-xl shadow-lg py-7 px-5 space-y-6 border border-gray-700 hover:shadow-2xl hover:cursor-pointer transition duration-300"
                    >
                        {/* Title */}
                        <h4 className="text-lg font-medium text-white">
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
