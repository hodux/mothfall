'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toolsData as tools } from '@/constants/data';

export default function ToolsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="bg-background pt-32 pb-16 md:pt-40 md:pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-sky-300 dark:border-sky-500/30 bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>📐</span> ARCHITECT TOOLKIT &amp; MANUAL
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight mt-4">
            BUILDING TOOLS
          </h1>
          <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            Discover the powerful tools our builders use to shape the worlds of Mothfall.
          </p>
        </div>

        {/* Tools List */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {tools.map((tool, idx) => (
            <motion.div 
              key={tool.name}
              variants={item}
              className="flex flex-col bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none hover:border-sky-400 dark:hover:border-sky-500/50 transition-[border-color,box-shadow] duration-300 group"
            >
              <div className="w-full aspect-video bg-stone-100 dark:bg-surface-light border-b-2 border-stone-200/80 dark:border-border overflow-hidden p-1">
                <Image 
                  src={tool.screenshot} 
                  alt={`${tool.name} screenshot`}
                  width={800}
                  height={450}
                  className="w-full h-full block object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Image src={tool.imageIcon} alt={`${tool.name} icon`} width={40} height={40} className="w-10 h-10 object-contain rounded-xl border border-stone-200 dark:border-border p-1 bg-stone-50 dark:bg-surface-light shrink-0 shadow-xs" />
                  <div>
                    <h2 className="text-2xl font-black text-stone-900 dark:text-white tracking-tight">
                      {tool.name}
                      {tool.footnoteMarker && <span className="text-xs ml-1 text-stone-400 font-mono">{tool.footnoteMarker}</span>}
                    </h2>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className={`inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${tool.tagColor}`}>
                    {tool.tag}
                  </span>
                  {tool.requiredRank && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${tool.rankColor}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                      </svg>
                      {tool.requiredRank}
                    </span>
                  )}
                </div>
                
                <p className="text-stone-600 dark:text-muted leading-relaxed text-sm sm:text-base mb-8 flex-1 font-medium">
                  {tool.description}
                </p>

                <div>
                  <a 
                    href={tool.modrinthUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stone-50 dark:bg-surface-light hover:bg-stone-100 dark:hover:bg-white/10 border-2 border-stone-200 dark:border-border text-stone-800 dark:text-white px-6 py-3 rounded-2xl font-bold hover:scale-[1.02] transition-all w-full justify-center shadow-xs text-sm uppercase tracking-wider"
                  >
                    View on Modrinth
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnotes */}
        <div className="mt-12 bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border rounded-2xl p-6 text-center text-stone-600 dark:text-muted text-xs sm:text-sm shadow-xs font-medium space-y-2">
          <div>
            <span className="text-stone-900 dark:text-white font-bold mr-1">*1:</span> 
            You need Axiom installed on your client and be whitelisted to use it. You can request a whitelist on their
            <a href="https://discord.gg/axiomtool" className="mx-1 font-bold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-0.5">
              Discord
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div>
            <span className="text-stone-900 dark:text-white font-bold mr-1">*2:</span> 
            Screenshot is with WorldEdit CUI, an optional client-side mod to display WorldEdit selections.
          </div>
        </div>

      </div>
    </div>
  );
}
