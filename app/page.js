"use client";
import ContactSection from "../components/ContactSection";
import CustomerHappy from "../components/CustomerHappy";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Team from "../components/Team";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Team />
      <CustomerHappy />
      <ContactSection />
    </main>
  );
}
