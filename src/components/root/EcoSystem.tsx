import Image from 'next/image'
import React from 'react'
import EcoSystemImage from "@/../public/EcoSystem.svg"
import ExploreButton from '../shared/ExploreButton'

const EcoSystem = () => {
    return (
        <section className='flex flex-col justify-center items-start md:items-center gap-16 py-20 bg-eco-gradient px-6'>
            <div className='text-left md:text-center flex flex-col justify-center gap-4'>
                <h6 className='text-lg font-medium text-primary'>
                    EcoSystem
                </h6>
                <h2 className='text-2xl md:text-3xl font-normal w-[345px] md:w-[822px]'>
                    Unlocking the Future of Finance with a Unified Ecosystem for Digital and Traditional Investments
                </h2>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-start md:items-center gap-6'>
                {/* Image */}
                <div className='flex-1 flex flex-col justify-center items-center gap-5'>
                    <Image
                        src={EcoSystemImage}
                        alt='EcoSystem'
                        width={473}
                        height={472.37}
                    />
                    <div className='inline-flex md:hidden'>
                        <ExploreButton />
                    </div>
                </div>
                {/* Other Text */}
                <div className='flex flex-col justify-between items-start gap-12 pl-0 md:pl-6 flex-1'>
                    <div className='w-full md:w-[34vw] flex flex-col justify-between items-start gap-9'>
                        <h4 className='tracking-[0.02em] text-xl md:text-2xl font-medium'>
                            The Vestion Ecosystem: Bridging the Gap Between Blockchain Innovation and Conventional Finance
                        </h4>
                        <p className='text-lg font-normal hidden md:inline-flex'>
                            At Vestion, we believe that the future of finance lies in integrating the best of traditional and digital worlds. Our ecosystem is a transformative platform designed to empower individuals, businesses, and institutions with innovative financial tools. By combining blockchain’s decentralization with the stability of conventional finance, we aim to unlock a future where financial growth is accessible, secure, and limitless.
                        </p>
                        <p className='text-lg font-normal inline-flex md:hidden'>
                            Experience the next evolution in finance, where blockchain technology empowers you to securely invest in and manage real-world assets with ease
                        </p>
                    </div>
                    <div className='hidden md:inline-flex'>
                        <ExploreButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EcoSystem