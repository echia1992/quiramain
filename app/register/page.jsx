import Link from "next/link";

export default function Register() {
    return (
        <div className='h-screen sm:flex justify-center items-center space-x-3 space-y-2 '>
            <h1 className='text-2xl sm:text-4xl text-center '> Coming Soon</h1>
            <p className='mt-16'>Please use the contact us page and send me to us Thank you. </p>
            <Link className='text-green-600' href='/contact'>Contact Us</Link>
        </div>
    )
}