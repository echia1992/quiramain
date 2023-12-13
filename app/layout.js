
import { Inter } from 'next/font/google'
import '../styles/main_AE.scss';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

// export  const metadata = {
//     image: {
//         url: "/Images/logo.png",
//         width: 5, // Specify the desired width
//         height:5,
//         alt: 'Quira Invoice',
//     },
//   title: 'Quira Resource Tech',
//   description: 'Quira Resource tech for Local and Online software company',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <div className='mt-8'>
            {children}
        </div>

      </body>
    </html>
  )
}
