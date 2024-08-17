import React from 'react';
import CTAPIC from "../../../public/cta4.png";
import Image from 'next/image';

type Props = {}

const CTA = (props: Props) => {
  return (
    <section className='flex 2xl:h-[427px] xl:h-[427px] justify-center w-full py-[3.75rem] bg-halluminateBlack'>
        <div className='self-center w-[80%] h-[100%] text-halluminateWhite flex 2xl:flex-row xl:flex-row sm:flex-col md:flex-col xsm:flex-col justify-between'>
            <div className='2xl:w-[40%] xl:w-[40%] md:w-[100%] sm:w-[100%] xsm:w-[100%] text-left'>
                <h2 className='text-[56px] leading-[66px] font-[7000]'>Build AI agents faster</h2>
                <button className='leading-[24px] text-[16px] flex justify-center items-center py-[1.25rem] px-[2rem] text-halluminateBlack bg-halluminateWhite mt-[48px] rounded-[8px] gap-[10px] font-[700]'>
                     Get a demo 
                     <span className='self-center pt-1'>

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

                     </span>
                </button>
            </div>

            <div className=''>
                <Image src={CTAPIC} width={400} height={500} alt='cta picture' className='w-[100%] h-[100%]' />
            </div>
        </div>
    </section>
  )
}

export default CTA