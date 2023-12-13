"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import { IoMenuOutline } from 'react-icons/io5';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        {
            title: 'About Us',
            link: '/about',
        },
        {
            title: 'Services',
            link: '/service',
        },
        {
            title: 'Contact Us',
            link: '/contact',
        },
        {
            title: 'Team',
            link: '/team',
        },
    ];

    return (
        <>
            <header className='fixed top-0 right-0 w-full bg-cyan-400 px-4 md:px-8 flex h-14 items-center justify-between font-bold z-50'>
                <Link href='/'>
                    <div className='rounded-full shadow-sm'>
                        <Image className='rounded-full' width='40' height='40' src='/Images/logo.png' alt='logo' />
                    </div>
                </Link>
                <nav className='hidden sm:flex items-center gap-3'>
                    <div className='flex items-center md:flex'>
                        <ul className='hidden sm:justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                            {navigation.map((item, idx) => (
                                <li key={idx} className='text-gray-50 hover:text-blue-900'>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className='hidden sm:flex justify-between gap-4 items-center'>
                    <Link href='/login' className='hidden text-gray-700 hover:text-gray-900'>
                        Log in
                    </Link>
                    <Link
                        href='/register'
                        className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'
                    >
                        Sign Up as Dev
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                            <path
                                fillRule='evenodd'
                                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </Link>
                </div>
                <button className='sm:hidden' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <IoMenuOutline size={30} className='text-3xl' />
                </button>
            </header>
            {isMobileMenuOpen && (
                <div
                    className='fixed w-44 sm:w-32 bg-slate-600 h-screen z-50 top-0 right-0 bg-opacity-90 p-4 text-slate-50'>
                    <div className='flex justify-between items-center text-slate-50 mb-4'>
                        <h2 className='font-bold'>
                            <span className='text-yellow-300'>Qu</span>
                            <span className='text-green-500'>ira</span>{' '}
                            <span className='text-yellow-300'>R</span>
                            <span className='text-green-500'>S</span>
                        </h2>
                        <RxCross1 size={30} className='left-0 cursor-pointer' onClick={() => setMobileMenuOpen(false)}/>
                    </div>
                    <nav className='sm:flex items-center gap-3'>
                        <div className='flex items-center md:flex'>
                            <ul className=' sm:justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                                {navigation.map((item, idx) => (
                                    <li key={idx} className='text-gray-50 hover:text-blue-900'>
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <div className=' sm:flex justify-between gap-4 items-center'>
                        <Link href='/login' className='hidden text-gray-700 hover:text-gray-900'>
                            Log in
                        </Link>
                        <Link
                            href='/register'
                            className='flex items-center justify-center gap-x-1 py-1 px-2 text-green-500 font-mono bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full'
                        >
                            Sign Up as Dev
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
