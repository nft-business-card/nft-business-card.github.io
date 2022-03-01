import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import Team from "../components/Team";
import HowTo from "../components/HowToSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />
      <Hero />
      <Resources />
      <About />
      <HowTo />
      <Team />
      <Footer />
    </div>
  );
}
