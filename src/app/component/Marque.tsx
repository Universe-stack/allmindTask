import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import KPMG from '../../../public/KPMG.png'
import Robinhood from '../../../public/Robinhood.png'
import Stripe from '../../../public/stripe.png'
import SpikeyAI from '../../../public/SpikeyAI.png'
import Oxbridge from '../../../public/Oxbridge.png'
import Harvey from '../../../public/Harvey.png'

type Props = {}

const Marque = (props: Props) => {
    return (
        <section className='w-[100%] flex flex-col justify-center'>
            <div className='xl:w-[85%] xsm:w-[90%] self-center flex flex-col gap-[24px] my-[3rem]'>
                <p className='text-center font-[800] text-[24px] text-halluminateBlack pb-[2rem]'>Trusted by Developers</p>
                <div className='flex gap-[2rem] overflow-hidden mask-marquee'>
                    <Marquee className=''>
                        <div className='px-[1rem]'>
                            <Image src={KPMG} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={Stripe} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>

                        <div className='px-[1rem]'>
                            <Image src={Robinhood} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={SpikeyAI} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
                        <div className='px-[1rem]'>
                            <Image src={Oxbridge} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={Harvey} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
                        <div className='px-[1rem]'>
                            <Image src={KPMG} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={Stripe} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>

                        <div className='px-[1rem]'>
                            <Image src={Robinhood} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={SpikeyAI} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
                        <div className='px-[1rem]'>
                            <Image src={Oxbridge} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                        <div className='px-[1rem]'>
                        <Image src={Harvey} width={400} height={500} alt='KPMG logo' className='w-[5rem]' />
                        </div>
    
                    </Marquee>
                </div>
            </div>
        </section>
      )
}

export default Marque