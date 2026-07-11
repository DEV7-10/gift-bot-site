"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";

const INVITE_LINK =
  "https://discord.com/oauth2/authorize?client_id=1525403769276465152&permissions=8&integration_type=0&scope=bot";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Banner as subtle background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.12] blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B14]/60 via-[#0D0B14]/80 to-[#0D0B14]" />
      </div>

      {/* Decorative radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {t.hero.badge}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              {t.hero.title1}
              <br />
              <span className="text-violet-400">{t.hero.title2}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={INVITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
              >
                <span className="absolute inset-0 rounded-xl bg-violet-600 animate-ping opacity-20" />
                <svg className="w-5 h-5 relative" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
                <span className="relative">{t.hero.addBot}</span>
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 text-gray-400 hover:text-white font-medium px-5 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all text-base"
              >
                {t.hero.learnMore}
                <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Avatar visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-violet-600/20 rounded-3xl blur-[60px] scale-110" />

              {/* Avatar */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-violet-600/30 shadow-2xl shadow-violet-600/20"
              >
                <img
                  src="/avatar.png"
                  alt="Gift Bot"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-5 -right-5 w-16 h-16 bg-violet-600/10 border border-violet-600/20 rounded-2xl flex items-center justify-center text-3xl cursor-default hover:scale-110 transition-transform"
              >
                🎁
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 -left-5 w-14 h-14 bg-violet-600/10 border border-violet-600/20 rounded-2xl flex items-center justify-center text-2xl cursor-default hover:scale-110 transition-transform"
              >
                🎰
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -top-2 -left-8 w-12 h-12 bg-violet-600/10 border border-violet-600/20 rounded-xl flex items-center justify-center text-xl cursor-default hover:scale-110 transition-transform"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
