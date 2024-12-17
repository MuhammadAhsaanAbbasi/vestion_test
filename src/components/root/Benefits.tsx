import React from "react";
import Image from "next/image";
import { benefits } from "@/constants/constant";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-start gap-8 bg-eco-gradient text-white py-8 md:py-16 lg:py-28 px-8 md:px-16 lg:px-24">
            {/* Title Section */}
            <div className="basis-3/4 text-left flex flex-col justify-center gap-5">
                <h6 className="text-yellow-400 font-medium text-sm uppercase">
                    Benefits
                </h6>
                <h2 className="text-xl sm:text-2xl md:text-[42px] leading-[28px] md:leading-[54.68px] font-normal font-open_sans">
                    Why Choose Vestion for Your Financial Journey?
                </h2>
                <p className="text-sm md:text-base leading-relaxed font-inter">
                    Discover the unparalleled stability, growth potential, and innovation that
                    Vestion offers. Our secure and future-ready ecosystem is built to meet the needs
                    of a global financial audience.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between p-6 gap-16 bg-primary/20 rounded-lg shadow-md border hover:shadow-lg transition duration-300"
                    >
                        {/* Icon */}
                        <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-md">
                            <Image src={item.icon} alt={item.title} width={24} height={24} />
                        </div>

                        <div className="flex flex-col gap-5 font-inter">
                            {/* Title */}
                            <div className="space-y-2">

                                <h3 className="text-xl font-semibold">{item.title}</h3>

                                {/* Description */}
                                <p className="text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            {/* Learn More */}
                            <Link
                                href="#"
                                className="hover:text-primary font-medium flex items-center gap-2"
                            >
                                <span>
                                    Learn More
                                </span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
