import Hero from "@/components/home/Hero";
import FeaturedBanner from "@/components/home/FeaturedBanner";
import WorldsSection from "@/components/home/WorldsSection";
import RolesSection from "@/components/home/RolesSection";
import JoinSection from "@/components/home/JoinSection";
import Grid from "@/components/home/Grid";

export default function Home() {
  return (
    <main className="bg-[#faf7f0] dark:bg-[#08080a] text-stone-900 dark:text-[#ededf0] overflow-x-hidden min-h-screen transition-colors duration-300">
      <Hero />
      <Grid>
        <FeaturedBanner />
        <WorldsSection />
      </Grid>
      <RolesSection />
      <JoinSection />
    </main>
  );
}
