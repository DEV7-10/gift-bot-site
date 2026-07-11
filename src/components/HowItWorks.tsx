"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { t } = useLanguage();

  const icons = ["🤖", "⏰", "👆", "🔥"];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-[#14111F]/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <StepCard number={i + 1} icon={icons[i]} title={step.title} description={step.description} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: number;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="text-center p-6 bg-[#1C1829]/50 border border-white/5 rounded-2xl hover:border-violet-600/20 transition-colors"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="w-10 h-10 bg-violet-600/15 border border-violet-600/25 rounded-xl flex items-center justify-center text-violet-400 font-bold text-sm mx-auto mb-4">
        {number}
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
