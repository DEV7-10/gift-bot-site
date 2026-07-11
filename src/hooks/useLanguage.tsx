"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { en, type Translation } from "@/i18n/en";
import { ar } from "@/i18n/ar";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: en,
  setLang: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", newLang);
  }, []);

  const t = lang === "ar" ? ar : en;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
