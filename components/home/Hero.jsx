'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('play.mothfall.world');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[#faf7f0] dark:bg-[#08080a] transition-colors duration-300">
      {/* Contrast */}
      {/* <div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/35 pointer-events-none" /> */}

      {/* Top Gradient */}
      <div className="absolute top-0 inset-x-0 h-48 sm:h-64 z-10 bg-gradient-to-b from-[#faf7f0] via-[#faf7f0]/10 to-transparent dark:from-[#08080a] dark:via-[#08080a]/70 dark:to-transparent pointer-events-none transition-colors duration-300" />

      {/* Bottom Gradient*/}
      <div className="absolute bottom-0 inset-x-0 h-48 sm:h-64 z-10 bg-gradient-to-t from-[#faf7f0] via-[#faf7f0]/20 to-transparent dark:from-[#08080a] dark:via-[#08080a]/80 dark:to-transparent pointer-events-none transition-colors duration-300" />
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/videos/hero-video.webm"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        />
      </div>

      <motion.div 
        className="relative z-20 flex flex-col items-center text-center px-6 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20 max-w-4xl w-full mx-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Postcards */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* BACK POSTCARD */}
          <div className="absolute -inset-3 sm:-inset-5 rotate-3 rounded-3xl bg-[#f3ede1] dark:bg-[#121217] border border-stone-300/90 dark:border-white/10 shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-colors duration-300">
            <AirmailStripe className="opacity-50 dark:opacity-30" />
            <AirmailStripe position="bottom" reversed className="opacity-50 dark:opacity-30" />

            <div className="absolute top-4 left-6 opacity-40 dark:opacity-35 font-mono text-[9px] uppercase tracking-widest text-stone-700 dark:text-stone-300 font-bold">
              CARTE POSTALE • POST CARD
            </div>

            {/* Stamp + Address Lines */}
            <div className="absolute top-5 right-6 flex flex-col items-end gap-2 opacity-60 dark:opacity-50">
              <div className="rotate-6 rounded border-2 border-dashed border-emerald-600/70 dark:border-emerald-500/50 bg-emerald-50/80 dark:bg-emerald-950/40 px-2 py-1 flex flex-col items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l8 8m-8-8l-8 8" />
                </svg>
                <span className="font-mono text-[6px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">MOTHFALL 10¢</span>
              </div>
              
              <div className="flex flex-col gap-1.5 w-28 pr-1 mt-1">
                <div className="h-[1.5px] bg-stone-400/60 dark:bg-stone-700/60 w-full rounded" />
                <div className="h-[1.5px] bg-stone-400/60 dark:bg-stone-700/60 w-4/5 ml-auto rounded" />
                <div className="h-[1.5px] bg-stone-400/60 dark:bg-stone-700/60 w-full rounded" />
              </div>
            </div>

          </div>
          
          {/* FRONT POSTCARD */}
          <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-b from-[#ffffff] via-[#fbf9f4] to-[#f6efe1] dark:from-[#141419] dark:via-[#101014] dark:to-[#0a0a0d] border-2 border-stone-200/90 dark:border-white/15 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.85)] dark:shadow-[0_35px_90px_-15px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300">
            <AirmailStripe wide className="h-2.5 opacity-80 dark:opacity-60" />
            <AirmailStripe position="bottom" wide reversed className="h-2.5 opacity-80 dark:opacity-60" />

            {/* Top Left */}
            <div className="absolute top-4 left-6 sm:left-9 flex items-start gap-2.5 select-none z-10">
              <span className="text-xl sm:text-2xl drop-shadow-sm">✈️</span>
              <div className="flex flex-col text-left">
                <span className="font-serif italic text-xs sm:text-base tracking-wide text-stone-700 dark:text-stone-200 font-semibold leading-tight">
                  Greetings from
                </span>
                <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-sky-600 dark:text-sky-400 font-bold -mt-0.5">
                  Asplen Beach • Elite Resort
                </span>
                {/* Return Address */}
                <div className="hidden sm:flex flex-col text-left font-mono text-[7.5px] sm:text-[8px] text-stone-500 dark:text-stone-400 uppercase tracking-wider leading-tight mt-1.5 border-l-2 border-stone-300 dark:border-stone-700 pl-2 opacity-75 dark:opacity-85">
                  <span className="text-[6.5px] font-bold text-stone-400 dark:text-stone-500">RETURN:</span>
                  <span className="font-semibold text-stone-700 dark:text-stone-200">Asplen Tourism Bureau</span>
                  <span className="text-stone-500 dark:text-stone-400">No. 4 Ocean Promenade • Coastal Sector</span>
                </div>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-4 right-5 sm:top-5 sm:right-8 flex items-center select-none z-10">
              <div className="-rotate-2 flex items-center -mr-9 z-10 opacity-70 dark:opacity-60 pointer-events-none">
                <div className="w-12 h-12 rounded-full border border-dashed border-stone-600 dark:border-stone-400 flex flex-col items-center justify-center p-0.5 text-center bg-transparent shrink-0">
                  <span className="text-[6.5px] font-mono font-bold tracking-wider text-stone-700 dark:text-stone-300 uppercase leading-none">AIR MAIL</span>
                  <span className="text-[6px] font-mono text-stone-500 dark:text-stone-400 leading-none mt-0.5">SINO HUB</span>
                  <span className="text-[6px] font-mono text-amber-700 dark:text-amber-400 font-bold leading-none mt-0.5">★ 2026 ★</span>
                </div>
                <svg width="45" height="28" viewBox="0 0 45 28" fill="none" stroke="currentColor" strokeWidth="1.1" className="text-stone-700/80 dark:text-stone-300/80 -ml-1">
                  <path d="M0 5 Q 4.5 1, 9 5 T 18 5 T 27 5 T 36 5 T 45 5 T 54 5" />
                  <path d="M0 14 Q 4.5 10, 9 14 T 18 14 T 27 14 T 36 14 T 45 14 T 54 14" />
                  <path d="M0 23 Q 4.5 19, 9 23 T 18 23 T 27 23 T 36 23 T 45 23 T 54 23" />
                </svg>
              </div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded -rotate-3 border-2 border-dashed border-amber-600/80 dark:border-amber-400/50 bg-gradient-to-br from-amber-50/95 via-sky-50/70 to-blue-50/90 dark:from-stone-900 dark:via-stone-900/95 dark:to-black p-1 flex flex-col items-center justify-between shadow-md">
                <div className="w-full h-full border border-amber-500/35 dark:border-amber-400/30 rounded-sm flex flex-col items-center justify-between p-1 bg-white/60 dark:bg-stone-900/80">
                  <span className="font-mono text-[7px] sm:text-[7.5px] font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    MOTHFALL
                  </span>
                  <span className="text-sm">
                    🍂
                  </span>
                  <span className="font-serif text-[9px] sm:text-[10px] font-black text-stone-800 dark:text-stone-100 leading-none">
                    25¢
                  </span>
                </div>
              </div>
            </div>

            {/* Postcard Footer */}
            <div className="absolute bottom-3 left-6 sm:left-9 opacity-65 dark:opacity-75 font-mono text-[9px] tracking-widest text-stone-800 dark:text-stone-300 select-none hidden sm:flex items-center gap-1.5 z-10 font-bold">
              <span>POST CARD</span>
              <span>•</span>
              <span>EST. 2026</span>
              <span>•</span>
              <span className="text-amber-700 dark:text-amber-400">LAT 21° 18′ N • LON 157° 49′ W</span>
            </div>

            <div className="absolute bottom-3 right-6 sm:right-9 opacity-75 dark:opacity-85 font-mono text-[10px] tracking-widest text-stone-900 dark:text-stone-200 select-none flex items-center gap-1 z-10 font-bold">
              <span>WISH YOU WERE HERE</span>
              <span>☀️</span>
            </div>
          </div>
        </div>

        <Image 
          src="/assets/banner.webp" 
          alt="Mothfall"
          width={2400}
          height={1018}
          priority
          className="w-full max-w-[560px] h-auto drop-shadow-xl animate-float mb-2 sm:mb-3"
        />
      
        {/* Postcard Content */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <Link 
              href="/play"
              className="bg-gradient-to-r from-blue-600 via-[#1e90ff] to-sky-400 text-white hover:from-blue-500 hover:to-sky-300 transition-all font-bold tracking-widest uppercase shadow-[0_0_16px_rgba(30,144,255,0.22)] shadow-xl flex items-center justify-center rounded-2xl px-8 py-3.5 sm:px-12 2xs:text-base hover:scale-105 text-sm gap-3 border border-sky-300/40"
            >
              Play Now
            </Link>
            
            <Link 
              href="/community" 
              className="gap-1.5 items-center justify-center flex text-stone-900 dark:text-white bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-800 border-2 border-stone-300 dark:border-white/15 hover:border-stone-400 dark:hover:border-white/25 rounded-2xl px-4 py-3.5 sm:px-8 sm:text-base transition-all duration-300 hover:scale-105 shadow-md font-bold tracking-wider text-sm backdrop-blur-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0777.0777 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <span className="uppercase">
                Join Discord
              </span>
            </Link>
          </div>

          <button
            onClick={handleCopy}
            type="button"
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-800 border border-stone-300/90 dark:border-white/15 shadow-sm cursor-pointer transition-all hover:scale-105 text-xs sm:text-sm font-mono text-stone-800 dark:text-stone-200 backdrop-blur-sm"
            title="Click to copy server IP address"
          >
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Destination:
            </span>
            <span className="font-bold text-sky-600 dark:text-sky-400 tracking-wider">
              play.mothfall.world
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-500/40">
              {copied ? '✓ Copied IP!' : 'Click to Copy'}
            </span>
          </button>
        </div>
      </motion.div>

    </section>
  );
}
