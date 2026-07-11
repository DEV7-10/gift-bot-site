"use client";

import { LanguageProvider } from "@/hooks/useLanguage";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Commands } from "@/components/Commands";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Commands />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
