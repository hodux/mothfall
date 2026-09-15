import { NextResponse } from 'next/server';

export const revalidate = 60;

const DEFAULTS = {
  name: 'Mothfall',
  description: 'Building since 2017.',
  icon: null,
  totalMembers: null,
  onlineMembers: null,
  instantInvite: 'https://discord.gg/btDtUeyWsV'
}

export async function GET() {
  try {
    const res = await fetch('https://discord.com/api/v9/invites/btDtUeyWsV?with_counts=true', {
      // nextjs cache lifetime of 60 seconds to prevent rate-limits
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Discord API error: ${res.status}`);
    }

    const data = await res.json();
    const guild = data.guild || {};

    return NextResponse.json({
      ...DEFAULTS,
      name: guild.name || DEFAULTS.name,
      description: guild.description || DEFAULTS.description,
      icon: guild.icon
        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128`
        : DEFAULTS.icon,
      totalMembers: data.approximate_member_count ?? DEFAULTS.totalMembers,
      onlineMembers: data.approximate_presence_count ?? DEFAULTS.onlineMembers
    });
  } catch { return NextResponse.json(DEFAULTS); }
}
