"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "./ScrollReveal";
import { StreakBar } from "./StreakBar";
import { Check } from "lucide-react";

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {t.features.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Drop card */}
          <ScrollReveal>
            <FeatureCard>
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-violet-600/15 border border-violet-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6 hover:scale-110 transition-transform cursor-default">
                  🎁
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.features.drop.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t.features.drop.description}
                </p>
                <ul className="space-y-3">
                  {t.features.drop.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FeatureCard>
          </ScrollReveal>

          {/* Wheel card */}
          <ScrollReveal delay={0.15}>
            <FeatureCard>
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-bl-full" />
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 bg-violet-600/15 border border-violet-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6 cursor-default"
                >
                  🎡
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.features.wheel.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t.features.wheel.description}
                </p>
                <ul className="space-y-3">
                  {t.features.wheel.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <StreakBar />
              </div>
            </FeatureCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(124, 58, 237, 0.12)" }}
      transition={{ duration: 0.3 }}
      className="bg-[#14111F]/70 border border-white/5 hover:border-violet-600/25 rounded-2xl p-8 relative overflow-hidden transition-colors"
    >
      {children}
    </motion.div>
  );
}
