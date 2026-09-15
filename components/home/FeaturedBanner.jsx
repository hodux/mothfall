'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function FeaturedBanner() {
  return (
    <section className="relative w-full pt-26 pb-16">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none overflow-hidden transition-colors duration-300"
        >
          <AirmailStripe />

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
            {/* Left Image Area */}
            <div className="flex-shrink-0 w-full lg:w-[300px] h-[210px] bg-stone-50 dark:bg-surface-light border-2 border-stone-200 dark:border-border rounded-2xl p-2 flex items-center justify-center overflow-hidden shadow-md -rotate-1 hover:rotate-0 transition-all duration-300">
              <Image src="/screenshots/cove.webp" width={300} height={210} className="rounded-xl h-full w-full object-cover" alt="Cove build" />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-start justify-center gap-4">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full px-3.5 py-1">
                <span>🌴</span> ISLAND BULLETIN
              </span>
              
              <h2 className="text-2xl md:text-3xl font-black text-stone-900 dark:text-white leading-tight tracking-tight">
                A WORLD BUILT BY YOU
              </h2>
              
              <p className="text-stone-600 dark:text-muted leading-relaxed font-medium">
                For 7+ years, builders of all skill levels have come together to craft extraordinary worlds. Mothfall has grown extensively during its invite-only period. Now, it&apos;s ready for public access!
              </p>
              
              <Link 
                href="/community" 
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200 bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 rounded-xl px-5 py-2.5 uppercase tracking-wider transition-all mt-3 group shadow-sm"
              >
                Learn more on Discord <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            {/* Right Image Area */}
            <div className="flex-shrink-0 w-full lg:w-[140px] h-[140px] bg-[#fbf8f2] dark:bg-surface-light border-2 border-stone-200/80 dark:border-border rounded-2xl justify-center hidden lg:flex self-center overflow-hidden shadow-sm p-3">
              <Image src="/assets/logo_bg.webp" width={140} height={140} className="rounded-xl object-contain" alt="Mothfall Logo" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
