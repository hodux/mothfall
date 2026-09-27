'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { worldsData } from '@/constants/data';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

function WorldCard({ world, idx }) {
  const cardRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        setAnimate(true);
      }
    }
  }, []);

  return (
    // animate on scroll cards outside the viewport
    <motion.section
      ref={cardRef}
      key={animate ? `${world.id}-animated` : `${world.id}-static`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
      initial={animate ? 'hidden' : "show"}
      whileInView={animate ? 'show' : "hiden"}
      viewport={{ once: true, amount: 0.15 }}
      className={`relative bg-surface rounded-3xl border-2 border-border p-6 sm:p-8 lg:p-10 flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-8 items-center shadow-sm group overflow-hidden`}
    >
      <AirmailStripe />

      <div className="aspect-video w-full lg:w-3/5 rounded-2xl bg-surface-light border-2 border-border p-2 flex items-center justify-center overflow-hidden shadow-sm">
        <Image
          src={world.image}
          width={800}
          height={450}
          className="rounded-xl h-full w-full object-cover transition-transform duration-500"
          alt={world.name}
        />
      </div>
      <div className="w-full lg:w-2/5">
        {world.tagText ?
          (<span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${world.tagColor}`} >
            <span>{world.tagIcon}</span> {world.tagText}
          </span>) : ('')
        }

        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
          {world.name}
        </h2>
        <p className="text-muted leading-relaxed font-medium">
          {world.description}
        </p>

        {world.tip ? (
          <span className="flex flex-col border-border border-2 mt-3.5 rounded-2xl bg-background px-3.5 py-1.5 font-semi-bold ">
            <span className="font-black gap-1.5 tracking-widest text-[#82A4B3] text-xs">
              ℹ️ INFO
            </span>
            {world.tip}
          </span>
        ) : (
          ''
        )}

        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 font-mono text-xs text-muted">
          <span>📍 WARP WITH:</span>
          <span className="px-2.5 py-0.5 rounded bg-surface-light font-bold text-foreground border border-border">
            {world.warp}
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export default function WorldPage() {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mt-4">
            EXPLORE THE WORLDS
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            Our canvases for your builds. You can display them anytime on the server with
            <span className='text-foreground border border-border bg-surface-light rounded ml-1.5 font-mono font-black text-sm text-nowrap'>/warps</span>
            , archived worlds won't show up and
            <span className='text-foreground border border-border bg-surface-light rounded mx-1.5 font-mono font-black text-sm text-nowrap'>/spawn</span>
            is reserved for the lobby.
          </p>
        </div>

        {/* world cards */}
        <div className="space-y-10">
          {worldsData.map((world, idx) => (
            <WorldCard key={world.id} world={world} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
