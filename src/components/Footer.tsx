"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { basePath } from "@/lib/config";

const INVITE_LINK =
  "https://discord.com/oauth2/authorize?client_id=1525403769276465152&permissions=8&integration_type=0&scope=bot";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-violet-700/30">
            <img src={`${basePath}/avatar.png`} alt="Gift Bot" className="w-full h-full object-cover" />
          </div>
          <span className="text-gray-400 text-sm">
            © 2025 Gift Bot. {t.footer.rights}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={INVITE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-violet-400 transition-colors text-sm"
          >
            {t.footer.addBot}
          </a>
          <a href="#commands" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
            {t.footer.commands}
          </a>
          <a href="#features" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
            {t.footer.features}
          </a>
        </div>
      </div>
    </footer>
  );
}
