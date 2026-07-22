import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orderly is now Ordvark | Halnos",
  robots: { index: false },
};

// Static-export redirect stub: the product formerly at /orderly lives at
// /ordvark. next.config redirects don't run with `output: "export"`, so the
// old URL keeps working via an instant client-side redirect.
export default function OrderlyRedirect() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center px-6">
      <script
        dangerouslySetInnerHTML={{ __html: 'window.location.replace("/ordvark");' }}
      />
      <p className="text-[#b4b4cc] text-lg text-center">
        Orderly is now <Link href="/ordvark" className="text-[#F59E0B] hover:text-white transition-colors">Ordvark</Link>.
        Redirecting…
      </p>
    </main>
  );
}
