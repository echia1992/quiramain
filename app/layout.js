
import { Inter } from 'next/font/google'
import '../styles/main_AE.scss';
import Navbar_AE from "@/components/Navbar_AE";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quira Resource Tech',
  description: 'Quira Resource tech for Local and Online software company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar_AE />
        <div className='mt-16'>
            {children}
        </div>

      </body>
    </html>
  )
}
