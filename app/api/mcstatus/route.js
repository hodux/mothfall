import { NextResponse } from "next/server";

export const revalidate = 30;

const DEFAULTS = {
    status: 'offline',
    players: 0,
    maxPlayers: 0
}

export async function GET() {
  try {
    const res = await fetch('https://api.mcstatus.io/v2/status/java/play.mothfall.world', {
      // nextjs cache lifetime of 30 seconds to prevent rate-limits
      next: { revalidate: 30 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`MCS API error: ${res.status}`);
    }

    const data = await res.json();
    // check motd for sleeping, not sure how else to check
    const motdClean = data.motd?.clean?.toLowerCase() ?? '';
    const isSleeping = motdClean.includes('sleeping');
    const statusString = isSleeping ? "sleeping" : data.online ? "online" : "offline";
        
    return NextResponse.json({
        status: statusString,
        players: data.players?.online ?? 0,
        maxPlayers: data.players?.max ?? 0
    });
  } catch { return NextResponse.json(DEFAULTS); }
}
