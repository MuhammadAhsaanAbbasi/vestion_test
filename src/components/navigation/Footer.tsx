import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/../public/Frame 106.svg"
import discord from "@/../public/discord.svg"
import linkedIn from "@/../public/linkedIn.svg"
import telegram from "@/../public/telegram.svg"
import twitter from "@/../public/twitter.svg"
import { Button } from '../ui/button';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 px-8 md:px-16 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                {/* Company Info */}
                <div className="flex flex-col gap-4">
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={160}
                        height={45}
                    />
                    <div>
                        <p className="text-yellow-400 font-medium">Vestion Holdings</p>
                        <p className="text-sm">
                            7 Temasek Boulevard, <br />
                            #12-07 Suntec Tower One, <br />
                            Singapore 038987
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-2">
                        <Link href="#">
                            <Image
                                src={twitter}
                                alt='Logo'
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={telegram}
                                alt='Logo'
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={discord}
                                alt='Logo'
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={linkedIn}
                                alt='Logo'
                                width={25}
                                height={25}
                            />
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2'>
                    {/* Navigation Links - Home */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-white font-medium text-lg mb-2">Home</h4>
                        <Link href="#" className="hover:text-yellow-400">Ecosystem</Link>
                        <Link href="#" className="hover:text-yellow-400">Benefits</Link>
                        <Link href="#" className="hover:text-yellow-400">Tokenomics</Link>
                        <Link href="#" className="hover:text-yellow-400">About Us</Link>
                        <Link href="#" className="hover:text-yellow-400">FAQ</Link>
                    </div>

                    {/* Navigation Links - Contact Us */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-white font-medium text-lg mb-2">Contact Us</h4>
                        <Link href="#" className="hover:text-yellow-400">Get in Touch</Link>
                        <Link href="#" className="hover:text-yellow-400">Contact Form</Link>
                        <Link href="#" className="hover:text-yellow-400">Support</Link>
                        <Link href="#" className="hover:text-yellow-400">Partnership</Link>
                        <Link href="#" className="hover:text-yellow-400">About Us</Link>
                    </div>

                    {/* Navigation Links - Legal */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-white font-medium text-lg mb-2">Legal</h4>
                        <Link href="#" className="hover:text-yellow-400">Terms & Conditions</Link>
                        <Link href="#" className="hover:text-yellow-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-yellow-400">Accessibility</Link>
                    </div>

                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-sm font-light">Get the freshest news from us</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email address..."
                            className=" px-2 rounded-md text-black focus:outline-none"
                        />
                        <Button className="bg-primary text-secondary px-4 py-2 rounded-r-md hover:bg-secondary hover:text-primary">
                            Subscribe
                        </Button>
                    </div>
                    {/* Tagline */}
                    <p className="text-white text-lg font-light text-right">
                        Beyond Currency. <br /> Beyond Limits.
                    </p>
                </div>
            </div>


            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-8">
                Copyright © 2024 Vestion | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
