"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
    // Current team members
    const team = [
        {
            avatar: "https://res.cloudinary.com/quiratech/image/upload/v1702636059/enuhkfc0fg58ic8lb2pt.png",
            name: "Anthony A Echia",
            title: "Chief Technical Officer",
            desc: "As the Chief Technical Officer with extensive expertise in nine programming languages, I embarked on my professional journey from the grassroots, initially serving as a store assistant at So Fresh restaurants. During my tenure, I swiftly identified my passion for technology, particularly in the realm of Web development.\n" +
                "\n" +
                "My dedication and proficiency in the technical domain did not go unnoticed, leading to my ascent to the role of IT Manager. In this pivotal position, I assumed responsibility for overseeing all technical matters and project management initiatives within the organization. This transformative experience allowed me to solidify my standing as a tech leader, navigating the complexities of various projects while contributing significantly to the technological advancement of the company.\n" +
                "\n" +
                "This history reflects my unwavering commitment to continuous growth and technical excellence, showcasing my journey from a store assistant to a seasoned Chief Technical Officer.",
            skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Java"],
            linkedin: "echiaanthony",
            twitter: "echiaanthony",
            github: "echia1992"
        },
        {
            avatar: "https://res.cloudinary.com/quiratech/image/upload/v1741268152/a1jnzxhaok0tp1glab3t.jpg",
            name: "Awoniyi Oyindamola Toheebat",
            title: "Lead UI/UX Designer",
            desc: "With over 8 years of experience in UI/UX design, Oyindamola brings creativity and user-centered thinking to every project. Her background in psychology helps her create interfaces that are not only beautiful but highly intuitive and accessible to all users.\n\nSarah has led design efforts for clients across finance, healthcare, and e-commerce sectors, consistently delivering designs that exceed client expectations and enhance user engagement metrics.",
            skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping", "Design Systems", "Accessibility"],
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://res.cloudinary.com/quiratech/image/upload/v1741268768/emma_wpgsd5.jpg",
            name: "Emmanuel Onyilo",
            title: "Customer Relationship Manager",
            desc: "Emmanuel is a dynamic and customer-focused professional dedicated to fostering strong relationships between clients and development teams. With a deep understanding of customer needs and a knack for effective communication, he ensures that client expectations are seamlessly translated into practical, user-friendly solutions.\n\nHis expertise lies in bridging the gap between business goals and technical execution, working closely with developers to create customer-centric applications that enhance user satisfaction and drive business growth. Emmanuel's meticulous approach to client engagement and problem-solving makes him an invaluable asset in delivering exceptional customer experiences.",
            skills: ["Data Analysis", "Communication Skill", "UI UX Design"],
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ];
    
    // Skills we're hiring for (to show company growth)
    const openPositions = [
        "Senior Backend Developer",
        "DevOps Engineer",
        "Project Manager",
        "Mobile Developer"
    ];

    // Team member component with expanded bio functionality
    const TeamMember = ({ member }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md group w-full h-full flex flex-col">
                <div className="relative w-full pt-[100%]"> {/* Use pt-[100%] for square aspect ratio */}
                    <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                    />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                        <p className="text-indigo-600 font-medium">{member.title}</p>
                    </div>
                    
                    <div className="mb-4 flex-grow">
                        <p className="text-gray-600">
                            {isExpanded 
                                ? member.desc 
                                : `${member.desc.split('\n')[0].slice(0, 120)}...`}
                        </p>
                        <button
                            className="mt-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors focus:outline-none"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "Show Less" : "Read More"}
                        </button>
                    </div>
                    
                    {/* Skills tags */}
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.skills.slice(0, 5).map((skill, idx) => (
                                <span 
                                    key={idx} 
                                    className="inline-block px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                            {member.skills.length > 5 && (
                                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                                    +{member.skills.length - 5} more
                                </span>
                            )}
                        </div>
                    </div>
                    
                    {/* Social links */}
                    <div className="flex gap-3 pt-2 border-t border-gray-100 mt-auto">
                        <Link 
                            href={`https://twitter.com/${member.twitter}`}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Link>
                        <Link 
                            href={`https://github.com/${member.github}`}
                            className="text-gray-400 hover:text-gray-800 transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </Link>
                        <Link 
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            className="text-gray-400 hover:text-blue-700 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="p-5 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-sm text-indigo-600 font-semibold bg-indigo-50 rounded-full">
                        Our Team
                    </span>
                    <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl mt-3">
                        Meet the Experts Behind Our Success
                    </h2>
                    <p className="text-gray-600 mt-4">
                        At Quira Resource Digital Tech, our talented team of engineers, designers, and product managers work together to deliver exceptional solutions that exceed expectations.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                    {team.map((member, idx) => (
                        <TeamMember key={idx} member={member} />
                    ))}
                </div>

                {/* Join our team section */}
                <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-md">
                    <div className="md:grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex items-center text-white">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
                                <p className="mb-6 text-indigo-100">
                                    We&apos;re always looking for talented individuals who are passionate about technology and innovation. Join us in building cutting-edge solutions for clients around the world.
                                </p>
                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold mb-3">Current Openings:</h4>
                                    <ul className="space-y-2">
                                        {openPositions.map((position, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <svg className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{position}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link 
                                    href="/careers" 
                                    className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                                >
                                    View All Positions
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block relative h-auto min-h-[300px]">
                            <Image 
                                src="https://res.cloudinary.com/quiratech/image/upload/v1741278999/software-development-team-S_jtqiga.jpg" 
                                alt="Team collaboration" 
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Team =()=> {
//     // Current team members
//     const team = [
//         {
//             avatar: "https://res.cloudinary.com/quiratech/image/upload/v1702636059/enuhkfc0fg58ic8lb2pt.png",
//             name: "Anthony A Echia",
//             title: "Chief Technical Officer",
//             desc: "As the Chief Technical Officer with extensive expertise in nine programming languages, I embarked on my professional journey from the grassroots, initially serving as a store assistant at So Fresh restaurants. During my tenure, I swiftly identified my passion for technology, particularly in the realm of Web development.\n" +
//                 "\n" +
//                 "My dedication and proficiency in the technical domain did not go unnoticed, leading to my ascent to the role of IT Manager. In this pivotal position, I assumed responsibility for overseeing all technical matters and project management initiatives within the organization. This transformative experience allowed me to solidify my standing as a tech leader, navigating the complexities of various projects while contributing significantly to the technological advancement of the company.\n" +
//                 "\n" +
//                 "This history reflects my unwavering commitment to continuous growth and technical excellence, showcasing my journey from a store assistant to a seasoned Chief Technical Officer.",
//             skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Java"],
//             linkedin: "echiaanthony",
//             twitter: "echiaanthony",
//             github: "echia1992"
//         },
//         // Placeholder team members to show the grid layout
//         {
//              avatar: "https://res.cloudinary.com/quiratech/image/upload/v1741268152/a1jnzxhaok0tp1glab3t.jpg",
//             name: "Awoniyi Oyindamola Toheebat",
//             title: "Lead UI/UX Designer",
//             desc: "With over 8 years of experience in UI/UX design, Oyindamola brings creativity and user-centered thinking to every project. Her background in psychology helps her create interfaces that are not only beautiful but highly intuitive and accessible to all users.\n\nSarah has led design efforts for clients across finance, healthcare, and e-commerce sectors, consistently delivering designs that exceed client expectations and enhance user engagement metrics.",
//             skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping", "Design Systems", "Accessibility"],
//             linkedin: "javascript:void(0)",
//             twitter: "javascript:void(0)",
//             github: "javascript:void(0)"
//         },
//         {
//              avatar: "https://res.cloudinary.com/quiratech/image/upload/v1741268768/emma_wpgsd5.jpg",
//             name: "Emmanuel Onyilo",
//             title: "Customer Relationship Manager",
//             desc: "Emmanuel is a dynamic and customer-focused professional dedicated to fostering strong relationships between clients and development teams. With a deep understanding of customer needs and a knack for effective communication, he ensures that client expectations are seamlessly translated into practical, user-friendly solutions.\n\nHis expertise lies in bridging the gap between business goals and technical execution, working closely with developers to create customer-centric applications that enhance user satisfaction and drive business growth. Emmanuel's meticulous approach to client engagement and problem-solving makes him an invaluable asset in delivering exceptional customer experiences.",
//             skills: ["Data Analysis", "Communication Skill", "UI UX Design"],
//             linkedin: "javascript:void(0)",
//             twitter: "javascript:void(0)",
//             github: "javascript:void(0)"
//         },
//     ];
    
//     // Skills we're hiring for (to show company growth)
//     const openPositions = [
//         "Senior Backend Developer",
//         "DevOps Engineer",
//         "Project Manager",
//         "Mobile Developer"
//     ];

//     // Team member component with expanded bio functionality
//     const TeamMember = ({ member }) => {
//         const [isExpanded, setIsExpanded] = useState(false);

//         return (
//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md group w-fu ">
//                 <div className="aspect-square relative ">
//                     <Image
//                         src={member.avatar}
//                         alt={member.name}
//                         fill
//                         className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
//                     />
//                 </div>
//                 <div className="p-6">
//                     <div className="mb-4">
//                         <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
//                         <p className="text-indigo-600 font-medium">{member.title}</p>
//                     </div>
                    
//                     <div className="mb-4">
//                         <p className="text-gray-600">
//                             {isExpanded 
//                                 ? member.desc 
//                                 : `${member.desc.split('\n')[0].slice(0, 120)}...`}
//                         </p>
//                         <button
//                             className="mt-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors focus:outline-none"
//                             onClick={() => setIsExpanded(!isExpanded)}
//                         >
//                             {isExpanded ? "Show Less" : "Read More"}
//                         </button>
//                     </div>
                    
//                     {/* Skills tags */}
//                     <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
//                         <div className="grid grid-cols-4 gap-2">
//                             {member.skills.slice(0, 5).map((skill, idx) => (
//                                 <span 
//                                     key={idx} 
//                                     className="inline-block px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full"
//                                 >
//                                     {skill}
//                                 </span>
//                             ))}
//                             {member.skills.length > 5 && (
//                                 <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
//                                     +{member.skills.length - 5} more
//                                 </span>
//                             )}
//                         </div>
//                     </div>
                    
//                     {/* Social links */}
//                     <div className="flex gap-3 pt-2 border-t border-gray-100">
//                         <Link 
//                             href={`https://twitter.com/${member.twitter}`}
//                             className="text-gray-400 hover:text-blue-400 transition-colors"
//                             aria-label={`${member.name}'s Twitter`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                             </svg>
//                         </Link>
//                         <Link 
//                             href={`https://github.com/${member.github}`}
//                             className="text-gray-400 hover:text-gray-800 transition-colors"
//                             aria-label={`${member.name}'s GitHub`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                             </svg>
//                         </Link>
//                         <Link 
//                             href={`https://linkedin.com/in/${member.linkedin}`}
//                             className="text-gray-400 hover:text-blue-700 transition-colors"
//                             aria-label={`${member.name}'s LinkedIn`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//             <div className=" px-4 md:px-3">
//                 <div className="text-center w-full mb-16">
//                     <span className="inline-block px-3 py-1 text-sm text-indigo-600 font-semibold bg-indigo-50 rounded-full">
//                         Our Team
//                     </span>
//                     <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl mt-3">
//                         Meet the Experts Behind Our Success
//                     </h2>
//                     <p className="text-gray-600 mt-4">
//                         At Quira Resource Digital Tech, our talented team of engineers, designers, and product managers work together to deliver exceptional solutions that exceed expectations.
//                     </p>
//                 </div>

//                 {/* Team grid */}
//                 <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mb-16 w-full">
//                     {team.map((member, idx) => (
//                         <TeamMember key={idx} member={member} />
//                     ))}
//                 </div>

//                 {/* Join our team section */}
//                 <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-md">
//                     <div className="md:grid md:grid-cols-2">
//                         <div className="p-8 md:p-12 flex items-center text-white">
//                             <div>
//                                 <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
//                                 <p className="mb-6 text-indigo-100">
//                                     We&apos;re always looking for talented individuals who are passionate about technology and innovation. Join us in building cutting-edge solutions for clients around the world.
//                                 </p>
//                                 <div className="mb-8">
//                                     <h4 className="text-lg font-semibold mb-3">Current Openings:</h4>
//                                     <ul className="space-y-2">
//                                         {openPositions.map((position, idx) => (
//                                             <li key={idx} className="flex items-center">
//                                                 <svg className="h-5 w-5 text-indigo-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                 </svg>
//                                                 {position}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <Link 
//                                     href="/careers" 
//                                     className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
//                                 >
//                                     View All Positions
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="hidden md:block relative">
//                             <Image 
//                                 src="https://res.cloudinary.com/quiratech/image/upload/v1741278999/software-development-team-S_jtqiga.jpg" 
//                                 alt="Team collaboration" 
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Team;


