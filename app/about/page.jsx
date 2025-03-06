// import Image from "next/image";

// export default function AboutPage() {
//     return (
//         <>
//             <section className="about-section !gap-8 !space-x-3 grid ">
//                 <div className="image-container ">
//                     <Image className="!rounded-md !gap-8 !space-x-3" src="/Images/system.jpg" alt="Profile Image"
//                            width={600} height={600}/>
//                 </div>
//                 <div className="text-container grid">
//                     <h5 className='text-purple-600'>Welcome to Quira Resource Tech</h5>
//                     <p className='text-sm'>
//                          where our journey began with a commitment to excellence and a
//                         deep passion for technology. Originating from humble beginnings at So Fresh restaurants, we
//                         quickly identified the transformative potential of technology, especially in the field of
//                         Software development.

//                         As we evolved, so did our vision. Today, at the heart of QuiraTech lies a sophisticated software
//                         architecture meticulously crafted to prioritize customer satisfaction. Our innovative approach
//                         ensures that our solutions not only capture every business requirement but also go beyond,
//                         anticipating future needs and adapting to the ever-changing landscape of technology.

//                         {/* eslint-disable-next-line react/no-unescaped-entities */}
//                         QuiraTech is more than a technology firm; it's a hub of creativity and problem-solving. Our
//                         commitment to continuous growth and technical excellence has propelled us to the forefront of
//                         the industry. By blending our expertise in nine programming languages with a keen understanding
//                         of business dynamics, we have become synonymous with cutting-edge solutions and unparalleled
//                         innovation.

//                         {/* eslint-disable-next-line react/no-unescaped-entities */}
//                         Join us on this exciting journey as we continue to push the boundaries of what's possible in the
//                         tech realm. At Quira Resource Tech, we are not just building software; we are shaping the future
//                         of technology.
//                     </p>
//                     {/* Add more paragraphs as needed */}
//                 </div>

//             </section>
//             <div className='grid justify-center items-center px-6 py-8'>
//                 <h4 className=' flex text-pink-400 !justify-center !items-center '>SERVICE STATEMENT PROMISES FOR QUIRA </h4>
//                 <p className='text-sm py-4 px-6'>
//                     <span className='text-lime-600 text-2xl'>  Q</span> = Quality Solutions: At QUIRA, we provide top-notch IT solutions that prioritize quality and excellence in every aspect of our services.
//                 </p>
//                 <p className='text-sm py-4 px-6'>
//                     <span className='text-Blue-600 text-2xl'>  U</span>=Unparalleled Expertise: Our team consists of highly skilled professionals with a deep understanding of the latest technologies and industry trends.
//                 </p>
//                 <p className='text-sm py-4 px-6'>
//                     <span className='text-purple-600 text-2xl'>I</span>= Innovative Approach: We pride ourselves on our innovative mindset, constantly seeking out new and creative solutions to meet the evolving needs of our clients.
//                 </p>
//                 <p className='text-sm py-4 px-6'>

//                    <span className='text-green-300 text-2xl'>R</span>	= Reliable Support: We offer reliable and responsive support to ensure that your systems run smoothly, and your business operations stay uninterrupted.
//                 </p>
//                 <p className='text-sm py-4 px-6'>
//                     {/* eslint-disable-next-line react/no-unescaped-entities */}
//                     <span className='text-cyan-500 text-2xl'>  A</span>= Adaptive Solutions: We understand that every business is unique. That's why we tailor our services to fit your specific requirements and goals.
//                 </p>
//             </div>
//         </>
// )
// }
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    const companyStats = [
        { number: "5+", text: "Years of Experience" },
        { number: "50+", text: "Projects Completed" },
        { number: "10+", text: "Enterprise Clients" },
        { number: "3", text: "Countries Served" }
    ];

    const values = [
        {
            title: "Customer-Centric Approach",
            description: "We place our clients at the heart of everything we do, ensuring solutions that not only meet but exceed expectations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            title: "Technical Excellence",
            description: "We pride ourselves on maintaining the highest standards of technical expertise and staying ahead of industry trends.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
            )
        },
        {
            title: "Innovative Solutions",
            description: "We continuously push boundaries to deliver innovative and future-proof solutions that help our clients stay competitive.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            )
        },
        {
            title: "Collaborative Partnership",
            description: "We build lasting partnerships with our clients, working together to achieve shared goals and long-term success.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="py-16 bg-white">
            {/* Hero Section */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                            Transforming Businesses Through Technology
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Quira Resource is a leading technology company dedicated to helping businesses thrive in the digital age. With our team of expert developers, designers, and consultants, we deliver innovative solutions that drive growth and success.
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {companyStats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <p className="text-indigo-600 text-2xl font-bold">{stat.number}</p>
                                    <p className="text-gray-600 text-sm">{stat.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-64 md:h-96 overflow-hidden rounded-xl">
                        <Image 
                            src="https://res.cloudinary.com/quiratech/image/upload/v1702636729/man-working-with-computer-side-view_gdkldv.jpg"
                            alt="Team working on a project"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Our Mission</h2>
                    <div className="mt-3 max-w-2xl mx-auto">
                        <p className="text-gray-600">
                            To empower businesses with cutting-edge technology solutions that drive innovation, 
                            enhance efficiency, and create sustainable growth opportunities. We are committed to 
                            understanding our clients' unique needs and delivering tailored solutions that exceed expectations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Our Values</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our History */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-4">Our History</h2>
                        <p className="text-gray-600 mb-4">
                            Founded with a vision to bridge the gap between businesses and technology, Quira Resource has grown 
                            from a small team of passionate technologists to a comprehensive IT solutions provider. 
                        </p>
                        <p className="text-gray-600 mb-4">
                            Over the years, we've successfully delivered hundreds of projects across multiple industries, 
                            helping our clients navigate digital transformation, optimize operations, and create exceptional 
                            user experiences.
                        </p>
                        <p className="text-gray-600">
                            Today, we continue to expand our capabilities and serve clients across four countries, maintaining 
                            our commitment to excellence and innovation in everything we do.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative h-64 md:h-96 overflow-hidden rounded-xl">
                        <Image 
                            src="https://res.cloudinary.com/quiratech/image/upload/v1702636728/16683353_5757453_fjomij.jpg"
                            alt="Company growth"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-20">
                <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">
                        Ready to transform your business?
                    </h2>
                    <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
                        Let's collaborate to create customized solutions that address your unique challenges and help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/service" className="inline-block py-3 px-6 text-center text-indigo-600 font-medium bg-white rounded-lg shadow hover:bg-indigo-50 transition duration-150">
                            Explore Our Services
                        </Link>
                        <Link href="/contact" className="inline-block py-3 px-6 text-center text-white font-medium bg-indigo-700 rounded-lg shadow hover:bg-indigo-800 transition duration-150">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}