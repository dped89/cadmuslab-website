import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Halnos — Learn AI. Build with AI. Launch with AI.",
  description:
    "Halnos helps beginners and career-changers understand AI, build real apps, and launch AI-powered businesses. Founded by Danny Pedraza.",
  keywords: [
    "AI education",
    "learn AI",
    "build AI apps",
    "AI for beginners",
    "Halnos",
    "Danny Pedraza",
    "vibe coding",
    "AI courses",
  ],
  openGraph: {
    title: "Halnos — Learn AI. Build with AI. Launch with AI.",
    description:
      "From zero to building real AI apps. Free video series, courses, and community.",
    url: "https://halnos.ai",
    siteName: "Halnos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
