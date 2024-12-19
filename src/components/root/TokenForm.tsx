"use client";
import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { Button } from '../ui/button';
// If you have a custom Icon for ETH or VES, replace with actual components or <Image> tags.

const TokenForm = () => {
    return (
        <section className="relative w-full min-h-screen bg-form-gradient flex items-center justify-center py-20 px-4 md:px-10">
            <div className="max-w-7xl w-full mx-auto bg-primary relative rounded-xl flex flex-col md:flex-row md:items-stretch gap-8 p-8 md:p-10">

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

                    <Button className='flex items-center space-x-2 py-2 px-2 border border-white rounded-lg bg-transparent font-normal text-xs md:text-sm text-white hover:border-[#FFC107] hover:text-[#FFC107] transition duration-300 w-auto'>
                        <span>Discover the Future of Banking</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Right Card (Buy Token Form) */}
                <div className="md:absolute md:right-0 md:bottom-0 max-w-sm w-full flex-1 bg-white rounded-xl shadow-lg p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-black font-medium text-lg">
                            Buy Token
                        </h3>
                        <Menu className='text-black' />
                    </div>

                    {/* "You pay" section */}
                    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-700">You pay</span>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    value="0.5"
                                    className="w-16 bg-transparent text-black text-base font-medium outline-none text-right"
                                    readOnly
                                />
                                <button className="text-sm text-black bg-neutral-200 px-2 py-1 rounded">
                                    ETH
                                </button>
                            </div>
                        </div>
                        <span className="text-xs text-neutral-500">Estimated cost: ~$14.27</span>
                    </div>

                    {/* Arrow icon to indicate conversion */}
                    <div className="flex justify-center">
                        <div className="bg-[#FFC107] w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-black text-lg">↓</span>
                        </div>
                    </div>

                    {/* "You get" section */}
                    <div className="border border-neutral-300 rounded-lg p-4 flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-700">You get</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-base font-medium text-black">15,384.61</span>
                                <button className="text-sm text-black bg-neutral-200 px-2 py-1 rounded">
                                    VES
                                </button>
                            </div>
                        </div>
                        <span className="text-xs text-neutral-500">Total supply: 87520</span>
                    </div>

                    {/* Agreement, Buy Button & Exchange Rate Info */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="flex items-start gap-2">
                            <input type="checkbox" className="h-4 w-4 border border-neutral-400" />
                            <p className='text-xs text-neutral-700'>
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
