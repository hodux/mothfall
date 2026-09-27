'use client';

import Link from 'next/link';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function InfoBox() {
  return (
    <section className="relative w-full pt-26 pb-8">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl bg-surface border-2 border-border p-8 md:p-12 shadow-md dark:shadow-none transition-colors overflow-hidden">
          <AirmailStripe />

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
            {/* left image */}
            <div className="shrink-0 w-full lg:w-75 h-52.5 bg-surface-light border-2 border-border rounded-2xl p-2 flex items-center justify-center shadow-md -rotate-1">
              <Image src="/screenshots/cove.webp" width={300} height={210} className="rounded-xl h-full w-full object-cover" alt="Cove build" />
            </div>

            {/* content area */}
            <div className="flex-1 flex flex-col items-start justify-center gap-4">

              <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight tracking-tight">
                WHAT'S MOTHFALL?
              </h2>

              <p className="text-muted leading-relaxed font-medium">
                For 7+ years, Mothfall has been the home of many amateur builders looking for a free space to collaborate and hangout.
                We've honed this environment over our many invite-only years, and in 2024, Mothfall opened its doors to the public.
              </p>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200 bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 rounded-xl px-5 py-2.5 uppercase tracking-wider transition-all mt-3 group shadow-sm"
              >
                Learn more on Discord <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* right image  */}
            <div className="shrink-0 w-full lg:w-35 h-35 bg-surface-light border-2 border-border rounded-2xl justify-center hidden lg:flex self-center overflow-hidden shadow-sm p-2">
              <Image src="/assets/logo_bg.webp" width={140} height={140} className="rounded-xl object-contain" alt="Mothfall Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
