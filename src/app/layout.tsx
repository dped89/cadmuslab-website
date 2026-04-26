import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadmus Lab — Learn AI. Build with AI. Launch with AI.",
  description:
    "Cadmus Lab helps beginners and career-changers understand AI, build real apps, and launch AI-powered businesses. Founded by Danny Pedraza.",
  keywords: [
    "AI education",
    "learn AI",
    "build AI apps",
    "AI for beginners",
    "Cadmus Lab",
    "Danny Pedraza",
    "vibe coding",
    "AI courses",
  ],
  openGraph: {
    title: "Cadmus Lab — Learn AI. Build with AI. Launch with AI.",
    description:
      "From zero to building real AI apps. Free video series, courses, and community.",
    url: "https://cadmuslab.ai",
    siteName: "Cadmus Lab",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
