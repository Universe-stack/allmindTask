import React from 'react'
import BackgroundLightBulb from '../../../public/BackgroundLightbulb.svg'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='relative w-full h-[90vh] flex flex-col justify-center items-center'>
        <div className=' absolute top-0 bottom-0 left-0 right-0  -z-20 '> </div>

       <div className='absolute top-[5rem] bg-[#5c67e0] w-[100%] flex justify-center py-2'><p className='text-halluminateWhite w-[85%] self-center'>Announcement: Halluminate Web App Launch</p></div>
        <div className='w-full h-[100%] self-center flex flex-col justify-center items-center  text-center z-100 mt-[5rem]'>
            <p className="text-[3rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[80px] mb-8 text-halluminateBlack font-[800]">
                <span className="text-halluminateBlue font-bold">Custom</span> testing
                <br />
                for AI agents
                <br />
            </p>
            <p className="text-[1rem] md:text-[1.5rem] lg:text-[1.25rem] leading-[1.5] mb-8 text-[#5d5d5d]">
                Create, finetune, and deploy application-specific evaluation models to test your AI agents.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-16 lg:mb-8">
                <button className=" cursor-pointer py-4 px-4 rounded-lg bg-halluminateBlue text-[#ffffffde] w-full md:w-auto flex items-center justify-center group transition-all duration-300 ease-in-out">
                Try now for free
                <span className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out">→</span>
                </button>
                <button
                id="style-ibyMV"
                className=" cursor-pointer py-2 px-4 rounded-lg border border-halluminateWhite text-[#3B44C6] w-full md:w-auto transition-all duration-300 ease-in-out bg-halluminateWhite hover:border hover:border-[#5d5d5d]"
                >
                Chat with us
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero