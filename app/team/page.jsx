"use client"
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function TeamSection() {
    const team = [
        {
            avatar: "/Images/CEO.png",
            name: "Anthony A Echia",
            title: "CTO",
            desc: "As the Chief Technical Officer with extensive expertise in nine programming languages, I embarked on my professional journey from the grassroots, initially serving as a store assistant at So Fresh restaurants. During my tenure, I swiftly identified my passion for technology, particularly in the realm of Web development.\n" +
                "\n" +
                "My dedication and proficiency in the technical domain did not go unnoticed, leading to my ascent to the role of IT Manager. In this pivotal position, I assumed responsibility for overseeing all technical matters and project management initiatives within the organization. This transformative experience allowed me to solidify my standing as a tech leader, navigating the complexities of various projects while contributing significantly to the technological advancement of the company.\n" +
                "\n" +
                "This history reflects my unwavering commitment to continuous growth and technical excellence, showcasing my journey from a store assistant to a seasoned Chief Technical Officer. \n" + "Experienced in Reactjs, NextJs,HTML 5 Css, Java, vuejs, nodejs, expressJs Prisma ORM , MongoDB, Mysql and PostgreSQL database syntax's",
            linkedin: "echiaanthony",
            twitter: "echiaanthony",
            github: "echia1992"
        },
        // {
        //     avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
        //     name: "Micheal colorand",
        //     title: "Software engineer",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        //
        //     github: "javascript:void(0)"
        // },
        // {
        //     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //     name: "Brown Luis",
        //     title: "Full stack engineer",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        //     github: "javascript:void(0)"
        // },
        // {
        //     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //     name: "Lysa sandiago",
        //     title: "Head of designers",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        //     github: "javascript:void(0)"
        // },
        // {
        //     avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //     name: "Daniel martin",
        //     title: "Product designer",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        //     github: "javascript:void(0)"
        // },
        // {
        //     avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        //     name: "Vicky tanson",
        //     title: "Product manager",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        //     github: "javascript:void(0)"
        // },
    ]
    const TeamMember = ({ member }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleExpand = () => {
            setIsExpanded(!isExpanded);
        };
        return (
            <li>
                <div className="w-full h-60 sm:h-52 md:h-56">
                    <Image
                        src={member.avatar}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        alt="cto" />
                </div>
                <div className="mt-4">
                    <h4 className="text-lg text-gray-700 font-semibold">{member.name}</h4>
                    <p className="text-indigo-600">{member.title}</p>
                    <p className="text-gray-600 mt-2">
                        {isExpanded ? member.desc : `${member.desc.slice(0, 40)}...`}
                        {!isExpanded?(
                            <button
                                className="text-indigo-600 cursor-pointer focus:outline-none"
                                onClick={toggleExpand}
                            >
                                Read More
                            </button>
                        ): (
                            <button
                                className="text-indigo-600 cursor-pointer focus:outline-none"
                                onClick={()=>setIsExpanded(!toggleExpand)}
                            >
                                close
                            </button>
                        )
                        }
                    </p>
                    <div className="mt-3 flex gap-4 text-gray-400">
                        <Link href={member.twitter}>
                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor"
                                 viewBox="0 0 48 48">
                                <g clip-path="url(#clip0_17_80)">
                                    <path fill="currentColor"
                                          d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_80">
                                        <path fill="currentColor" d="M0 0h48v48H0z"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href={member.github}>
                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor"
                                 viewBox="0 0 48 48">
                                <g fill="currentColor" clip-path="url(#clip0_910_44)">
                                    <path fill-rule="evenodd"
                                          d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                                          clip-rule="evenodd"/>
                                    <path
                                        d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_910_44">
                                        <path fill="currentColor" d="M0 0h48v48H0z"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href={member.linkedin}>
                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48">
                                <g clip-path="url(#clip0_17_68)">
                                    <path fill="currentColor"
                                          d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_68">
                                        <path fill="currentColor" d="M0 0h48v48H0z"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </li>
        );
    };
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className=" text-center justify-center grid" >
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl justify-center items-center">
                        Meet our team of Engineers, designers, and product managers.
                    </h3>
                    <p className="text-gray-600 mt-3">
                        At Quira Resource, we take pride in the technical excellence that drives each of our projects. Our dedicated team comprises seasoned engineers, creative designers, and strategic product managers, all working in harmony to deliver solutions that exceed expectations.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <TeamMember key={idx} member={item} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}