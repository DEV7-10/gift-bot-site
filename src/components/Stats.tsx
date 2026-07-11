"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "./ScrollReveal";
import { Server, Users, Gift, RotateCw } from "lucide-react";

const STATS = [
  { target: 500, icon: Server, labelKey: "servers" as const },
  { target: 50000, icon: Users, labelKey: "users" as const },
  { target: 12000, icon: Gift, labelKey: "giftsGiven" as const },
  { target: 30000, icon: RotateCw, labelKey: "wheelSpins" as const },
];

export function Stats() {
  const { t } = useLanguage();

  return (
    <section id="stats" className="py-24 px-4 sm:px-6 bg-[#14111F]/40">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {t.stats.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.stats.title}
          </h2>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <StatCard target={stat.target} icon={stat.icon} label={t.stats[stat.labelKey]} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  target,
  icon: Icon,
  label,
}: {
  target: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();

    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
      else setCount(target);
    }
    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="text-center p-6 bg-[#1C1829]/50 border border-white/5 hover:border-violet-600/20 rounded-2xl transition-colors"
    >
      <div className="w-12 h-12 bg-violet-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-violet-400" />
      </div>
      <div className="text-3xl font-bold text-white">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </motion.div>
  );
}
