'use client';

import { ranksData as ranks } from "@/constants/data";
import Link from 'next/link';
import Image from 'next/image';

export default function RankSection() {
  return (
    <section id="ranks" className="py-24 md:py-32 relative bg-surface-light/50 border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-5xl font-black text-foreground tracking-tight">
            GROW WITH THE COMMUNITY
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base sm:text-lg font-medium">
            Each rank unlocks more creative tools. There's no strict procedures, it's just about giving permissions to who needs them. Learn more about promotions and permissions{' '}
            <Link
              href="/ranks"
              className="pointer-events-click font-semibold text-sky-600 dark:text-sky-400 text-nowrap hover:underline"
            >
              here!
            </Link>
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank) => (
            <div
              key={rank.name}
              className="rounded-2xl bg-surface border-2 border-border p-6 flex flex-col shadow-sm relative"
            >
              {/* top row */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 border-dashed ${rank.border} bg-surface-light/50`}
                >
                  {rank.icon ? (
                    <Image
                      src={rank.icon}
                      alt={`${rank.name} rank icon`}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-zinc-400"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </div>
              </div>

              <h3 className="font-black text-xl text-foreground mb-2 tracking-tight">
                {rank.name}
              </h3>

              <p className="text-muted text-sm leading-relaxed font-medium">
                {rank.shortDescription}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
