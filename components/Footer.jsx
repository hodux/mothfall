'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/data';
import AirmailStripe from '@/components/ui/AirmailStripe';
import { useTheme } from '@/components/ThemeProvider';

export default function Footer() {
  const { themeMode, setTheme, mounted } = useTheme();

  return (
    <footer className="bg-[#f4eee2] dark:bg-[#0c0c10] text-stone-700 dark:text-stone-300 border-t-2 border-stone-300 dark:border-border relative overflow-hidden transition-colors duration-300">
      <AirmailStripe position="static" className="opacity-80 dark:opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left column */}
          <div>
            <Link href="/" className="font-black text-2xl tracking-tight text-stone-900 dark:text-white hover:text-amber-800 dark:hover:text-amber-300 transition-colors">
              MOTHFALL
            </Link>
            <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 font-medium">our canvas • your creativity</p>
            <div className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-3 px-2 py-0.5 rounded bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700">
              <span>✉️</span> DISPATCH DIVISION
            </div>

            <div className="mt-4">
              <div
                role="group"
                aria-label="Theme preference"
                className="inline-flex items-center p-0.5 rounded-full border border-stone-300/80 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-xs font-mono text-[11px]"
              >

                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  aria-label="Match system theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    mounted && themeMode === 'system'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                  }`}
                >
                  <svg className="w-3 h-3 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Auto</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  aria-label="Dark theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    mounted && themeMode === 'dark'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                  }`}
                >
                  <svg className="w-3 h-3 text-amber-600 dark:text-amber-300 fill-current" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span>Dark</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  aria-label="Light theme"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    mounted && themeMode === 'light'
                      ? 'bg-amber-100 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300 shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                  }`}
                >
                  <svg className="w-3 h-3 text-amber-600 dark:text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span>Light</span>
                </button>

              </div>
            </div>


            <p className="font-mono text-[11px] text-stone-400 mt-4 dark:text-stone-400">ARCHIPELAGO POST • EST. 2026</p>
          </div>

          {/* Navigate column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              NAVIGATE
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Server Dispatch column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              SERVER DISPATCH
            </h3>
            <div className="text-stone-900 dark:text-white font-bold text-base">Mothfall</div>
            <div className='flex gap-1.5'>
              <Image src="/images/minecraft.webp" alt="Minecraft" width={20} height={20} className="w-5 h-5 object-contain"/>
              <div className="text-stone-600 dark:text-stone-400 text-sm font-medium">Java Edition • 1.9/26.2</div>
            </div>
            <Link
              href="/play"
              className="rounded-full bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-200 px-3.5 py-1.5 text-xs font-mono mt-3 inline-flex items-center gap-1.5 border border-stone-300 dark:border-stone-700 shadow-xs hover:border-amber-400 dark:hover:border-amber-400/60 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors font-semibold"
            >
              <span>✈️</span> play.mothfall.world
            </Link>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              CONTACT
            </h3>
            <div className="text-stone-900 dark:text-white font-bold text-base">Get in Touch</div>
            <div className="text-stone-600 dark:text-stone-400 text-sm font-medium">Inquiries &amp; Support</div>
            <a
              href="mailto:contact@mothfall.world"
              className="rounded-full bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-200 px-3.5 py-1.5 text-xs font-mono mt-3 inline-flex items-center gap-1.5 border border-stone-300 dark:border-stone-700 shadow-xs hover:border-amber-400 dark:hover:border-amber-400/60 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors font-semibold"
            >
              <span>✉️</span> contact@mothfall.world
            </a>
          </div>
        </div>

        <div className="border-t border-stone-300/80 dark:border-stone-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 dark:text-stone-400 text-xs font-medium">
          <p>Made and hosted with care in Canada 🇨🇦</p>
          <p className="text-stone-500 dark:text-stone-400 text-xs font-medium">© 2026 Mothfall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
