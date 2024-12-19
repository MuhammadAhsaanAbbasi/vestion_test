"use client";
import React from 'react';
import { ArrowDown, ArrowRight, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
// If you have a custom Icon for ETH or VES, replace with actual components or <Image> tags.

const TokenForm = () => {
    return (
        <section className="relative w-full min-h-screen bg-form-gradient flex justify-center items-center px-10 md:px-20 py-10 md:py-20">
            <div className="w-full mx-auto bg-primary relative rounded-xl flex flex-col md:flex-row md:items-stretch gap-8 p-8 md:p-10">

                {/* Left Card (Yellow Box) */}
                <div className="flex flex-col justify-center basis-3/5 gap-8">
                    <h2 className="text-[#1E2329] font-medium leading-snug text-2xl md:text-3xl lg:text-4xl uppercase">
                        JOIN THE VESTION REVOLUTION<br />
                        BE PART OF A THRIVING ECOSYSTEM
                    </h2>
                    <p className="text-[#1E2329] text-base md:text-lg leading-relaxed">
                        Early joiners not only shape the future but also position themselves
                        for maximum growth and gains. The earlier you invest, the greater your potential rewards.
                    </p>
                    <Button className='flex items-center space-x-2 py-2 px-2 border border-white rounded-lg bg-transparent font-normal text-xs md:text-sm text-white hover:border-secondary hover:text-secondary transition duration-300 w-[20vw]'>
                        <span>Join Our Community</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Right Card (Buy Token Form) */}
                <div className="md:absolute md:right-10 md:bottom-0 max-w-sm w-full flex-1 bg-white rounded-xl shadow-lg p-6 space-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-black font-medium text-lg">
                            Buy Token
                        </h3>
                        <Menu className='text-black' />
                    </div>

                    {/* "You pay" section */}
                    <div className="border border-[#E9E9E9] rounded-lg p-4 flex justify-between items-center relative top-5">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex flex-col items-start">
                                <span className="text-sm text-neutral-700">You pay</span>
                                <Input
                                    type="number"
                                    value="0.5"
                                    className="w-16 bg-transparent outline-none text-3xl font-semibold text-[#1E2329]"
                                    readOnly
                                />
                            </div>
                            <div className='flex items-center gap-5 text-xs text-neutral-500'>
                                <span>
                                    Estimated cost:
                                </span>
                                <span>
                                    ~$14.27
                                </span>
                            </div>
                        </div>
                        <button className="text-sm text-black bg-neutral-200 px-2 py-1 rounded">
                            ETH
                        </button>
                    </div>

                    {/* Arrow icon to indicate conversion */}
                    <div className="flex justify-center relative z-20">
                        <div className="bg-[#FFC107] w-10 h-10 rounded-full flex items-center justify-center">
                            <ArrowDown />
                        </div>
                    </div>

                    {/* "You get" section */}
                    <div className="border border-[#E9E9E9] rounded-lg p-4 flex justify-between items-center relative bottom-5">
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex flex-col items-start">
                                <span className="text-sm text-neutral-700">You get</span>
                                <span className="text-3xl font-semibold text-[#1E2329]">
                                    15,384.61
                                </span>
                            </div>
                            <div className='flex items-center gap-5 text-xs text-neutral-500'>
                                <span>
                                    Total supply:
                                </span>
                                <span>
                                    87520
                                </span>
                            </div>
                        </div>
                        <button className="text-sm text-black bg-neutral-200 px-2 py-1 rounded">
                            ETH
                        </button>
                    </div>

                    {/* Agreement, Buy Button & Exchange Rate Info */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="flex justify-center items-center gap-2">
                            <Input type="checkbox" className="h-4 w-4 border border-neutral-400" />
                            <p className='text-sm text-neutral-700'>
                                By continuing I agree to <a href="#" className="text-[#FFC107] underline">Token Purchase Agreement</a>
                            </p>
                        </div>
                        {/* Buy Button */}
                        <Button className="w-full text-center py-3 bg-primary text-black font-medium rounded-lg hover:opacity-90 transition">
                            Buy VES
                        </Button>
                        {/* Exchange Rate Info */}
                        <h6 className="text-xs text-neutral-500 text-center">
                            1 USDT = 0.00034 VES
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenForm;
