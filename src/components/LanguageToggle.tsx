"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/5">
      {(["en", "ar"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
            lang === l ? "text-violet-400" : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {lang === l && (
            <motion.div
              layoutId="lang-indicator"
              className="absolute inset-0 bg-violet-500/15 border border-violet-500/25 rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{l === "en" ? "EN" : "عربي"}</span>
        </button>
      ))}
    </div>
  );
}
