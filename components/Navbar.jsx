'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 80);
      }
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <>
      <header
        className={`fixed z-50 top-5 py-1 transition-all duration-500 ease-out left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 rounded-xl bg-[#faf7f0]/85 dark:bg-[#101014]/80 backdrop-blur-md border border-stone-300/80 dark:border-white/25 shadow-md shadow-stone-900/5 dark:shadow-lg dark:shadow-black/20 text-stone-900 dark:text-white ${
          isScrolled
            ? 'lg:top-3 lg:max-w-4xl lg:w-full lg:py-0'
            : 'lg:top-6 lg:max-w-5xl lg:w-full lg:py-1'
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 px-6 h-14 w-full ${
          isScrolled ? 'lg:h-12' : 'lg:px-8'
        }`}>
          {/* Left */}
          <div className="flex items-center gap-2 sm:gap-6">
            <Link 
              href="/" 
              className="text-lg font-bold tracking-widest shrink-0 transition-all text-stone-900 dark:text-white hover:text-amber-800 dark:hover:text-amber-300"
            >
              <span className="font-black text-2xl tracking-tight lg:hidden">MOTHFALL</span>
              <span className="font-black text-2xl tracking-tight hidden lg:inline">{isScrolled ? 'MF' : 'MOTHFALL'}</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider mx-1 px-3 py-1.5 rounded-lg transition-colors border-2 whitespace-nowrap shrink-0 ${
                    isActive(link.href)
                      ? 'text-amber-900 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/30 font-bold'
                      : 'text-stone-600 dark:text-muted hover:text-stone-900 dark:hover:text-foreground hover:bg-stone-100/80 dark:hover:bg-white/5 border-stone-200/90 dark:border-white/25'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="https://discord.gg/btDtUeyWsV"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors text-xs font-medium px-3 py-1.5 rounded-lg border whitespace-nowrap shrink-0 text-stone-700 dark:text-muted hover:text-stone-900 dark:hover:text-foreground bg-white/70 hover:bg-white dark:bg-transparent border-stone-300 dark:border-gray-700 dark:hover:border-white/10 shadow-xs dark:shadow-none"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Discord
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 24 24" strokeWidth="1" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <Link
              href="/play"
              className="bg-gradient-to-r from-blue-600 via-[#1e90ff] to-sky-400 text-white hover:from-blue-500 hover:to-sky-300 transition-all font-bold tracking-widest uppercase shadow-md flex items-center justify-center px-4 py-1.5 rounded-lg text-xs whitespace-nowrap shrink-0"
            >
              Play Now
            </Link>
          </div>

          {/* Mobile Right: Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              className="p-2 flex flex-col space-y-1 text-stone-800 dark:text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transform transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t transition-all duration-300 overflow-hidden rounded-b-xl border-stone-200 dark:border-border bg-[#faf7f0]/95 dark:bg-[#101014]/80 backdrop-blur-md ${
            isMobileMenuOpen ? 'max-h-[550px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col px-3 pb-4 pt-3 gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl transition-all border-2 ${
                  isActive(link.href)
                    ? 'bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-400/30 font-bold shadow-xs dark:shadow-[0_0_15px_rgba(250,204,21,0.06)]'
                    : 'text-stone-600 dark:text-muted hover:text-stone-900 dark:hover:text-foreground hover:bg-stone-100/80 dark:hover:bg-white/5 border-stone-200/90 dark:border-white/25 font-semibold'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-sm tracking-wider uppercase">{link.name}</span>
                {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(250,204,21,0.2)]" />}
              </Link>
            ))}
            
            <div className="mt-2 pt-3 border-t border-stone-200 dark:border-white/5 flex flex-col gap-2 w-full">
              <Link
                href="/play"
                className="bg-gradient-to-r from-blue-600 via-[#1e90ff] to-sky-400 text-white hover:from-blue-500 hover:to-sky-300 transition-all font-bold tracking-widest uppercase shadow-md flex items-center justify-center w-full py-3.5 rounded-xl text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Play Now
              </Link>
              <a
                href="https://discord.gg/btDtUeyWsV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all shadow-xs bg-white dark:bg-[#101014]/80 backdrop-blur-md border border-stone-300 dark:border-white/10 text-stone-800 dark:text-foreground hover:bg-stone-50 dark:hover:bg-white/10"
                aria-label="Discord"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join Discord
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 24 24" strokeWidth="1" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
