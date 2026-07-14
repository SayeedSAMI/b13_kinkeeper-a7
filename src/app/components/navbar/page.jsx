'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
// import logoImage from 'public/assets/icon/logo.png';
const NavbarPage = () => {
    const pathname = usePathname()

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-20 lg:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='text-[#64748B] text-[16px] font-medium'><a>Home</a></li>
                        <li className='text-[#64748B] text-[16px] font-medium'><a>Timeline</a></li>
                        <li className='text-[#64748B] text-[16px] font-medium'><a>Stats</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Image width={150} height={22} src="/assets/icon/logo.png" alt='This is kin keeper logo'></Image></a>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-[#64748B] text-[16px] font-medium'><Link className={`${pathname === '/' ? "bg-[#244D3F] text-white" : ""}`} href='/'><IoHomeOutline /> Home</Link></li>
                    <li className='text-[#64748B] text-[16px] font-medium'><Link className={`${pathname === '/timeline' ? "bg-[#244D3F] text-white" : ""}`} href='/'><FaRegClock /> Timeline</Link></li>
                    <li className='text-[#64748B] text-[16px] font-medium'><Link className={`${pathname === '/status' ? "bg-[#244D3F] text-white" : ""}`} href='/'><ImStatsDots /> Stats</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarPage;