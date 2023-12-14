import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <section className="about-section !gap-8 !space-x-3 grid ">
                <div className="image-container ">
                    <Image className="!rounded-md !gap-8 !space-x-3" src="/images/system.jpg" alt="Profile Image"
                           width={600} height={600}/>
                </div>
                <div className="text-container grid">
                    <h5 className='text-purple-600'>Welcome to Quira Resource Tech</h5>
                    <p className='text-sm'>
                         where our journey began with a commitment to excellence and a
                        deep passion for technology. Originating from humble beginnings at So Fresh restaurants, we
                        quickly identified the transformative potential of technology, especially in the field of
                        Software development.

                        As we evolved, so did our vision. Today, at the heart of QuiraTech lies a sophisticated software
                        architecture meticulously crafted to prioritize customer satisfaction. Our innovative approach
                        ensures that our solutions not only capture every business requirement but also go beyond,
                        anticipating future needs and adapting to the ever-changing landscape of technology.

                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        QuiraTech is more than a technology firm; it's a hub of creativity and problem-solving. Our
                        commitment to continuous growth and technical excellence has propelled us to the forefront of
                        the industry. By blending our expertise in nine programming languages with a keen understanding
                        of business dynamics, we have become synonymous with cutting-edge solutions and unparalleled
                        innovation.

                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Join us on this exciting journey as we continue to push the boundaries of what's possible in the
                        tech realm. At Quira Resource Tech, we are not just building software; we are shaping the future
                        of technology.
                    </p>
                    {/* Add more paragraphs as needed */}
                </div>

            </section>
            <div className='grid justify-center items-center px-6 py-8'>
                <h4 className=' flex text-pink-400 !justify-center !items-center '>SERVICE STATEMENT PROMISES FOR QUIRA </h4>
                <p className='text-sm py-4 px-6'>
                    <span className='text-lime-600 text-2xl'>  Q</span> = Quality Solutions: At QUIRA, we provide top-notch IT solutions that prioritize quality and excellence in every aspect of our services.
                </p>
                <p className='text-sm py-4 px-6'>
                    <span className='text-Blue-600 text-2xl'>  U</span>=Unparalleled Expertise: Our team consists of highly skilled professionals with a deep understanding of the latest technologies and industry trends.
                </p>
                <p className='text-sm py-4 px-6'>
                    <span className='text-purple-600 text-2xl'>I</span>= Innovative Approach: We pride ourselves on our innovative mindset, constantly seeking out new and creative solutions to meet the evolving needs of our clients.
                </p>
                <p className='text-sm py-4 px-6'>

                   <span className='text-green-300 text-2xl'>R</span>	= Reliable Support: We offer reliable and responsive support to ensure that your systems run smoothly, and your business operations stay uninterrupted.
                </p>
                <p className='text-sm py-4 px-6'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className='text-cyan-500 text-2xl'>  A</span>= Adaptive Solutions: We understand that every business is unique. That's why we tailor our services to fit your specific requirements and goals.
                </p>
            </div>
        </>
)
}