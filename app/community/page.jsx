'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function CommunityPage() {
  const [discord, setDiscord] = useState({
    loading: true,
    name: 'Mothfall',
    description: 'Building since 2017.',
    icon: null,
    onlineMembers: null,
    totalMembers: null,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/discord').then((res) => {
        if (!res.ok) throw new Error('Failed to load Discord stats');
        return res.json();
      }).then((data) => {
        setDiscord((prev) => ({
          ...prev,
          ...data,
          loading: false,
        }));
      }).catch(() => {
        setDiscord((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://discord.gg/btDtUeyWsV');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-24 bg-background transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center" >
          <span className="inline-flex items-center gap-1.5 bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-300 dark:border-amber-400/30 shadow-xs">
            <span>📬</span> ARCHIPELAGO UNION
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight mt-4">
            JOIN THE COMMUNITY
          </h1>
          <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            Join our community of passionate builders who collaborate and create together.
          </p>
        </div>

        {/* Discord Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto mt-12 shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none relative overflow-hidden"
        >
          <AirmailStripe/>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-stone-200/80 dark:border-border text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-stone-50 dark:bg-surface-light border-2 border-stone-200 dark:border-border flex items-center justify-center overflow-hidden shadow-sm">
                {discord.icon ? (
                  <Image
                    width={128}
                    height={128}
                    src={discord.icon}
                    alt={discord.name}
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
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-surface flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white tracking-tight">{discord.name}</h2>
                <span className="bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-400/30">
                  Official Discord
                </span>
              </div>
              <p className="text-stone-600 dark:text-muted text-sm mt-1.5 leading-relaxed font-medium">
                {discord.description} Showcase builds, apply for ranks, get help, or chat with builders.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {discord.loading ? (
                    <span className="animate-pulse">Checking online...</span>
                  ) : (
                    <span>{discord.onlineMembers !== null ? `${discord.onlineMembers} Online` : 'Server Online'}</span>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-surface-light border border-stone-300 dark:border-border text-stone-600 dark:text-muted text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-stone-400" />
                  {discord.loading ? (
                    <span className="animate-pulse">Checking members...</span>
                  ) : (
                    <span>{discord.totalMembers !== null ? `${discord.totalMembers} Members` : 'Community'}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Discord Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-left">
            <div className="bg-stone-50 dark:bg-surface-light/60 border-2 border-stone-200/80 dark:border-border rounded-2xl p-4 shadow-xs">
              <div className="text-xl mb-1">📸</div>
              <div className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wider">Build Showcase</div>
              <div className="text-stone-600 dark:text-muted text-xs mt-1 font-medium">Share screenshots and get feedback from creators.</div>
            </div>
            <div className="bg-stone-50 dark:bg-surface-light/60 border-2 border-stone-200/80 dark:border-border rounded-2xl p-4 shadow-xs">
              <div className="text-xl mb-1">🔗</div>
              <div className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wider">Role Syncing</div>
              <div className="text-stone-600 dark:text-muted text-xs mt-1 font-medium">Roles earned on Discord sync directly to in-game ranks.</div>
            </div>
            <div className="bg-stone-50 dark:bg-surface-light/60 border-2 border-stone-200/80 dark:border-border rounded-2xl p-4 shadow-xs">
              <div className="text-xl mb-1">📢</div>
              <div className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wider">Announcements</div>
              <div className="text-stone-600 dark:text-muted text-xs mt-1 font-medium">Get first word on build projects, warp updates, &amp; events.</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="https://discord.gg/btDtUeyWsV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-2xl px-6 py-3.5 font-bold transition-all shadow-lg hover:scale-[1.01]"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 127.14 96.36"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              <span>Join Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 dark:bg-surface-light hover:bg-stone-200 dark:hover:bg-white/10 text-stone-800 dark:text-foreground border-2 border-stone-200 dark:border-border rounded-2xl px-5 py-3.5 text-sm font-bold transition-colors cursor-pointer"
            >
              <span>{copied ? '✓ Invite Copied!' : 'Copy Invite Link'}</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Link */}
        <Link href="/play">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col w-[200px] mx-auto items-center justify-center px-5 py-3.5 rounded-2xl border-2 bg-white dark:bg-surface border-stone-200/90 dark:border-border shadow-xs text-stone-800 dark:text-stone-200 hover:text-sky-600 dark:hover:text-sky-400 mt-8 transition-colors font-bold uppercase tracking-wider text-xs gap-1.5"
          >
            Play Now &rarr;
          </motion.div>
        </Link>

      </div>
    </div>
  );
}
