"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import { IoMenuOutline } from 'react-icons/io5';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

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
            <header className={`fixed top-0 right-0 w-full px-4 md:px-8 flex h-16 items-center justify-between font-medium z-50 transition-all duration-300 ${
                scrolled ? 'bg-indigo-600 shadow-md' : 'bg-indigo-500'
            }`}>
                <Link href='/' className="flex items-center">
                    <div className='rounded-full shadow-sm overflow-hidden'>
                        <Image 
                            className='rounded-full' 
                            width='44' 
                            height='44' 
                            src='/Images/logo.png' 
                            alt='Quira Resource Logo' 
                            priority
                        />
                    </div>
                    <span className="ml-3 text-white font-bold hidden sm:block">Quira Resource</span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className='hidden sm:flex items-center gap-3 text-white'>
                    <ul className='flex items-center space-x-8'>
                        {navigation.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <Link 
                                    href={item.link}
                                    className={`transition-colors duration-300 hover:text-gray-100 py-2 ${
                                        pathname === item.link 
                                            ? 'font-semibold border-b-2 border-white' 
                                            : 'hover:border-b-2 hover:border-white/50'
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* CTA Button */}
                <div className='hidden sm:flex items-center'>
                    <Link
                        href='/register'
                        className='flex items-center justify-center gap-x-1 py-2 px-5 text-indigo-700 font-medium bg-white hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors duration-300 shadow-sm'
                    >
                        Get Started
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                            <path
                                fillRule='evenodd'
                                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className='sm:hidden text-white focus:outline-none menu-button' 
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <IoMenuOutline size={28} />
                </button>
            </header>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300">
                    <div
                        className='fixed w-64 bg-white h-screen z-50 top-0 right-0 shadow-2xl transition-transform duration-300 transform mobile-menu'
                    >
                        <div className='flex justify-between items-center border-b border-gray-200 p-4'>
                            <div className="flex items-center">
                                <Image 
                                    className='rounded-full' 
                                    width='32' 
                                    height='32' 
                                    src='/Images/logo.png' 
                                    alt='Quira Resource Logo' 
                                />
                                <span className="ml-2 font-bold text-indigo-600">Quira Resource</span>
                            </div>
                            <button 
                                className='text-gray-500 hover:text-gray-700 cursor-pointer transition-colors'
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <RxCross1 size={24} />
                            </button>
                        </div>
                        
                        <nav className='p-4'>
                            <ul className='space-y-4'>
                                {navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link 
                                            href={item.link}
                                            className={`block py-2 px-4 rounded-lg transition-colors ${
                                                pathname === item.link 
                                                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                                    : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        <div className='px-4 mt-6'>
                            <Link
                                href='/register'
                                className='flex items-center justify-center gap-x-1 py-3 px-4 w-full text-white font-medium bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors'
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                                    <path
                                        fillRule='evenodd'
                                        d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { RxCross1 } from 'react-icons/rx';
// import { IoMenuOutline } from 'react-icons/io5';
// import {usePathname} from "next/navigation";

// const Navbar = () => {
//     const pathname = usePathname()
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const navigation = [
//         {
//             title: 'About Us',
//             link: '/about',
//         },
//         {
//             title: 'Services',
//             link: '/service',
//         },
//         {
//             title: 'Contact Us',
//             link: '/contact',
//         },
//         {
//             title: 'Team',
//             link: '/team',
//         },
//     ];

//     return (
//         <>
//             <header className='fixed top-0 right-0 w-full bg-cyan-400 px-4 md:px-8 flex h-14 items-center justify-between font-bold z-50'>
//                 <Link href='/'>
//                     <div className='rounded-full shadow-sm'>
//                         <Image className='rounded-full' width='40' height='40' src='/Images/logo.png' alt='logo' />
//                     </div>
//                 </Link>
//                 <nav className='hidden sm:flex items-center gap-3 text-slate-50'>
//                     <div className='flex items-center md:flex'>
//                         <ul className='hidden sm:justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
//                             {navigation.map((item, idx) => (
//                                 <li key={idx} className={`${pathname ===item.link? 'border-b-2 border-purple-700 hover:text-blue-900' : ""}`}>
//                                     <Link href={item.link}>{item.title}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </nav>
//                 <div className='hidden sm:flex justify-between gap-4 items-center'>
//                     <Link href='/login' className='hidden text-gray-700 hover:text-gray-900'>
//                         Log in
//                     </Link>
//                     <Link
//                         href='/register'
//                         className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'
//                     >
//                         Sign Up as Dev
//                         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
//                             <path
//                                 fillRule='evenodd'
//                                 d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
//                                 clipRule='evenodd'
//                             />
//                         </svg>
//                     </Link>
//                 </div>
//                 <button className='sm:hidden' onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//                     <IoMenuOutline size={30} className='text-3xl' />
//                 </button>
//             </header>
//             {isMobileMenuOpen && (
//                 <div
//                     className='fixed w-44 sm:w-32 bg-slate-600 h-screen z-50 top-0 right-0 bg-opacity-90 p-4 text-slate-50'>
//                     <div className='flex justify-between items-center text-slate-50 mb-4'>
//                         <h2 className='font-bold'>
//                             <span className='text-yellow-300'>Qu</span>
//                             <span className='text-green-500'>ira</span>{' '}
//                             <span className='text-yellow-300'>R</span>
//                             <span className='text-green-500'>S</span>
//                         </h2>
//                         <RxCross1 size={30} className='left-0 cursor-pointer' onClick={() => setMobileMenuOpen(false)}/>
//                     </div>
//                     <nav className='sm:flex items-center gap-3'>
//                         <div className='flex items-center md:flex'>
//                             <ul className=' sm:justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
//                                 {navigation.map((item, idx) => (
//                                     <li key={idx} className='text-gray-50 hover:text-blue-900'>
//                                         <Link href={item.link}>{item.title}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </nav>
//                     <div className=' sm:flex justify-between gap-4 items-center'>
//                         <Link href='/login' className='hidden text-gray-700 hover:text-gray-900'>
//                             Log in
//                         </Link>
//                         <Link
//                             href='/register'
//                             className='flex items-center justify-center gap-x-1 py-1 px-2 text-green-500 font-mono bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full'
//                         >
//                             Sign Up as Dev
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;
