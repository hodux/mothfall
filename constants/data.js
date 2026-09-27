export const navLinks = [
  { name: 'World', href: '/world' },
  { name: 'Ranks', href: '/ranks' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Tools', href: '/tools' },
  { name: 'Community', href: '/community' },
];

export const version = "1.9/26.3"

export const worldsData = [
  {
    id: 'new_mothfall',
    name: 'New Mothfall',
    image: '/screenshots/new_mothfall.webp',
    tagIcon: '',
    tagText: '',
    tagColor: 'bg-amber-100 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-400/30',
    description: 'The main building world. Features custom terrain generation using Terralith. Explore the world and find your own little cove to build in.',
    tip: "Use /sethome to save your spot, otherwise you might forget where it was when you disconnect!",
    shortDescription: "Custom terrain generation using Terralith for breathtaking natural landscapes, rolling hills, deep caves, and sprawling forests.",
    warp: '/warp new_mothfall',
    featured: true,
  },
  {
    id: 'samsara',
    name: 'Samsara',
    image: '/screenshots/samsara.webp',
    tagIcon: '🌎',
    tagText: 'THE LOBBY',
    tagColor: 'bg-violet-100 dark:bg-violet-500/10 text-violet-800 dark:text-violet-300 border-violet-300 dark:border-violet-500/30',
    description: "The bridge between our worlds, this is our hub for meeting new people and socializing. It's the first thing you see when you join.",
    tip: "Starting a new build here is more restricted, but you can try asking.",
    shortDescription: 'Our hub world, built in the void. A creative showcase and your gateway to everything Mothfall has to offer.',
    warp: '/spawn',
    featured: false,
  },
  {
    id: 'plots',
    name: 'Plots',
    image: '/screenshots/plots.webp',
    tagIcon: '',
    tagText: '',
    tagColor: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30',
    description: 'A no-restrictions free space for everyone, just claim a plot and start creating. Merge plots if you need more space or add your friends as collaborators. Perfect for testing ideas.',
    shortDescription: 'Infinite plots for builders who prefer a blank canvas. Claim your space and start building, no permissions needed.',
    warp: '/warp plots',
    featured: false,
  },
  {
    id: 'archive',
    name: 'Mothfall',
    image: '/screenshots/old_mothfall2.webp',
    tagIcon: '🔒',
    tagText: 'ARCHIVED',
    tagColor: 'bg-stone-200 dark:bg-stone-700/40 text-stone-800 dark:text-stone-300 border-stone-300 dark:border-stone-600',
    description: "The original world from 2017, preserved as a living museum. There's a couple secret entrances hidden around the server, we'd be impressed if you manage to find one!",
    shortDescription: "The original world from 2017, archived in 2022 in favor of New Mothfall.",
    warp: '???',
    featured: false,
  }
];

export const ranksData = [
  {
    name: "Visitor",
    iconBg: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30 shadow-[0_0_10px_rgba(161,161,170,0.16)]",
    border: 'border-zinc-400',
    description: 'Explore the server, discover hidden secrets, and build on plots. For players just passing through or coming to hangout.',
    shortDescription: "Freely explore all of Mothfall's worlds, find secrets and build on the Plots world.",
    icon: "",
    acquisition: 'Default on first join',
    tools: 'Plot claiming, exploration, basic commands',
  },
  {
    name: "Builder",
    iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(30,144,255,0.18)]",
    border: 'border-blue-400',
    description: "Collaborate on projects or start your own with approval from a Project Lead. You can now go into creative and have access to a restricted version of WorldEdit.",
    shortDescription: "Start or collaborate on projects with other builders, basic permissions needed to get started",
    icon: "/images/30698991048ced77e60c4e8284007d3782f2e6a3_96.webp",
    acquisition: 'On demand or playtime',
    tools: 'Creative mode, basic WorldEdit access, additional commands',
  },
  {
    name: "Builder+",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(250,204,21,0.16)]",
    border: 'border-amber-400',
    description: "Builder isn't enough? Builder+ unlocks complete access to both Axiom and WorldEdit.",
    shortDescription: 'Unlock Axiom and the full power of WorldEdit.',
    icon: "/images/dd175669d5ac228dc00453d13528ad26c1f056ac.png",
    acquisition: 'On demand, and if you need it',
    tools: 'Full WorldEdit access & Axiom',
  },
  {
    name: "Project Lead",
    iconBg: "bg-violet-500/20 text-violet-400 border-violet-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    border: 'border-violet-400',
    description: "Manage projects by handling specific regions and claims using WorldGuard. They also guide the creative direction of major builds they've taken under their wing.",
    shortDescription: 'Manage projects by handling specific regions and claims using WorldGuard.',
    icon: "/images/e1281ffadc4e194780bd31eb89ae6ea2537ec41b_96.webp",
    acquisition: 'Stewardship role usually granted by staff',
    tools: 'WorldGuard region claims & flags',
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
    description: "An essential tool for building massive structures in seconds. Use commands to generate spheres, cylinders, copy and paste areas, and terraform your surroundings quickly.",
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
    description: "A powerful plugin used to define regions and set specific rules or flags to prevent griefing.",
    modrinthUrl: "https://modrinth.com/plugin/worldguard",
    imageIcon: "/images/e1281ffadc4e194780bd31eb89ae6ea2537ec41b_96.webp",
    screenshot: "/screenshots/worldguard.webp"
  }
];

export const rulesData = [
  {
    num: '01',
    color: 'text-amber-600 dark:text-amber-400',
    title: 'No Discrimination',
    description: 'Zero tolerance for hate speech, racism, sexism, harassment, or discrimination of any kind.',
  },
  {
    num: '02',
    color: 'text-blue-600 dark:text-blue-400',
    title: 'Be Respectful',
    description: 'Treat all builders and community members with kindness and courtesy.',
  },
  {
    num: '03',
    color: 'text-emerald-600 dark:text-emerald-400',
    title: 'No Griefing or Stealing',
    description: "Respect other players' claims. Don't try to tamper with builds that aren't your own or disrupt other players.",
  },
  {
    num: '04',
    color: 'text-violet-600 dark:text-violet-400',
    title: 'No Exploits or Hacked Clients',
    description: "Using hacked clients or exploits (such as NBT hacks or packet exploits) to gain an unfair advantage or slow down the server isn't tolerated. Use common sense.",
  },
];

