import { SuccessData } from '@/constants/constant';
import React from 'react'

const Success = () => {
    return (
        <section className="w-full bg-[#0E0E0E] text-white py-12 px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-8">
                {SuccessData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 flex flex-col justify-center items-center gap-2 ${
                            index !== SuccessData.length - 1
                                ? "relative"
                                : ""
                        }`}
                    >
                        {/* Vertical Divider
                        {index !== SuccessData.length - 1 && (
                        )} */}
                        <div className="hidden md:block absolute top-0 right-0 h-full w-[2px] bg-white" />

                        {/* Score */}
                        <span className="text-yellow-400 text-4xl md:text-5xl font-semibold">
                            {item.score}
                        </span>
                        {/* Text */}
                        <p className="text-gray-400 text-lg font-normal">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Success;