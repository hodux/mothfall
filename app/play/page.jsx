'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AirmailStripe from '@/components/ui/AirmailStripe';
import { version } from '@/constants/data';

export default function PlayPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('loading');
  const [players, setPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);

  // server status check
  useEffect(() => {
    fetch("/api/mcstatus").then((res) => {
      if (!res.ok) throw new Error("error with mcstatus");
      return res.json();
    })
      .then((data) => {
        setStatus(data.status);
        setPlayers(data.players);
        setMaxPlayers(data.maxPlayers);
      })
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('play.mothfall.world');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-30 pb-20 px-4">
      <div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full flex flex-col items-center text-center max-w-4xl" >
        {/* header */}
        <h1 className="text-7xl font-black text-foreground tracking-tight mt-4">
          PLAY NOW
        </h1>

        <p className="text-muted text-lg mt-4 max-w-lg mx-auto font-medium">
          Join Mothfall and begin your next creation.
        </p>

        {/* play card */}
        <div className="relative bg-surface rounded-3xl border-2 border-border p-8 md:p-12 mt-10 mx-auto shadow-sm overflow-hidden">
          <AirmailStripe />

          <div className="flex items-center justify-between text-[8px] md:text-[12px] font-mono font-bold uppercase tracking-widest text-muted mb-4 pb-3 border-b border-dashed border-border">
            <span>DESTINATION: MOTHFALL</span>
            <span>PASS NO. 2026-MF</span>
          </div>

          <div className="font-mono text-2xl md:text-4xl font-black text-foreground tracking-tight">
            play.mothfall.world
          </div>

          <button
            onClick={handleCopy}
            className="bg-linear-to-r from-blue-600 to-sky-400 text-white rounded-full px-8 py-3.5 mt-6 font-bold tracking-wider uppercase hover:scale-105 transition-all inline-block shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            {copied ? '✓ Copied to Clipboard!' : 'Click to Copy'}
          </button>
        </div>

        <div className="flex items-center gap-2 text-muted text-sm mt-6 mb-2 font-medium">
          <Image src="/images/minecraft.webp" alt="Minecraft" width={24} height={24} className="w-6 h-6 object-contain" />
          <span>Java Edition • {version}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="font-semibold text-muted text-sm">Server Status:</span>
          {status !== 'loading' && (
            <div className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 font-bold ${status === 'online' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/20' :
              status === 'sleeping' ? 'bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400 border-sky-300 dark:border-sky-500/20' :
                'bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border-red-300 dark:border-red-500/20'
              }`}>
              {status === 'online' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
              {status === 'sleeping' && <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />}
              {status === 'offline' && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}

              {status === 'online' ? `Online ${players}/${maxPlayers}` :
                status === 'sleeping' ? 'Sleeping (Auto-wake)' :
                  'Offline'}
            </div>
          )}
          {status === 'loading' && (
            <div className="text-xs px-3 py-1 rounded-full border bg-surface-light text-muted border-border flex items-center gap-1.5 font-medium animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
              Checking status...
            </div>
          )}
        </div>

        {/* info card */}
        <div className="w-100 mt-4">
          <div className="bg-surface rounded-2xl p-5 border-2 border-border transition-all shadow-sm text-left">
            <h3 className="font-bold text-foreground mb-1.5 flex items-center gap-3 text-base">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl border-border border-2 text-sm">💤</span>
              Smart Hibernation
            </h3>
            <p className="text-sm text-muted font-medium leading-relaxed">
              You can still join when the server is sleeping. Just wait a few seconds for it to start up.
            </p>
          </div>
        </div>

        {/* link */}
        <Link
          href="/community"
          className="inline-flex items-center gap-2 px-5 py-2.5 mt-12 rounded-full bg-surface border-2 border-border text-muted text-sm font-medium shadow-xs hover:text-foreground hover:scale-105 transition-all duration-300"
        >
          Join our Discord Community →
        </Link>
      </div>
    </div>
  );
}
