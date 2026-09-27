'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { rulesData as rules } from '@/constants/data';

export default function CommunityPage() {
  const [discord, setDiscord] = useState({ loading: true });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/discord')
      .then((res) => {
        if (!res.ok) throw new Error('error with discord status');
        return res.json();
      })
      .then((body) => {
        setDiscord({
          ...body,
          loading: false,
        });
      })
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://discord.gg/btDtUeyWsV');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mt-4">
            COMMUNITY & RULES
          </h1>
          <p className="text-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto font-medium">
            Discord is how we stay connected, it's also essential for some features within the server. Feel free to join if you have any questions or just want to come hangout!
          </p>
        </div>

        {/* discord banner */}
        <div className="max-w-4xl mx-auto bg-surface border-2 border-border rounded-3xl p-6 sm:p-8 shadow-sm relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-surface-light border-2 border-border flex items-center justify-center overflow-hidden shadow-xs">
                {discord.icon ? (
                  <Image
                    width={80}
                    height={80}
                    src={discord.icon}
                    alt={discord.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-10 h-10 text-[#5865F2]"
                    viewBox="0 0 127.14 96.36"
                    fill="currentColor"
                  >
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                )}
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-surface flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  {discord.name || 'Mothfall'}
                </h2>
              </div>
              <p className="text-muted text-sm mt-1.5 leading-relaxed font-medium">
                {discord.description || 'Official community hub for Mothfall builders and players.'}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {discord.loading
                      ? 'Loading...'
                      : discord.onlineMembers !== null
                        ? `${discord.onlineMembers} Online`
                        : 'Server Online'}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-border text-muted text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-stone-400" />
                  <span>
                    {discord.loading
                      ? 'Loading...'
                      : discord.totalMembers !== null
                        ? `${discord.totalMembers} Members`
                        : 'Community'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full sm:w-auto pt-2">
              <a
                href="https://discord.gg/btDtUeyWsV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl px-5 py-2.5 font-bold text-sm transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
                <span>Join Discord</span>
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 bg-surface-light hover:bg-surface text-foreground border border-border rounded-xl px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer"
              >
                <span>{copied ? '✓ Copied!' : 'Copy Invite'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* community highlights */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="bg-surface rounded-2xl border-2 border-border p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-dashed border-sky-400 bg-surface-light/50 text-lg mb-3">
              📸
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">
              Build Showcase
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
              Share screenshots of your creations, get constructive feedback and collaborate on group builds.
            </p>
          </div>

          <div className="bg-surface rounded-2xl border-2 border-border p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-dashed border-amber-400 bg-surface-light/50 text-lg mb-3">
              📢
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">
              Announcements
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
              Stay updated with the latest projects, worlds, events, and maintenance news.
            </p>
          </div>

          <div className="bg-surface rounded-2xl border-2 border-border p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-dashed border-emerald-400 bg-surface-light/50 text-lg mb-3">
              🔗
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">
              Rank Sync
            </h3>
            <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
              Your Discord rank syncs to Minecraft automatically, more details
              <Link
                href="/ranks"
                className='pointer-events-click mx-1 font-semibold text-sky-600 dark:text-sky-400 text-nowrap hover:underline'
              >
                here.
              </Link>
            </p>
          </div>
        </div>

        {/* rules section */}
        <div className="max-w-4xl mx-auto mt-20 md:mt-24">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
              SERVER RULES
            </h2>
            <p className="text-muted text-base mt-2 max-w-xl font-medium">
              Simple guidelines to keep Mothfall welcoming for all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((rule) => (
              <div
                key={rule.num}
                className="rounded-2xl bg-surface border-2 border-border p-5 shadow-sm flex items-start gap-4 relative"
              >
                <span
                  className={`font-mono text-sm font-black ${rule.color} shrink-0 w-8 h-8 rounded-lg bg-surface-light border border-border flex items-center justify-center`}
                >
                  {rule.num}
                </span>

                <div>
                  <h3 className="font-bold text-foreground text-base mb-1">
                    {rule.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed font-medium">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            href="/ranks"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border-2 border-border text-muted text-xs sm:text-sm font-medium shadow-xs hover:text-foreground hover:scale-105 transition-all duration-300"
          >
            <span>Learn about Ranks & Permissions</span>
            <span>→</span>
          </Link>

          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-light border-2 border-border text-foreground text-xs sm:text-sm font-bold shadow-xs hover:border-border/80 hover:scale-105 transition-all duration-300"
          >
            <span>Play Now</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
