"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "./ScrollReveal";

export function Commands() {
  const { t } = useLanguage();

  return (
    <section id="commands" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {t.commands.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.commands.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.commands.subtitle}
          </p>
        </ScrollReveal>

        {/* Commands list */}
        <div className="space-y-3">
          {t.commands.list.map((cmd, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <CommandCard name={cmd.name} title={cmd.title} description={cmd.description} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandCard({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-start gap-4 p-4 bg-[#14111F]/50 border border-white/5 hover:border-violet-600/20 hover:bg-violet-600/5 rounded-xl transition-colors"
    >
      <code className="text-violet-400 font-mono text-sm bg-violet-600/10 px-3 py-1 rounded-lg whitespace-nowrap">
        {name}
      </code>
      <div className="min-w-0">
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-gray-500 text-xs mt-1">{description}</p>
      </div>
    </motion.div>
  );
}
