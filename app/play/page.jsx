'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';

export default function PlayPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('loading');
  const [players, setPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);

  // server status check
  useEffect(() => {
    fetch("/api/mcstatus").then((res) => {
      if (!res.ok) throw new Error("Failed to load server status")
      return res.json();
    }).then((data) => {
      setStatus(data.status)
      setPlayers(data.players)
      setMaxPlayers(data.maxPlayers)
    }).catch(() => {
      setStatus('offline')
    })
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('play.mothfall.world');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-16 px-4 bg-background transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center text-center max-w-4xl"
      >

        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest shadow-xs mb-4">
          <span>✈️</span> BOARDING PASS
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-stone-900 dark:text-white tracking-tight">
          PLAY NOW
        </h1>
        
        <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-lg mx-auto font-medium">
          Join Mothfall and start building something extraordinary.
        </p>

        {/* Boarding Pass */}
        <div className="relative bg-white dark:bg-surface rounded-3xl border-2 border-stone-200/90 dark:border-border p-8 md:p-12 mt-10 mx-auto shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none overflow-hidden">
          <AirmailStripe />

          <div className="flex items-center justify-between text-[8px] md:text-[12px] font-mono font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 pb-3 border-b border-dashed border-stone-200 dark:border-border">
            <span>DESTINATION: ARCHIPELAGO</span>
            <span>PASS NO. 2026-MF</span>
          </div>
          
          <div className="font-mono text-2xl md:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
            play.mothfall.world
          </div>
          
          <button
            onClick={handleCopy}
            className="bg-gradient-to-r from-blue-600 via-[#1e90ff] to-sky-400 text-white rounded-full px-8 py-3.5 mt-6 font-bold tracking-wider uppercase hover:scale-105 transition-all inline-block shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            {copied ? '✓ Copied to Clipboard!' : 'Click to Copy'}
          </button>
        </div>

        <div className="flex items-center gap-2 text-stone-600 dark:text-muted text-sm mt-6 mb-2 font-medium">
          <Image src="/images/minecraft.webp" alt="Minecraft" width={24} height={24} className="w-6 h-6 object-contain"/>
          <span>Java Edition • 1.9/26.2</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="font-semibold text-stone-600 dark:text-muted text-xs sm:text-sm">Server Status:</span>
          {status !== 'loading' && (
            <div className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 font-bold ${
              status === 'online' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/20' :
              status === 'sleeping' ? 'bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400 border-sky-300 dark:border-sky-500/20' :
              'bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border-red-300 dark:border-red-500/20'
            }`}>
              {status === 'online' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>}
              {status === 'sleeping' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>}
              {status === 'offline' && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
              
              {status === 'online' ? `Online ${players}/${maxPlayers}` :
               status === 'sleeping' ? 'Sleeping (Auto-wake)' :
               'Offline'}
            </div>
          )}
          {status === 'loading' && (
            <div className="text-xs px-3 py-1 rounded-full border bg-stone-100 dark:bg-stone-800 text-stone-500 border-stone-300 dark:border-stone-700 flex items-center gap-1.5 font-medium animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              Checking status...
            </div>
          )}
        </div>


        {/* Technical Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mt-4">
          <div className="bg-white dark:bg-surface rounded-2xl p-5 border-2 border-stone-200/90 dark:border-border hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-sm text-left">
            <h3 className="font-bold text-stone-900 dark:text-white mb-1.5 flex items-center gap-3 text-base">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl border-stone-200/90 border-2 dark:border-border text-sm">💤</span> 
              Smart Hibernation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-muted font-medium leading-relaxed">
              Server starts automatically when you connect. Just wait a few seconds.
            </p>
          </div>
          <div className="bg-white dark:bg-surface rounded-2xl p-5 border-2 border-stone-200/90 dark:border-border hover:border-amber-400 dark:hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-sm text-left">
            <h3 className="font-bold text-stone-900 dark:text-white mb-1.5 flex items-center gap-3 text-base">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl border-stone-200/90 border-2 dark:border-border text-sm">🔗</span> 
              Role Sync
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-muted font-medium leading-relaxed">
              Your Discord roles sync to Minecraft automatically.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Link 
          href="/community" 
          className="px-5 py-3.5 rounded-2xl border-2 bg-white dark:bg-surface border-stone-200/90 dark:border-border shadow-xs text-stone-800 dark:text-stone-200 hover:text-sky-600 dark:hover:text-sky-400 mt-8 transition-colors font-bold uppercase tracking-wider text-xs flex items-center gap-1.5"
        >
          Join our Discord Community &rarr;
        </Link>
      </motion.div>
    </div>
  );
}
