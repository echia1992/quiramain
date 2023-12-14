"use client"
import CountUp from 'react-countup';
export default function CustomerHappy() {

        const stats = [
            {
                data: 30,
                title: "Clients"
            },
            {
                data: 550,
                title: "Consulting based Clients"
            },
            {
                data: 4,
                title: "Countries"
            },
            {
                data: 30,
                title: "Happy clients"
            },
        ]

        return (
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                    <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                        <div className="max-w-2xl">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                We do our best to make customers always happy
                            </h3>
                            <p className="mt-3 max-w-xl">
                                we go beyond extra miles to make our customer happy
                            </p>
                        </div>
                        <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                                {stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">
                                            <CountUp end={item.data}  duration={2} separator=","/>
                                        </h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
}