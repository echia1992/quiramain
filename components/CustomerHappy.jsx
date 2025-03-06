"use client"
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';

export default function CustomerHappy() {
    const stats = [
        {
            data: 30,
            title: "Active Clients",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            )
        },
        {
            data: 550,
            title: "Consulting Projects",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
            )
        },
        {
            data: 4,
            title: "Countries Served",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            )
        },
        {
            data: 98,
            title: "Client Satisfaction",
            suffix: "%",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
            )
        },
    ];

    // Testimonials data
    const testimonials = [
        {
            quote: "Quira Resource transformed our digital presence with their expert web application development. Their team went above and beyond our expectations.",
            author: "Emmanuel Uzowuru",
            position: "CEO, IMSLTD NG.",
            image: "https://res.cloudinary.com/quiratech/image/upload/v1741279108/immalex_lda30a.jpg"
        },
        {
            quote: "The ICT consulting services provided by Quira Digital Resource helped us streamline our operations and significantly reduce costs. Highly recommended!",
            author: "Temitope Salami",
            position: "Founder, Three Point Venture",
            image: "https://res.cloudinary.com/quiratech/image/upload/v1741279659/tope_zdw5io.jpg"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-sm text-indigo-600 font-semibold bg-indigo-50 rounded-full">
                        Client Success
                    </span>
                    <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl mt-3">
                        Committed to Client Satisfaction
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We measure our success by the satisfaction of our clients. Our dedicated team goes the extra mile to ensure every project exceeds expectations and delivers real business value.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 mb-16">
                    {stats.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 text-indigo-600 rounded-lg">
                                    {item.icon}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-indigo-600 flex items-center justify-center">
                                        <CountUp end={item.data} duration={2.5} separator="," />
                                        <span>{item.suffix || ""}</span>
                                    </h3>
                                    <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-md overflow-hidden md:grid md:grid-cols-2 border border-gray-100">
                    <div className="p-8 md:p-12 flex items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">What Our Clients Say</h3>
                            <p className="mt-4 text-gray-600">
                                Our client-first approach has earned us the trust of businesses across industries. Here's what some of our clients have to say about working with us.
                            </p>
                            
                            <div className="mt-8 space-y-6">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <p className="italic text-gray-600">"{testimonial.quote}"</p>
                                        <div className="mt-4 flex items-center">
                                            <div className="flex-shrink-0">
                                                <Image 
                                                    src={testimonial.image} 
                                                    width={40} 
                                                    height={40} 
                                                    alt={testimonial.author}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-800">{testimonial.author}</p>
                                                <p className="text-sm text-gray-500">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative md:h-auto">
                        <div className="absolute inset-0 bg-indigo-600 opacity-90"></div>
                        <div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white">
                            <h3 className="text-2xl font-bold mb-6">Our Customer Promise</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-indigo-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Transparent communication throughout your project</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-indigo-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Solutions tailored to your specific business needs</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-indigo-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Timely delivery with a focus on quality</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-indigo-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Ongoing support and maintenance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// "use client"
// import CountUp from 'react-countup';
// export default function CustomerHappy() {

//         const stats = [
//             {
//                 data: 30,
//                 title: "Clients"
//             },
//             {
//                 data: 550,
//                 title: "Consulting based Clients"
//             },
//             {
//                 data: 4,
//                 title: "Countries"
//             },
//             {
//                 data: 30,
//                 title: "Happy clients"
//             },
//         ]

//         return (
//             <section className="py-14">
//                 <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
//                     <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
//                         <div className="max-w-2xl">
//                             <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//                                 We do our best to make customers always happy
//                             </h3>
//                             <p className="mt-3 max-w-xl">
//                                 we go beyond extra miles to make our customer happy
//                             </p>
//                         </div>
//                         <div className="flex-none mt-6 md:mt-0 lg:mt-6">
//                             <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
//                                 {stats.map((item, idx) => (
//                                     <li key={idx} className="">
//                                         <h4 className="text-4xl text-indigo-600 font-semibold">
//                                             <CountUp end={item.data}  duration={2} separator=","/>
//                                         </h4>
//                                         <p className="mt-3 font-medium">{item.title}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
// }