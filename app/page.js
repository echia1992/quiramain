import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import {Team} from "@/components/Team";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
     <Feature/>
        <Team/>
        <ContactSection/>
    </main>
  )
}
