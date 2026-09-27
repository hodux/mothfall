'use client';

import { useState } from 'react';
import Link from 'next/link';
import { buildsData as builds } from '@/constants/data';
import Image from 'next/image';

const filters = ['All', 'New Mothfall', 'Samsara', 'Plots'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // filter by world
  const filteredBuilds = builds.filter((build) => {
    if (activeFilter === 'All') return true;
    return build.world === activeFilter;
  });

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6">
      {/* header */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mt-4">
          BUILD SHOWCASE
        </h1>
        <p className="text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
          A collection of hand-picked builds from our Discord.
        </p>
      </div>

      {/* filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 tracking-wide rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${activeFilter === filter
                ? 'bg-amber-100 dark:bg-amber-400/10 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-400/30 shadow-xs'
                : 'bg-surface text-muted border-border hover:text-foreground hover:bg-surface-light'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" >
        {filteredBuilds.map((build) => (
          <div key={build.id} className="group" >
            <div className="bg-surface border-2 border-border rounded-3xl p-3.5 pb-5 shadow-sm hover:border-sky-400 dark:hover:border-sky-500/50 transition-all duration-300 flex flex-col h-full">
              <div className="aspect-4/3 rounded-2xl bg-surface-light border border-border flex items-center justify-center overflow-hidden p-1 shadow-xs">
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
                <h3 className="text-foreground font-black text-lg tracking-tight">{build.name}</h3>
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-surface-light text-foreground border border-border">
                  {build.world}
                </span>
              </div>
              <p className="text-muted text-xs font-mono px-1 mt-1 font-medium">by {build.builder}</p>
            </div>
          </div>
        ))}
      </div>

      {/* info */}
      <p className="text-center text-muted text-sm mt-16 font-medium">
        Want to see your build featured here? Share it on
        <Link
          href="/community"
          className='pointer-events-click mx-1 font-semibold text-sky-600 dark:text-sky-400 text-nowrap hover:underline'
        >
          Discord!
        </Link>
      </p>
    </div>
  );
}
