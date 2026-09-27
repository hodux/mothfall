'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { navLinks } from '@/constants/data';
import { version } from '@/constants/data';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-surface-light text-muted border-t-2 border-border relative overflow-hidden transition-colors duration-300">
      <AirmailStripe position="static" className="opacity-80 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* mothfall column */}
          <div>
            <Link href="/" className="font-black text-2xl tracking-tight text-foreground hover:text-amber-800 dark:hover:text-amber-300 transition-colors">
              MOTHFALL
            </Link>
            <p className="text-muted text-sm mt-2 font-medium">our canvas • your creativity</p>

            {/* theme select */}
            <div className="mt-3 -translate-x-1">
              <div
                role="group"
                aria-label="Theme preference"
                className="inline-flex items-center p-1 rounded-full border border-border bg-surface shadow-xs font-mono text-[11px]"
              >

                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  aria-label="Match system theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${mounted && theme === 'system'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-muted hover:text-foreground hover:bg-background '
                    }`}
                >
                  <svg className="w-3 h-3 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  aria-label="Dark theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${mounted && theme === 'dark'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-muted hover:text-foreground hover:bg-background '
                    }`}
                >
                  <svg className="w-3 h-3 text-amber-600 dark:text-amber-300 fill-current" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  aria-label="Light theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${mounted && theme === 'light'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-muted hover:text-foreground hover:bg-background'
                    }`}
                >
                  <svg className="w-3 h-3 text-amber-600 dark:text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </button>

              </div>
            </div>
            {/* github */}
            <a
              href="https://github.com/hodux/mothfall"
              className="inline-flex items-center -translate-x-1 mt-3 py-1.5 px-6 sm:py-1 gap-1.5 rounded-full border border-border bg-surface shadow-xs font-semibold tracking-wider text-[11px] transition-colors duration-300 hover:border-amber-400 dark:hover:border-amber-400/60 hover:bg-surface-light "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              Github
            </a>
          </div>

          {/* navigate column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              NAVIGATE
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted hover:text-foreground transition-colors text-sm font-medium block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* server column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              SERVER
            </h3>
            <div className="text-foreground font-bold text-base">Mothfall</div>
            <div className='flex gap-1.5'>
              <Image src="/images/minecraft.webp" alt="Minecraft" width={20} height={20} className="w-5 h-5 object-contain" />
              <div className="text-muted text-sm font-medium">Java Edition • {version}</div>
            </div>
            <Link
              href="/play"
              className="rounded-full bg-surface text-foreground px-3.5 py-1.5 text-xs font-mono mt-3 inline-flex items-center gap-1.5 border border-border shadow-xs hover:border-amber-400 dark:hover:border-amber-400/60 hover:bg-surface-light transition-colors font-semibold"
            >
              <span>✈️</span> play.mothfall.world
            </Link>
          </div>

          {/* contact column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              CONTACT
            </h3>
            <div className="text-foreground font-bold text-base">Get in Touch</div>
            <div className="text-muted text-sm font-medium">Inquiries & Support</div>
            <div className="flex flex-col items-start w-3/4">
              <a
                href="mailto:contact@mothfall.world"
                className="rounded-full bg-surface text-foreground px-3.5 py-1.5 text-xs font-mono mt-3 inline-flex items-center gap-1.5 border border-border shadow-xs hover:border-amber-400 dark:hover:border-amber-400/60 hover:bg-surface-light transition-colors font-semibold"
              >
                <span>✉️</span> contact@mothfall.world
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-xs font-medium">
          <p>Made and hosted in Canada 🇨🇦</p>
          <p className="text-muted text-xs font-medium">© 2026 Mothfall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
