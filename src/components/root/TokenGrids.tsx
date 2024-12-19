"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function TokenGrids({ id }: { id: string }) {
    return (
        <section id={id} className="w-full bg-gradient-to-b from-black to-[#1E1E1E] text-white py-16 md:py-[120px] px-6 md:px-[72px]">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Headings */}
                <div className='text-left md:text-center flex flex-col justify-center gap-2'>
                    <h6 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
                        TOKENOMICS
                    </h6>
                    <h2 className="text-[24px] font-normal text-neutral-100 leading-snug uppercase mb-2">
                        UNVEILING THE POWER OF VESTION TOKENS:
                        GROWTH AND STABILITY COMBINED
                    </h2>
                </div>

                {/* Top Row (3 columns) */}
                <BentoGrid className="md:grid-cols-3 lg:grid-cols-4">
                    {/* VES & VESC */}
                    <BentoGridItem
                        className="flex flex-col justify-center items-center"
                        title={
                            <h3 className="text-lg font-medium text-[#FFC107] text-center">
                                VES & VESC
                            </h3>
                        }
                        description={
                            <p className="text-base">
                                Vestion presents VES and VESC, two distinct tokens driving <span className="font-semibold text-[#FFC107]">growth</span> and <span className="font-semibold text-[#FFC107]">stability</span> to power a seamless financial ecosystem.
                            </p>
                        }
                        component={
                            <Image
                                src="/images/vestion-logo.png"
                                alt="Vestion Token Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        }
                    />

                    {/* Projected Growth */}
                    <BentoGridItem
                        className="flex flex-col justify-stretch items-center lg:col-span-2"
                        title={
                            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-center">
                                Projected Growth
                            </h3>
                        }
                        description={
                            <p className="text-base sm:text-lg text-center">
                                With an ambitious price target of <span className="font-semibold text-[#FFC107]">$10-$20</span> in the next three years, VES is more than just a token—it’s a stake in Vestion’s future success.
                            </p>
                        }
                        component={
                            <Image
                                src="/images/chart-growth.png"
                                alt="Projected Growth Chart"
                                width={503}
                                height={232}
                                className="object-contain"
                            />
                        }
                    />

                    {/* VESC */}
                    <BentoGridItem
                        title={
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal">
                                VESC
                            </h3>
                        }
                        component={
                            <div className="flex flex-col">
                                <p className="text-base sm:text-lg">
                                    VESC ensures secure, efficient, and predictable transactions within the ecosystem. It bridges the gap between digital and traditional finance.
                                </p>
                                <div>
                                    <h4 className="text-primary font-bold text-[64px]">
                                        1:1$
                                    </h4>
                                    <h6 className="text-[16px] font-normal">
                                        1 VESC = 1 USD
                                    </h6>
                                </div>
                            </div>
                        }
                    />
                </BentoGrid>

                {/* Bottom Row (2 columns) */}
                <BentoGrid className="md:grid-cols-2 mt-12">
                    {/* Total Supply */}
                    <BentoGridItem
                        title={
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-normal">
                                Total Supply
                            </h3>
                        }
                        description={
                            <p className="text-base sm:text-lg">
                                VES serves as the backbone of the Vestion ecosystem. Designed as a <span className="font-semibold text-[#FFC107]">growth-oriented</span> token, its value appreciates as Vestion’s adoption and success expand globally.
                            </p>
                        }
                        component={
                            <div className="flex flex-col items-start mt-4">
                                <span className="text-white font-bold text-[64px] leading-none">
                                    10<span className="align-top text-[32px]">Billion</span>
                                </span>
                                <span className="text-[16px] font-normal text-[#FFC107]">VES Tokens</span>
                            </div>
                        }
                    />

                    {/* Gateway to Financial Synergy */}
                    <BentoGridItem
                        title={
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal">
                                Vestion is Your Gateway to Financial Synergy
                            </h3>
                        }
                        component={
                            <div className="space-y-5">
                                <p className="text-base sm:text-lg">
                                    Experience the evolution of banking where crypto innovation meets traditional finance. Manage your assets with ease, security, and flexibility in one powerful platform.
                                </p>
                                <Button className='flex items-center space-x-2 py-2 px-2 border border-white rounded-lg bg-transparent font-normal text-xs md:text-sm text-white hover:border-[#FFC107] hover:text-[#FFC107] transition duration-300'>
                                    <span>Discover the Future of Banking</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        }
                    />
                </BentoGrid>
            </div>
        </section>
    );
}
