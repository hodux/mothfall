'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildsData as builds } from '@/constants/data';
import Image from 'next/image';

const filters = ['All', 'New Mothfall', 'Samsara', 'Plots'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBuilds = builds.filter((build) => {
    if (activeFilter === 'All') return true;
    return build.world === activeFilter;
  });

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 bg-background transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-300 dark:border-amber-400/30 shadow-xs">
          <span>📸</span> ARCHIPELAGO PHOTO ALBUM
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight mt-4">
          BUILD SHOWCASE
        </h1>
        <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
          A collection of builds as postcards from our community of creators.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 tracking-wide rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeFilter === filter
                ? 'bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-400/30 shadow-xs'
                : 'bg-white dark:bg-surface text-stone-600 dark:text-muted border-stone-200 dark:border-border hover:text-stone-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-surface-light'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        <AnimatePresence>
          {filteredBuilds.map((build, index) => (
            <motion.div
              key={build.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border rounded-3xl p-3.5 pb-5 shadow-[0_15px_35px_-10px_rgba(40,30,20,0.08)] dark:shadow-none hover:border-sky-400 dark:hover:border-sky-500/50 transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] rounded-2xl bg-stone-50 dark:bg-surface-light border border-stone-200/80 dark:border-border flex items-center justify-center overflow-hidden p-1 shadow-xs">
                  <Image
                    src={build.screenshot}
                    alt={build.name}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"  
                  />
                </div>
                <div className="px-1 pt-3 flex items-center justify-between">
                  <h3 className="text-stone-900 dark:text-white font-black text-lg tracking-tight">{build.name}</h3>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-surface-light text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-border">
                    {build.world}
                  </span>
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-xs font-mono px-1 mt-1 font-medium">by {build.builder}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer */}
      <p className="text-center text-stone-500 dark:text-muted text-sm mt-16 font-medium">
        Want to see your build featured here? Share it on Discord!
      </p>
    </div>
  );
}
