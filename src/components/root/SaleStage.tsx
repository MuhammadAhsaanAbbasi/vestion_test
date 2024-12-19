"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline"; // Import the Timeline component

// Timeline data for the horizontal and vertical designs
const timelineData = [
    {
        title: "Current Stage",
        heading: "Investment",
        description:
            "Strong initial profits driven by VES token sales and appreciation revenue, with lower marketing and development expenses as the ecosystem establishes its base.",
    },
    {
        title: "2025",
        heading: "$56 million",
        description:
            "Strong initial profits driven by VES token sales and appreciation revenue, with lower marketing and development expenses as the ecosystem establishes its base.",
    },
    {
        title: "2026",
        heading: "$125 million",
        description:
            "Significant growth in VES appreciation and Vestion Capital returns as the ecosystem gains traction and user adoption increases.",
    },
    {
        title: "2027",
        heading: "$300 million",
        description:
            "Revenue from VES appreciation, Vestion Capital investments, and Vestion Bank services reaches full scale, contributing to high profitability and a strong profit margin.",
    },
];

// Format the data for the horizontal timeline component
const horizontalData = timelineData.map((item) => ({
    title: item.title,
    content: (
        <div>
            <h3 className="text-[#FFC107] text-xl font-medium">{item.heading}</h3>
            <p className="text-white/90 text-sm md:text-base">{item.description}</p>
        </div>
    ),
}));

const SaleStage = () => {
    return (
        <section
            className="relative w-full text-white px-4 py-20 md:py-32"
            style={{
                backgroundImage: `radial-gradient(440.5% 46.31% at 50% 110.88%, rgba(0,0,0,0.9) 43.05%, rgba(0,0,0,0) 100%), 
                linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                linear-gradient(175.55deg, rgba(0,0,0,0) 90.41%, #000000 99.82%), 
                url('/images/earth.jpeg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Heading */}
            <div className="flex flex-col items-center text-center gap-2 mb-16">
                <h6 className="text-[#FFC107] text-sm md:text-base font-medium uppercase tracking-wider">
                    Q4 2024 - Q3 2027
                </h6>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase">
                    TOKEN SALE STAGE
                </h2>
            </div>

            {/* Timeline Container for Mobile (Vertical Design) */}
            <div className="hidden md:block">
                {/* Timeline Container */}
                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Horizontal Line */}
                    <div className="absolute inset-x-0 top-8 transform h-[2px] bg-[#FFC107]"></div>

                    {/* Timeline Items */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center space-y-4 md:space-y-6"
                            >
                                {/* Marker and Year */}
                                <div className="relative flex flex-col items-center space-y-2">
                                    {/* The circle marker */}
                                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#FFC107] border-2 border-black"></div>
                                    <div className="pt-8">
                                        <h3 className="text-[#FFC107] text-sm md:text-base font-medium">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Heading */}
                                <div>
                                    <h4 className="text-[#FFC107] text-base md:text-lg font-medium">
                                        {item.heading}
                                    </h4>
                                </div>

                                {/* Description */}
                                <div className="text-xs md:text-sm text-white/90 max-w-[200px] md:max-w-[250px] leading-relaxed">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Container for Desktop (Horizontal Design) */}
            <div className="block md:hidden">
                <Timeline data={horizontalData} />
            </div>
        </section>
    );
};

export default SaleStage;
