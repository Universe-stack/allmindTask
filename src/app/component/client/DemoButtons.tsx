"use client"

import React from 'react'

type Props = {
    updateui: (sort: string)=> void
}

const DemoButtons = (props: Props) => {
  return (
    <div className='flex flex-col ' onClick={()=>props.updateui('desc')}>
        <div className='flex justify-between'>
            <ul className='flex gap-2 '>
                <li className=''><button className='px-4 py-2 rounded-xl border border-[#ffffff1a] cursor-pointer '>Brevity</button></li>
                <li className=''><button className='py-2 px-4 rounded-xl border border-[#ffffff1a] cursor-pointer'>Relevance</button></li>
                <li className=''><button className='py-2 px-4  rounded-xl border border-[#ffffff1a] cursor-pointer '>Clarity</button></li>
            </ul>

            <div className=''>
                <button className='px-4 py-2 rounded-xl border border-[#ffffff1a] cursor-pointer flex flex-nowrap  bg-halluminateBlue'>Start customizing</button>
            </div>
        </div>
        <div className='w-full mt-[2rem] bg-[#282b3066] rounded-xl h-[70%] p-1'>
            ...
        </div>
    </div>
  )
}

export default DemoButtons