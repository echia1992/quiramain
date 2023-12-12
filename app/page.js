import Image from 'next/image'
import Hero_AE from "@/components/Hero_AE";
import Feature_AE from "@/components/Feature_AE";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero_AE />
     <Feature_AE/>
    </main>
  )
}
