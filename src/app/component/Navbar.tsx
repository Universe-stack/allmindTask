import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import halluminateLogo from '../../../public/halluminatelogo.svg';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='w-full flex justify-center bg-halluminateWhite fixed top-0 z-[1000] border-b border-b-[#e0e0e0]'>
        <div className='w-[85%]  flex justify-between items-center py-4'>
                <Link href={"/"} className=''>
                  <Image src={halluminateLogo} alt="Logo" width={400} height={500} className='max-w-[141px] max-h-[40px] cursor-pointer' />
                </Link>
                <nav className=" flex self-center xsm:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex ">
                    <ul className="flex xl:gap-[2.5rem] md:gap-[1.6rem] 2xl:flex sm:hidden">
                        <li className="font-[500] leading-normal text-[16px] hover:text-starspurpleLight"><Link href={"/"}>Home</Link></li>
                        <li className="text-[16px] font-[500] leading-normal flex justify-center hover:text-starspurpleLight">
                          <Link href={"/apps"} className="flex gap-1 self-center">Documentation </Link>
                        </li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/blog"}>Pricing</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/courses"}>Blogs</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/dashboard"}>Contact</Link></li>
                    </ul>
                </nav>
                <div className='flex'>
                    <Link href={''} className='flex xsm:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex bg-halluminateBlue text-halluminateWhite text-center whitespace-nowrap cursor-pointer rounded-md justify-center items-center w-auto px-5 py-3 '> Sign In</Link>
                    <div className='xsm:block sm:block md:flex lg:hidden xl:hidden 2xl:hidden'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="24px"
                        height="24px"
                      >
                        <path d="M3 6h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3C2.45 4 2 4.45 2 5s0.45 1 1 1zm0 7h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 7h18c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"/>
                      </svg>

                    </div>
                </div>
        </div>
    </header>
  )
}

export default Navbar;
