'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';

type Props = {}

const Slogan = (props: Props) => {
  return (
    <section className='w-full flex justify-center items-center py-[6.2rem] relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 dot-pattern'></div>
        <div className='text-center text-halluminateBlack bg-halluminateWhite p-[3rem] z-20 text-[56px] leading-[66px] font-[800]'>
        <div className="typewriter-container">
            <Typewriter
                options={{
                loop: true,
                deleteSpeed: 50,  // Speed at which text is erased
                delay: 100,       // Speed at which text is typed
                }}
                onInit={(typewriter) => {
                typewriter
                    .typeString("More building, less testing")
                    .pauseFor(1500)
                    .deleteChars(7)  // Deletes "testing"
                    .typeString("reviewing")
                    .pauseFor(1500)
                    .start();
                }}
            />
        </div>
        </div>
    </section>
  )
}
export default Slogan