import { Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
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
    default: "Home | Mothfall",
    template: "%s | Mothfall",
  },
  description:
    "Mothfall is a Minecraft server for builders. Explore unique worlds, collaborate on projects, get feedback and hangout with the community.",
  keywords: [
    "Minecraft",
    "building server",
    "creative server",
    "Mothfall",
    "Minecraft builds",
  ],
  openGraph: {
    title: "Mothfall",
    description:
      "Minecraft building server and social hangout.",
    type: "website",
    url: "https://mothfall.world",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
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
