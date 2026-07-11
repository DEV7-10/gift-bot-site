"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollReveal } from "./ScrollReveal";

const INVITE_LINK =
  "https://discord.com/oauth2/authorize?client_id=1525403769276465152&permissions=8&integration_type=0&scope=bot";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="relative bg-[#14111F]/70 border border-white/5 rounded-3xl p-10 sm:p-14 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-violet-600/5 pointer-events-none" />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl mb-6 inline-block cursor-default"
              >
                🎁
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.cta.title}
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                {t.cta.description}
              </p>
              <a
                href={INVITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg group"
              >
                <span className="absolute inset-0 rounded-xl bg-violet-600 animate-ping opacity-10 pointer-events-none" />
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
                {t.cta.addBot}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
