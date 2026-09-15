'use client';

import { motion } from 'framer-motion';
import { worldsData } from '@/constants/data';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function WorldsSection() {
  const featuredWorld = worldsData.find((w) => w.featured) || worldsData[0];
  const gridWorlds = worldsData.filter((w) => !w.featured);

  return (
    <section id="worlds" className="relative md:py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-sky-300 dark:border-sky-500/30 shadow-xs">
            <span>✈️</span> ISLAND GETAWAYS
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-stone-900 dark:text-white tracking-tight">
            YOUR CANVAS AWAITS
          </h2>
          <p className="text-stone-600 dark:text-muted mt-4 max-w-lg mx-auto font-medium text-base sm:text-lg">
            Four incredible worlds to explore and build in, each with their own unique characteristics.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured World */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border p-6 md:p-8 rounded-3xl group hover:border-sky-400 dark:hover:border-sky-500/50 shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none transition-all duration-300 relative overflow-hidden">
            <AirmailStripe />

            <div className="w-full md:w-3/5 relative z-10">
              <div className="aspect-video rounded-2xl bg-stone-50 dark:bg-surface-light border-2 border-stone-200 dark:border-border p-2 flex items-center justify-center overflow-hidden shadow-sm -rotate-0.5 group-hover:rotate-0 transition-transform duration-300">
                <Image src={featuredWorld.image} width={800} height={450} className="rounded-xl h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" alt={featuredWorld.name} />
              </div>
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col justify-center relative z-10">
              <div>
                <span className="inline-flex items-center gap-1 bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-300 dark:border-amber-400/30 mb-4">
                  <span>{featuredWorld.tagIcon || '★'}</span> FEATURED DESTINATION
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-stone-900 dark:text-white mb-3 tracking-tight">{featuredWorld.name}</h3>
                <p className="text-stone-600 dark:text-muted leading-relaxed font-medium text-sm sm:text-base">
                  {featuredWorld.shortDescription || featuredWorld.description}
                </p>
              </div>
            </div>
          </div>

          {/* Postcards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gridWorlds.map((world) => (
              <div key={world.id} className="h-full">
                <div className="rounded-2xl p-5 border-2 border-stone-200/90 dark:border-border h-full hover:border-sky-400 dark:hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl group bg-white dark:bg-surface relative overflow-hidden flex flex-col">
                  <div className="aspect-video rounded-xl bg-stone-50 dark:bg-surface-light border border-stone-200 dark:border-border mb-5 p-1.5 flex items-center justify-center overflow-hidden shadow-xs">
                    <Image src={world.image} width={600} height={338} className="rounded-lg h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" alt={world.name} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-black text-stone-900 dark:text-white">{world.name}</h4>
                    {world.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-400/30">
                        {world.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600 dark:text-muted text-sm leading-relaxed font-medium">
                    {world.shortDescription || world.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
