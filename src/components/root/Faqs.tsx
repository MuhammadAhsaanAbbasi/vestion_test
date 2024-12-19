import React from 'react'
import { FrequentQuestionAnswer } from './FrequentQuestionAnswer'

const FrequentAnswerQuestion = () => {
    return (
        <section className='h-full flex flex-col antialiased items-center justify-center gap-5 p-10 md:p-20'>
            <div className='text-left md:text-center flex flex-col justify-center gap-4'>
                <h6 className="text-primary font-medium text-base uppercase">
                    FAQ
                </h6>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-[40vw]'>
                    Frequently Asked Questions
                </h2>
            </div>
            <FrequentQuestionAnswer />
        </section>
    )
}

export default FrequentAnswerQuestion