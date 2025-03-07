import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quira Resource Tech",
  description: "Home of software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="mt-5">{children}</div>
      </body>
    </html>
  );
}
