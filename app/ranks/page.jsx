'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { rolesData as roles } from '@/constants/data';

export default function RanksPage() {
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
    <div className="min-h-screen bg-background pt-32 pb-16 md:pt-40 md:pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-300 dark:border-amber-400/30 bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>🏷️</span> PASSPORT VISAS &amp; ADVANCEMENT
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight mt-4">
            RANKS &amp; PROGRESSION
          </h1>
          <p className="text-stone-600 dark:text-muted text-lg mt-4 max-w-2xl mx-auto font-medium">
            Start as a Visitor and earn your way up. Each role unlocks new creative tools, permissions, and abilities.
          </p>
        </div>

        {/* Roles List */}
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {roles.map((role, idx) => (
            <motion.div 
              key={role.name}
              variants={item}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border rounded-3xl p-6 sm:p-8 items-start lg:items-center shadow-[0_20px_50px_-15px_rgba(40,30,20,0.08)] dark:shadow-none ${role.hover} transition-[border-color,box-shadow] duration-300`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 ${role.iconBg} shadow-xs`}>
                    {role.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white tracking-tight flex items-center gap-3">
                      {role.name}
                    </h2>
                  </div>
                </div>

                <span className={`inline-block px-3 py-1 my-2 rounded-full border text-xs font-bold uppercase tracking-wider ${role.tagColor}`}>
                  {role.tag}
                </span>
                
                <p className="text-stone-600 dark:text-muted leading-relaxed text-base sm:text-lg font-medium">
                  {role.description}
                </p>
              </div>

              <div className="w-full lg:w-2/5 bg-stone-50 dark:bg-surface-light rounded-2xl p-6 border-2 border-stone-200/80 dark:border-border shadow-xs">
                <h3 className="text-xs font-bold text-stone-800 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-1.5">
                  <span>📋</span> AUTHORIZED PERMISSIONS
                </h3>
                <ul className="space-y-2.5">
                  {role.permissions.map((perm, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 dark:text-muted text-sm font-medium">
                      <svg className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {perm}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Notes */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl font-black text-stone-900 dark:text-white tracking-tight">How to get promoted?</h3>
            <p className="text-stone-600 dark:text-muted text-base font-medium">
              Roles are earned through trust. You can request for a rank promotion, or one will be accorded to you automatically as your playtime increases.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
