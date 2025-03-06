"use client"
import React, { useState } from 'react';
import Link from 'next/link';

 const Feature =()=> {
    const [activeTab, setActiveTab] = useState('all');
    
    const categories = [
        { id: 'all', name: 'All Services' },
        { id: 'web', name: 'Web Solutions' },
        { id: 'consulting', name: 'Consulting' },
        { id: 'software', name: 'Software' }
    ];
    
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
            ),
            title: "Web Application",
            category: "web",
            desc: "Crafting engaging and dynamic web applications tailored to meet your specific needs. We focus on creating user-friendly interfaces and seamless interactions to enhance the overall user experience.",
            bullets: ["Custom web portals", "JavaScript frameworks", "Responsive design", "API integrations"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                </svg>
            ),
            title: "Business ICT Consulting",
            category: "consulting",
            desc: "Providing comprehensive ICT consultancy services to optimize your business operations. Our consultants specialize in aligning technology solutions with your strategic goals, ensuring efficiency and innovation.",
            bullets: ["Digital transformation", "IT strategy", "Process optimization", "Technology assessment"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                </svg>
            ),
            title: "Web Hosting",
            category: "web",
            desc: "Reliable and secure web hosting services to ensure your website is always accessible. We offer scalable hosting solutions with robust security measures, providing you with peace of mind and optimal performance.",
            bullets: ["Managed hosting", "High uptime guarantee", "Regular backups", "Advanced security"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
            ),
            title: "ERP Software Advice",
            category: "consulting",
            desc: "Guidance and expertise in selecting and implementing Enterprise Resource Planning (ERP) software tailored to your business needs. We help streamline your processes and enhance overall operational efficiency.",
            bullets: ["Needs assessment", "Vendor selection", "Implementation support", "Staff training"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                </svg>
            ),
            title: "Desktop Applications",
            category: "software",
            desc: "Creating powerful and intuitive desktop applications tailored to your specific requirements. Our apps are designed to enhance user productivity, providing a seamless experience on desktop platforms.",
            bullets: ["Cross-platform development", "Custom business logic", "Database integration", "User-friendly UI"]
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
                </svg>
            ),
            title: "Cloud Computing",
            category: "software",
            desc: "Harnessing the power of cloud computing to scale and optimize your business operations. Our cloud solutions offer flexibility, security, and reliability, enabling you to focus on innovation and growth.",
            bullets: ["Cloud migration", "Infrastructure as a Service", "SaaS implementation", "Scalable solutions"]
        },
    ];

    // Filter features based on active tab
    const filteredFeatures = activeTab === 'all' 
        ? features 
        : features.filter(feature => feature.category === activeTab);

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
                    <span className="inline-block px-3 py-1 text-sm text-indigo-600 font-semibold bg-indigo-50 rounded-full">
                        Our Services
                    </span>
                    <h2 className="text-gray-800 text-3xl px-3 sm:px-0 font-bold sm:text-4xl">
                        Comprehensive Solutions for Your Business Growth
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Through meticulous business analysis and collaborative sessions&#44; we align every aspect of our solutions with your business logic&#44; creating tailored software that enhances your core operations.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-12 border-b">
                    <div className="flex space-x-2 overflow-x-auto pb-2 sm:justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                                    activeTab === category.id
                                        ? 'bg-indigo-600 text-white'
                                        : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-12">
                    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 px-2">
                        {filteredFeatures.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <div className="space-y-4 p-6  bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md hover:border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-gray-800 font-semibold justify-center text-center">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 justify-center text-center">
                                        {item.desc}
                                    </p>
                                    
                                    {/* Key points */}
                                    <div>
                                        <h5 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h5>
                                        <ul className="space-y-1">
                                            {item.bullets.map((bullet, bulletIdx) => (
                                                <li key={bulletIdx} className="flex items-start px-3">
                                                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-sm text-gray-600">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* CTA Link */}
                                    <div className="pt-2">
                                        <Link href={`/service#${item.category}`} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                                            Learn more
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 w-5 h-5">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl">
                        Ready to transform your business?
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Let&apos;s discuss how our services can address your unique challenges.
                    </p>
                    <div className="mt-6">
                        <Link href="/contact" className="inline-block px-6 py-3 text-center text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow transition duration-150">
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Feature;

// import React from 'react';

// export default function Feature(){
//         const features = [
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                          stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                               d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
//                     </svg>

//                 ),
//                 title: "Web Application",
//                 desc: "Crafting engaging and dynamic web applications tailored to meet your specific needs. We focus on creating user-friendly interfaces and seamless interactions to enhance the overall user experience."
//             },
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                          stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                               d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
//                     </svg>

//                 ),
//                 title: "Business ICT Consultant",
//                 desc: "Providing comprehensive ICT consultancy services to optimize your business operations. Our consultants specialize in aligning technology solutions with your strategic goals, ensuring efficiency and innovation."
//             },
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                          stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                               d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
//                     </svg>

//                 ),
//                 title: "Web Hosting",
//                 desc: "Reliable and secure web hosting services to ensure your website is always accessible. We offer scalable hosting solutions with robust security measures, providing you with peace of mind and optimal performance."
//             },
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
//                     </svg>
//                 ),
//                 title: "ERP Software Advice",
//                 desc: "Guidance and expertise in selecting and implementing Enterprise Resource Planning (ERP) software tailored to your business needs. We help streamline your processes and enhance overall operational efficiency."
//             },
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                          stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                               d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
//                     </svg>


//                 ),
//                 title: "Desktop App",
//                 desc: "Creating powerful and intuitive desktop applications tailored to your specific requirements. Our apps are designed to enhance user productivity, providing a seamless experience on desktop platforms."
//             },
//             {
//                 icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                          stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round"
//                               d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
//                     </svg>

//                 ),
//                 title: "Cloud Computing",
//                 desc: "Harnessing the power of cloud computing to scale and optimize your business operations. Our cloud solutions offer flexibility, security, and reliability, enabling you to focus on innovation and growth."
//             },
//         ]

//     return (
//         <section className="py-14">
//             <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//                 <div className="max-w-xl space-y-3">
//                     <h3 className="text-indigo-600 font-semibold">
//                         Features Service
//                     </h3>
//                     <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//                         Everything you need to grow
//                     </p>
//                     <p>
//                         Through meticulous business analysis and collaborative session gathering, we adeptly align every piece of information with your business logic. This approach enables us to meticulously craft software solutions that seamlessly mirror and enhance your core business activities, ensuring a tailored and effective digital representation of your enterprise.
//                     </p>

//                 </div>
//                     <div className="mt-12">
//                         <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
//                             {
//                                 features.map((item, idx) => (
//                                     <li key={idx} className="space-y-3">
//                                         <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                             </svg>
//                                         </div>
//                                         <h4 className="text-lg text-gray-800 font-semibold">
//                                             {item.title}
//                                         </h4>
//                                         <p>
//                                             {item.desc}
//                                         </p>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 </div>
//             </section>
//         )

// }
