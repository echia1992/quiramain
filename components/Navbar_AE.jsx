"use client";
import React, {Component, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {Menu} from "lucide-react";

const Navbar_AE =()=> {
    const [state, setState] = useState("Home")


    const navigation =[
        {
            title: " About_AE Us",
            Link: "/about"
        } ,
        {
            title: " Services",
            Link: "/service"
        },
        {
            title: "Contact Us",
            Link: "/contact"
        } ,
        {
            title: "Team",
            Link: "/team"
        }
    ]

        return (
            <header
                className='fixed top-0 right-0 w-full bg-cyan-400 px-16 flex h-14 left-0 items-center justify-between font-bold z-50'>
                <nav
                    className={` ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
                    <div className="gap-x-14 items-center  px-4 md:flex md:px-8">
                        <div className="flex items-center justify-between py-5 md:block">
                            <Link href="/">
                                <div className='rounded-full shadow-sm'>
                                    <Image className='rounded-full items-center' width='40' height='40'
                                           src={'/Images/logo.png'}
                                           alt='logo'/>
                                </div>
                            </Link>
                            <div className="md:hidden">
                                <button className="menu-btn text-gray-500 hover:text-gray-800"
                                        onClick={() => setState(!state)}
                                >
                                    {
                                        state ? (
                                            <div className='h-screen bg-amber-50'>
                                                <Menu size={30} />
                                            </div>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={`flex items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="text-gray-500 hover:text-blue-900">
                                                <a href={item.path} className="block">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="flex gap-x-6 space-x-3 items-center justify-between mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                            <div className='flex justify-between'>
                                <Link href="/login" className="block text-gray-700 hover:text-gray-900">
                                    Log in
                                </Link>
                            </div>
                            <div>
                                <Link href="/register"
                                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Sign in
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className="w-5 h-5">
                                        <path fillRule="evenodd"
                                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        );

}

export default Navbar_AE;