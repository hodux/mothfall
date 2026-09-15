export const navLinks = [
  { name: 'World', href: '/world' },
  { name: 'Ranks', href: '/ranks' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Tools', href: '/tools' },
  { name: 'Community', href: '/community' },
];

export const worldsData = [
  {
    id: 'new_mothfall',
    name: 'New Mothfall',
    image: '/screenshots/new_mothfall.webp',
    tagIcon: '★',
    tagText: 'FEATURED EXPEDITION • MAINLAND',
    tagColor: 'bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-400/30',
    description: 'Our main building world features custom terrain generation using Terralith, creating incredible, vast terrain to host your builds. This is where most of the creative work happens, and where the community brings its most ambitious projects to life.',
    shortDescription: "Custom terrain generation using Terralith creates breathtaking natural landscapes, rolling hills, deep caves, and sprawling forests. The center for most of Mothfall's creations.",
    warp: '/warp new_mothfall',
    featured: true,
    badge: null
  },
  {
    id: 'samsara',
    name: 'Samsara',
    image: '/screenshots/samsara.webp',
    tagIcon: '🌌',
    tagText: 'LOBBY SANCTUARY • VOID REALM',
    tagColor: 'bg-violet-100 dark:bg-violet-500/10 text-violet-800 dark:text-violet-300 border-violet-300 dark:border-violet-500/30',
    description: "The bridge between our worlds, this is our hub for meeting new people and socializing. It's the first thing you see when you join, and it sets the tone for the experience ahead.",
    shortDescription: 'Our hub world, built in the void. A creative showcase and your gateway to everything Mothfall has to offer.',
    warp: '/spawn',
    featured: false,
    badge: null
  },
  {
    id: 'plots',
    name: 'Plots',
    image: '/screenshots/plots.webp',
    tagIcon: '🏗️',
    tagText: 'CREATIVE PLOTS • FREE BUILD',
    tagColor: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30',
    description: 'A no-restrictions collaborative free space for everyone, just claim a plot and start creating. Perfect for testing ideas, showcasing your work, or building alongside friends.',
    shortDescription: 'Infinite grief-free plots for solo builds or collaborations. Claim your space and start creating, no permissions needed.',
    warp: '/warp plots',
    featured: false,
    badge: null
  },
  {
    id: 'archive',
    name: 'Mothfall',
    image: '/screenshots/old_mothfall2.webp',
    tagIcon: '🔒',
    tagText: 'LIVING MUSEUM • ARCHIVE',
    tagColor: 'bg-stone-200 dark:bg-stone-700/40 text-stone-800 dark:text-stone-300 border-stone-300 dark:border-stone-600',
    description: "The original world from 2017, preserved as a living museum. You can't build here anymore, but the history of the server lives in every block. If you find the secret entrance, it's worth exploring.",
    shortDescription: "The original world from 2017, built using vanilla terrain generation. Closed in 2022 in favor of New Mothfall.",
    warp: '???',
    featured: false,
    badge: '🔒 Archive'
  }
];

export const rolesData = [
  {
    name: "Visitor",
    tag: "Starting Role",
    tagColor: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
    iconBg: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30 shadow-[0_0_10px_rgba(161,161,170,0.16)]",
    hover: 'hover:border-zinc-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    description: "As a Visitor, you can freely explore all of Mothfall's worlds, discover hidden secrets scattered throughout, and build on the Plots world. You can request a promotion or continue playing to rank up.",
    shortDescription: 'Explore the server, discover hidden secrets, and build on the Plots world. Serves as a starter rank to keep the community grief-free.',
    permissions: [
      "Explore all worlds",
      "Build on Plots",
      "Find hidden secrets",
      "Access basic commands"
    ]
  },
  {
    name: "Builder",
    tag: "Playtime Earned",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(30,144,255,0.18)]",
    hover: 'hover:border-blue-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description: "Once you've spent some time on the server, you'll be promoted to Builder. This opens up collaboration on projects (with approval from a Project Lead), and you can start your own projects too.",
    shortDescription: 'Collaborate on projects or start your own. Access basic commands and a restricted version of WorldEdit.',
    permissions: [
      "Collaborate on projects",
      "Start own projects",
      "Basic WorldEdit access",
      "Additional commands"
    ]
  },
  {
    name: "Builder+",
    tag: "Trust Earned",
    tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(250,204,21,0.16)]",
    hover: 'hover:border-amber-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    description: "Usually granted on a need-to basis, Builder+ unlocks the full creative toolkit with complete access to both Axiom and WorldEdit, giving you all the creative power you'll ever need.",
    shortDescription: 'Unlock the full power of Axiom and WorldEdit. For builders who\'ve proven their craft.',
    permissions: [
      "Full Axiom access",
      "Full WorldEdit access",
      "Advanced building tools",
      "Extended creative freedom"
    ]
  },
  {
    name: "Project Lead",
    tag: "Leadership",
    tagColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    iconBg: "bg-violet-500/20 text-violet-400 border-violet-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    hover: 'hover:border-violet-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Project Leads are the backbone of Mothfall's organized building. They manage projects by handling specific regions and claims using WorldGuard, coordinate builders, and guide the creative direction of major builds.",
    shortDescription: 'Manage projects by handling specific regions and claims. These are the anchors of Mothfall.',
    permissions: [
      "WorldGuard region management",
      "Project coordination",
      "Builder approval",
      "Creative direction"
    ]
  },
];

export const buildsData = [
  { id: 1, name: 'Sino District', builder: 'hodux', world: 'Samsara', screenshot: "/screenshots/sino_district.webp" },
  { id: 2, name: 'Samsara District', builder: 'hodux, cat and chef', world: 'Samsara', screenshot: "/screenshots/samsara_district.webp" },
  { id: 3, name: 'New Mothfall Metro', builder: 'hodux', world: 'New Mothfall', screenshot: "/screenshots/metro.webp" },
  { id: 4, name: 'Asplen Castle', builder: 'cat and hodux', world: 'New Mothfall', screenshot: "/screenshots/castle.webp" },
];


export const toolsData = [
  {
    name: "Axiom",
    tag: "Client-side Mod",
    footnoteMarker: "*1",
    tagColor: "bg-zinc-500/20 text-black dark:text-zinc-300 border-zinc-500/30",
    requiredRank: "Builder+",
    rankColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description: "Axiom is a next-generation Minecraft map-making tool. It brings professional 3D software capabilities directly into the game, featuring an interactive editor and a suite of powerful real-time building tools.",
    modrinthUrl: "https://modrinth.com/mod/axiom",
    imageIcon: "/images/dd175669d5ac228dc00453d13528ad26c1f056ac.png",
    screenshot: "/screenshots/2c7897b2a9a230168357b1783288481e3c3748ec.webp"
  },
  {
    name: "WorldEdit",
    tag: "Server Plugin",
    footnoteMarker: "*2",
    tagColor: "bg-zinc-500/20 text-black dark:text-zinc-300 border-zinc-500/30",
    requiredRank: "Builder",
    rankColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    description: "An essential in-game map editor that allows you to build massive structures in seconds. Use commands to generate spheres, cylinders, copy and paste areas, and terraform your surroundings quickly.",
    modrinthUrl: "https://modrinth.com/plugin/worldedit",
    imageIcon: "/images/30698991048ced77e60c4e8284007d3782f2e6a3_96.webp",
    screenshot: "/screenshots/57137d425d2572405b6475ad246ecfe210db7cb6.webp"
  },
  {
    name: "WorldGuard",
    tag: "Server Plugin",
    tagColor: "bg-zinc-500/20 text-black dark:text-zinc-300 border-zinc-500/30",
    requiredRank: "Project Lead",
    rankColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    description: "A powerful plugin used alongside WorldEdit to define regions and set specific rules or flags. It allows Project Leads to protect areas, manage claims, and govern how players interact with the environment.",
    modrinthUrl: "https://modrinth.com/plugin/worldguard",
    imageIcon: "/images/e1281ffadc4e194780bd31eb89ae6ea2537ec41b_96.webp",
    screenshot: "/screenshots/worldguard.webp"
  }
];