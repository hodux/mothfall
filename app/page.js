import Hero from "@/components/home/Hero";
import Grid from "@/components/ui/Grid";
import InfoSection from "@/components/home/InfoSection";
import WorldSection from "@/components/home/WorldSection";
import RankSection from "@/components/home/RankSection";
import JoinSection from "@/components/home/JoinSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Grid gridSize={48}>
        <InfoSection />
        <WorldSection />
      </Grid>
      <RankSection />
      <JoinSection />
    </main>
  );
}
