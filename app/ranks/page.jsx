'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ranksData as ranks } from '@/constants/data';

export default function RanksPage() {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mt-4">
            RANKS & PERMISSIONS
          </h1>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            We use ranks to distribute permissions. These ranks only grant you building permissions, administrative powers are not given out. Their purpose is to keep the server grief-free and prevent anarchy.
          </p>
        </div>

        {/* callouts */}
        <div className="mb-14 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 rounded-2xl bg-surface border-2 border-border p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center border-2 border-dashed border-amber-500/50 bg-surface-light/50 shrink-0 text-lg">
              🍂
            </div>
            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                Strictly Non-profit
              </h2>
              <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
                Mothfall is completely non-commercial and free. Ranks cannot be purchased or obtained through donations.
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-2xl bg-surface border-2 border-border p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center border-2 border-dashed border-yellow-300 bg-surface-light/50 shrink-0 text-lg">
              ⚠️
            </div>
            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                Being Responsible
              </h2>
              <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
                We ask you be responsible and use your permissions appropriately. We reserve the right to revoke your rank at any time.
              </p>
            </div>
          </div>
        </div>

        {/* ranks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank) => {
            return (
              <div
                key={rank.name}
                className="rounded-2xl bg-surface border-2 border-border p-6 flex flex-col shadow-sm relative"
              >
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

                <p className="text-muted text-sm leading-relaxed font-medium mb-4">
                  {rank.description}
                </p>

                <div className="mt-auto pt-3 border-t border-border/60 space-y-2 text-xs">
                  <div>
                    <span className="text-foreground font-bold">Unlocks: </span>
                    <span className="text-muted font-medium">{rank.tools}</span>
                  </div>
                  <div>
                    <span className="text-foreground font-bold">Acquired: </span>
                    <span className="text-muted font-medium">{rank.acquisition}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* discord sync */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-surface border-2 border-border p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-dashed border-[#5865F2]/50 bg-surface-light/50 shrink-0 text-[#5865F2]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0777.0777 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-black text-foreground tracking-tight">
                  Discord Sync & Rank Requests
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
                  Ranks are given on Discord and sync automatically with the server. You must link your accounts for this to work, this doesn't require you divulge any sensitive information, the specifics are available on Discord. you can also request a rank or coordinate new builds with Project Leads on our Discord!
                </p>
                <div className="pt-2">
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-400 hover:underline"
                  >
                    Visit the Community page for Discord details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
