import React from 'react'
import BackgroundLightBulb from '../../../public/BackgroundLightbulb.svg'
import Image from 'next/image'
import animation from '../../../public/Animationh2.gif'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='relative w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden'>
        <div className=' absolute top-0 bottom-0 left-0 right-0  -z-20 '> </div>
        <div className='-z-10 opacity-10 flex gap-10 mb-8'>
            <Image src={animation} width={400} height={400} className=' absolute top-4 right-[10%]' alt='hero animation' />
            <Image src={animation} width={400} height={400} className=' absolute bottom-[-5rem] right-[-3rem]' alt='hero animation' />
            <Image src={animation} width={400} height={400} className='left-[10%] top-4 absolute' alt='hero animation' />
            <Image src={animation} width={400} height={400} className='left-0 bottom-[-5rem] absolute' alt='hero animation' />
        </div>
       <div className='absolute top-[5rem] bg-[#5c67e0] w-[100%] flex justify-center py-2 '>
            <div className='w-[85%] flex justify-start gap-4'>
            <p className='text-halluminateWhite self-center'>Announcement: Halluminate Web App Launch</p> 
            <div className='self-start font-[800] bg-halluminateGrey px-2 rounded-sm cursor-pointer'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                        >
                        <path
                            fillRule="evenodd"
                            d="M3.75 12a.75.75 0 0 1 .75-.75h11.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4.5a.75.75 0 0 1-.75-.75z"
                            clipRule="evenodd"
                        />
                        </svg>
            </div>
            </div>
        </div>
        <div className='w-full h-[100%] self-center flex flex-col justify-center items-center  text-center z-100 mt-[5rem]'>
            <p className="text-[3rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[80px] mb-8 text-halluminateBlack font-[800]">
                <span className="text-halluminateBlue font-[800]">Custom</span><span className='font-[600]'> testing
                <br />
                for AI agents
                <br />
                </span>
            </p>
            <p className="text-[1rem] md:text-[1rem] lg:text-[1.25rem] leading-[1.5] mb-8 text-[#5d5d5d]">
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