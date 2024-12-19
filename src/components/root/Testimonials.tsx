import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { testimonials } from "@/constants/constant";

const Testimonials = () => {
    return (
        <section className="bg-[#1D1D1D] py-16 gap-8 flex flex-col justify-center items-center">
            <h2 className="text-white text-center text-xl sm:text-2xl lg:text-3xl font-normal w-[345px] sm:w-[450px] lg:w-[722px]">
                Voices of Trust: Client Stories, Testimonials that Illuminate Our Shared Success.
            </h2>
            <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="px-4 basis-1/2">
                            <div className="flex items-center bg-transparent p-6 rounded-xl shadow-lg gap-10 md:basis-1/2 lg:basis-1/3">
                                <div className="h-[200px] w-[180px]">
                                    <Image
                                        src={testimonial.picture}
                                        alt={testimonial.name}
                                        className="rounded-xl h-full w-full object-cover"
                                        height={200}
                                        width={180}
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start gap-4 w-full">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-normal">
                                            {testimonial.name}
                                        </h2>
                                        <h4 className="text-[#9C9C9C] text-sm flex items-center gap-2">
                                            {testimonial.position} - {testimonial.company}
                                        </h4>
                                    </div>
                                    <p className="text-base font-light">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
                </div>
            </Carousel>
        </section>
    );
};

export default Testimonials;
