'use client';

import { worldsData } from '@/constants/data';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';
import Link from 'next/link';

export default function WorldsSection() {
  const featuredWorld = worldsData.find((w) => w.featured) || null
  const gridWorlds = worldsData.filter((w) => !w.featured);

  return (
    <section id="worlds" className="relative md:py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-5xl font-black mt-4 text-foreground tracking-tight">
            YOUR CANVAS AWAITS
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto font-medium text-base sm:text-lg">
            Unique environments to build in and explore! You can find more info on each world
            <Link
              href="/world"
              className='pointer-events-click mx-1 font-semibold text-sky-600 dark:text-sky-400 text-nowrap hover:underline'
            >
              here!
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* main world */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-surface border-2 border-border p-6 md:p-8 rounded-3xl group shadow-md dark:shadow-none transition-all duration-300 relative overflow-hidden">
            <AirmailStripe />

            <div className="w-full md:w-3/5 relative z-10">
              <div className="rounded-2xl bg-surface-light border-2 border-border p-2 flex items-center justify-center overflow-hidden shadow-sm">
                <Image src={featuredWorld.image} width={800} height={450} className="rounded-xl h-full w-full object-cover transition-transform duration-300" alt={featuredWorld.name} />
              </div>
            </div>

            <div className="w-full md:w-2/5 flex flex-col justify-center relative z-10">
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-foreground mb-3 tracking-tight">{featuredWorld.name}</h3>
                <p className="text-muted leading-relaxed font-medium text-sm sm:text-base">
                  {featuredWorld.shortDescription || featuredWorld.description}
                </p>
              </div>
            </div>
          </div>

          {/* world grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gridWorlds.map((world) => (
              <div key={world.id} className="h-full">
                <div className="rounded-2xl p-5 border-2 border-border h-full shadow-sm group bg-surface relative overflow-hidden flex flex-col">
                  <div className="rounded-xl bg-surface-light border border-border mb-5 p-1.5 flex items-center justify-center overflow-hidden shadow-xs">
                    <Image src={world.image} width={600} height={338} className="rounded-lg h-full w-full object-cover transition-transform duration-300" alt={world.name} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-black text-foreground">{world.name}</h4>
                    {world.tagText ?
                      (<span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${world.tagColor}`} >
                        <span>{world.tagIcon}</span> {world.tagText}
                      </span>) : ('')
                    }
                  </div>
                  <p className="text-muted text-sm leading-relaxed font-medium">
                    {world.shortDescription || world.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
