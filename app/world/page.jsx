'use client';

import { motion } from 'framer-motion';
import { worldsData } from '@/constants/data';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function WorldPage() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-sky-300 dark:border-sky-500/30 shadow-xs">
            <span>✈️</span> ARCHIPELAGO FIELD GUIDE
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight mt-4">
            EXPLORE OUR DESTINATIONS
          </h1>
          <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            Four unique worlds, each with its own character. Switch between them anytime with /warp.
          </p>
        </div>

        {/* Worlds List */}
        <div className="space-y-10">
          {worldsData.map((world, idx) => (
            <motion.section 
              key={world.id}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={`relative bg-white dark:bg-surface rounded-3xl border-2 border-stone-200/90 dark:border-border p-6 sm:p-8 md:p-10 flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 items-center shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none group hover:border-sky-400 dark:hover:border-sky-500/50 transition-[border-color,box-shadow] duration-300 overflow-hidden`}
            >
              <AirmailStripe />

              <div className="aspect-video w-full md:w-3/5 rounded-2xl bg-stone-50 dark:bg-surface-light border-2 border-stone-200 dark:border-border p-2 flex items-center justify-center overflow-hidden shadow-sm">
                <Image 
                  src={world.image} 
                  width={800}
                  height={450}
                  className="rounded-xl h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={world.name} 
                />
              </div>
              <div className="w-full md:w-2/5">
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${world.tagColor}`}>
                  <span>{world.tagIcon}</span> {world.tagText}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 dark:text-white mb-3 tracking-tight">
                  {world.name}
                </h2>
                <p className="text-stone-600 dark:text-muted leading-relaxed font-medium">
                  {world.description}
                </p>
                <div className="mt-5 pt-4 border-t border-stone-200/80 dark:border-border flex items-center gap-2 font-mono text-xs text-stone-500 dark:text-stone-400">
                  <span>📍 DESTINATION WARP:</span>
                  <span className="px-2.5 py-0.5 rounded bg-stone-100 dark:bg-surface-light font-bold text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-border">
                    {world.warp}
                  </span>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
