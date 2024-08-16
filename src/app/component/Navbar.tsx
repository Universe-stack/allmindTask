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
                        <li className="font-[500] leading-normal text-[16px] hover:text-starspurpleLight"><Link href={"/saas"}>Saas</Link></li>
                        <li className="text-[16px] font-[500] leading-normal flex justify-center hover:text-starspurpleLight">
                          <Link href={"/apps"} className="flex gap-1 self-center">Apps </Link>
                        </li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/blog"}>Blog</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/courses"}>Courses</Link></li>
                        <li className="text-[16px] font-[500] leading-normal hover:text-starspurpleLight"><Link href={"/dashboard"}>List your product</Link></li>
                    </ul>
                </nav>
                <div className='flex'>
                    <Link href={''} className='flex xsm:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex bg-halluminateBlue text-halluminateWhite text-center whitespace-nowrap cursor-pointer rounded-md justify-center items-center w-auto px-5 py-3 '> Sign In</Link>
                    <div className='xsm:block sm:block md:flex lg:hidden xl:hidden 2xl:hidden'>Button</div>
                </div>
        </div>
    </header>
  )
}

export default Navbar;
