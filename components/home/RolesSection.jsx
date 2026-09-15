'use client';
import { rolesData as roles } from "@/constants/data";
import { motion } from "framer-motion";

export default function RolesSection() {
  return (
    <section id="ranks" className="py-24 md:py-32 relative bg-[#f4eee2]/50 dark:bg-surface-light/30 border-y border-stone-200/60 dark:border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <span>🏷️</span> PASSPORT VISAS & RANKS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            GROW WITH THE COMMUNITY
          </h2>
          <p className="text-stone-600 dark:text-muted mt-4 max-w-xl text-base sm:text-lg font-medium">
            Start as a Visitor and earn your way up. Each role unlocks more creative power and is granted on request or automatically.
          </p>
        </div>

        {/* Progression Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-4"
        >
          {roles.map((role, index) => (
            <div key={role.name} className="flex-1 flex flex-col relative w-full max-w-md lg:max-w-none">
              {/* Card styled as a stamped passport visa */}
              <div className={`h-full rounded-2xl bg-white dark:bg-surface border-2 border-stone-200/90 dark:border-border p-6 flex flex-col transition-all duration-300 ${role.hover} hover:-translate-y-1 shadow-sm hover:shadow-lg relative z-10 group`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors border ${role.iconBg}`}>
                  {role.icon}
                </div>
                <h3 className="font-black text-xl text-stone-900 dark:text-white mb-2 tracking-tight">{role.name}</h3>
                <p className="text-stone-600 dark:text-muted text-sm flex-grow mb-6 leading-relaxed font-medium">
                  {role.shortDescription}
                </p>
                <div className="mt-auto">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${role.tagColor}`}>
                    {role.tag}
                  </span>
                </div>
              </div>

              {/* Connecting Line (Desktop) */}
              {index < roles.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-stone-300 dark:border-stone-700 z-0 transform -translate-y-1/2" />
              )}
              {/* Connecting Arrow (Desktop) */}
              {index < roles.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center justify-center z-20 transform -translate-y-1/2 text-stone-400 dark:text-stone-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
              
              {/* Connecting Line (Mobile) */}
              {index < roles.length - 1 && (
                <div className="flex lg:hidden h-6 w-full justify-center items-center text-stone-400 dark:text-stone-500">
                  <svg className="w-6 mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Discord Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-surface border border-stone-200/90 dark:border-border text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium shadow-xs">
            <svg className="w-4 h-4 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
            <span>Roles sync automatically between Discord and Minecraft.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
