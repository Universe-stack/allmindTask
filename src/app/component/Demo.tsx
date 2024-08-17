'use client'
import React from 'react';
import FormInput from './client/FormInput';
import DemoButtons from './client/DemoButtons';

type Props = {}
const res={}
const Demo = (props: Props) => {
    function updatesort(sort:string) {
        
    }
  return (
    <section className='w-full flex justify-center py-[6.25rem] bg-halluminateBlack text-halluminateWhite'>
        <div className='w-[85%] self-center flex flex-col justify-center'>
            <div className='flex flex-col gap-[16px] text-center'>
                <h2 className='2xl:text-[4rem] xl:text-[4rem] md:text-[3rem] sm:text-[2.5rem] xsm:text-[2.5rem]  text-halluminateWhite'> Try our demo below</h2>
                <p className='2xl:text-[1.25rem] xl:text-[1.25rem] md:text-[1.5rem] sm:text-[1rem] xsm:text-[0.89rem]'>AI agent outputs will be graded against pre-defined criteria judged by evaluation models.</p>
            </div>

            <div className=' flex 2xl:flex-row xl:text-flex-row md:flex-row sm:flex-col xsm:flex-col w-full justify-between gap-[5%] mt-[4rem] mb-[4px]'>
                <div className='2xl:w-[50%] xl:w-[50%] md:w-[100%] sm:w-[100%] xsm:w-[100%] relative flex flex-col rounded-xl  border border-[#ffffff1a] h-[65vh] p-4 shadow-2xl bg-[#282b3066]'>
                    <div className='flex justify-end items-center'>
                        <div className='p-[0.5rem] rounded-xl border border-[#ffffff1a] flex justify-center items-center cursor-pointer'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            style={{ width: '1.5rem', height: '1.5rem'}}
                            className="snipcss0-4-4-5"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                clipRule="evenodd"
                            ></path>
                            </svg>
                        </div>
                    </div>
                    <div className='self-end w-[100%] flex justify-between p-3'>
                        <FormInput />
                    </div>
                    <h3 className='absolute top-0 bottom-0 left-0 right-0 text-center self-center text-halluminateWhite'> AI agent example</h3>
                </div>

                <div className='2xl:w-[50%] xl:w-[50%] md:w-[100%] sm:w-[100%] xsm:w-[100%] relative flex flex-col rounded-xl  border border-[#ffffff1a] h-[65vh] p-4 shadow-2xl'>
                    <div className='flex flex-col'>
                        <div className=''>
                            <DemoButtons updateui={updatesort} />
                        </div>
                        <div className=''>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Demo