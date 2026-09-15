'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function JoinSection() {
  return (
    <section 
      id="join" 
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#faf7f0] via-[#fdfbf7] to-[#f4eee2] dark:from-[#08080a] dark:via-[#0c0c10] dark:to-[#101014] border-t border-stone-200/60 dark:border-border transition-colors duration-300"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Left Decorative */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex z-20"
          >
            <div className="w-[260px] h-[360px] rounded-2xl bg-white dark:bg-surface p-2.5 pb-5 border-2 border-stone-200/90 dark:border-border flex flex-col items-center justify-between -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(40,30,20,0.12)] dark:shadow-none">
              <div className="w-full h-[280px] rounded-xl overflow-hidden bg-stone-100 dark:bg-surface-light border border-stone-200/80 dark:border-border">
                <Image src="/screenshots/mansion.webp" width={280} height={280} className="w-full h-full object-cover" alt="The Estate snapshot" />
              </div>
              <div className="w-full pt-2.5 flex items-center justify-between px-1">
                <span className="font-mono text-[11px] font-bold text-stone-500 dark:text-stone-400 tracking-wider">THE ESTATE • SWEETWATER</span>
                <span className="text-stone-300 dark:text-stone-600 text-xs">📷</span>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center text-center max-w-2xl relative z-30"
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
              <span>📬</span> BOARDING PASS &amp; INVITATION
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-4 tracking-tight">
              START BUILDING TODAY
            </h2>
            
            <p className="text-stone-600 dark:text-muted max-w-lg mx-auto mb-10 text-base sm:text-lg leading-relaxed font-medium">
              Mothfall is a Minecraft creative building server where imagination takes flight. Jump in, explore our worlds, and start crafting something extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link 
                href="/play"
                className="bg-gradient-to-r from-blue-600 via-[#1e90ff] to-sky-400 text-white hover:from-blue-500 hover:to-sky-300 transition-all font-bold tracking-widest uppercase shadow-lg shadow-blue-500/20 flex items-center justify-center rounded-full px-10 py-4 text-base min-w-[200px] hover:scale-105"
              >
                Play Now
              </Link>

              <Link 
                href="/community" 
                className="bg-white dark:bg-surface border-2 border-stone-200 dark:border-border hover:border-stone-300 dark:hover:border-white/20 hover:bg-stone-50 dark:hover:bg-surface-light text-stone-800 dark:text-stone-200 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-xs flex items-center justify-center min-w-[200px] gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0777.0777 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join Discord
              </Link>
            </div>

            {/* Technical Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:mt-4">
              <div className="bg-white dark:bg-surface rounded-2xl p-5 border-2 border-stone-200/90 dark:border-border hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-sm text-left">
                <h3 className="font-bold text-stone-900 dark:text-white mb-1.5 flex items-center gap-3 text-base">
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl border-stone-200/90 border-2 dark:border-border text-sm">💤</span> 
                  Smart Hibernation
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-muted font-medium leading-relaxed">
                  Server starts automatically when you connect. Just wait a few seconds.
                </p>
              </div>
              <div className="bg-white dark:bg-surface rounded-2xl p-5 border-2 border-stone-200/90 dark:border-border hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-sm text-left">
                <h3 className="font-bold text-stone-900 dark:text-white mb-1.5 flex items-center gap-3 text-base">
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl border-stone-200/90 border-2 dark:border-border text-sm">🔗</span> 
                  Role Sync
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-muted font-medium leading-relaxed">
                  Your Discord roles sync to Minecraft automatically.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Decorative */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex z-20"
          >
            <div className="w-[260px] h-[360px] rounded-2xl bg-white dark:bg-surface p-2.5 pb-5 border-2 border-stone-200/90 dark:border-border flex flex-col items-center justify-between rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(40,30,20,0.12)] dark:shadow-none">
              <div className="w-full h-[280px] rounded-xl overflow-hidden bg-stone-100 dark:bg-surface-light border border-stone-200/80 dark:border-border">
                <Image src="/screenshots/icefalls.webp" width={280} height={280} className="w-full h-full object-cover" alt="Icefalls Vista snapshot" />
              </div>
              <div className="w-full pt-2.5 flex items-center justify-between px-1">
                <span className="font-mono text-[11px] font-bold text-stone-500 dark:text-stone-400 tracking-wider">ICEFALLS • KING HEAD</span>
                <span className="text-stone-300 dark:text-stone-600 text-xs">🏔️</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
