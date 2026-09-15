import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "Mothfall",
    template: "%s | Mothfall",
  },
  description:
    "Mothfall is a Minecraft server for builders. Explore unique worlds, collaborate on projects, and grow with a passionate community of builders.",
  keywords: [
    "Minecraft",
    "building server",
    "creative server",
    "Mothfall",
    "Minecraft builds",
    "creative community",
  ],
  openGraph: {
    title: "Mothfall",
    description:
      "A Minecraft creative building server where imagination takes flight.",
    type: "website",
    url: "https://mothfall.world",
  },
};

import { cookies } from "next/headers";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("mothfall_theme")?.value;
  const isDark = themeCookie === "dark";
  const isLight = themeCookie === "light";
  const themeClass = isDark ? "dark" : isLight ? "light" : "";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${themeClass} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-theme={themeCookie && themeCookie !== "system" ? themeCookie : undefined}
      style={isDark ? { colorScheme: "dark" } : isLight ? { colorScheme: "light" } : undefined}
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider initialTheme={themeCookie || "system"}>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
