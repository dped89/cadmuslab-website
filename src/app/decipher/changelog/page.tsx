import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";

export const metadata: Metadata = {
  title: "Decipher Changelog — What's New | Cadmus Lab",
  description:
    "Every Decipher release, in reverse chronological order. New features, bug fixes, and what's coming next.",
};

interface Release {
  version: string;
  rawDate: string;
  formattedDate: string;
  bodyHtml: string;
}

function loadReleases(): Release[] {
  const dir = path.join(process.cwd(), "src/content/release-notes");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const releases: Release[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const version = file.replace(/^v/, "").replace(/\.md$/, "");

    const dateMatch = raw.match(/\*Released:\s*(\d{4}-\d{2}-\d{2})\*/);
    const rawDate = dateMatch ? dateMatch[1] : "";
    const formattedDate = rawDate
      ? new Date(rawDate + "T12:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    // Strip H1 and the "Released:" line — rendered separately in the header band
    let body = raw
      .replace(/^#\s+[^\n]+\n+/, "")
      .replace(/\*Released:[^\n]+\*\n+/, "")
      .replace(/^---\s*\n/, "");

    // Cut everything from the "## Google Play Store" internal section onward
    const cutAt = body.indexOf("## Google Play Store");
    if (cutAt > 0) {
      body = body.substring(0, cutAt).replace(/---\s*$/, "").trim();
    }

    const bodyHtml = marked.parse(body, { async: false }) as string;
    return { version, rawDate, formattedDate, bodyHtml };
  });

  releases.sort((a, b) => b.rawDate.localeCompare(a.rawDate));
  return releases;
}

export default function ChangelogPage() {
  const releases = loadReleases();
  const latest = releases[0];

  return (
    <main className="min-h-screen bg-[#1A1A2E] text-[#E8E8F0]">
      {/* Nav (matches /decipher) */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo-transparent.png" alt="Cadmus Lab" width={48} height={48} />
            <span className="text-black font-light tracking-[0.3em] text-sm uppercase">
              Cadmus Lab
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link href="/decipher" className="hover:text-black transition-colors">
              ← Back to Decipher
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.decipher.reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0891b2] hover:text-[#0e7490] transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Title band */}
      <section className="pt-40 pb-16 px-6 bg-[#1A1A2E]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Changelog
          </p>
          <h1 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
            What&apos;s new in Decipher.
          </h1>
          <p className="text-[#8888AA] text-lg leading-relaxed max-w-2xl">
            Every release, in reverse chronological order. New features, bug
            fixes, and what&apos;s coming next.
            {latest && (
              <>
                {" "}Latest:{" "}
                <span className="text-white font-medium">v{latest.version}</span>{" "}
                <span className="text-[#8888AA]">— {latest.formattedDate}</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Releases */}
      <section className="py-16 md:py-20 px-6 bg-white text-slate-900">
        <div className="max-w-3xl mx-auto">
          {releases.length === 0 ? (
            <p className="text-slate-500">No release notes yet. Check back soon.</p>
          ) : (
            <div className="space-y-20">
              {releases.map((release) => (
                <article key={release.version} className="changelog-entry">
                  <header className="mb-8 pb-6 border-b border-slate-200">
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
                        v{release.version}
                      </h2>
                      <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">
                        {release.formattedDate}
                      </p>
                    </div>
                  </header>

                  <div
                    className="changelog-content"
                    dangerouslySetInnerHTML={{ __html: release.bodyHtml }}
                  />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 md:py-24 px-6 bg-[#1A1A2E]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Stay in the Loop
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Get update notes in your inbox.
          </h2>
          <p className="text-[#8888AA] text-lg mb-10">
            Subscribe to the Cadmus Lab newsletter and never miss a Decipher
            release. No spam, just what shipped and what&apos;s next.
          </p>
          <a
            href="https://dannypedraza.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#00D4FF] text-[#1A1A2E] font-medium tracking-wide uppercase text-sm hover:bg-[#00D4FF]/80 transition-colors"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-[#E8E8F0] border-t border-white/[0.08] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/decipher-icon.png"
                alt="Decipher"
                width={32}
                height={32}
                className="rounded-md opacity-50"
              />
              <span className="text-[#8888AA]/50 text-sm tracking-[0.15em]">
                Decipher &mdash; by Cadmus Lab AI LLC
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#8888AA]/50">
              <Link href="/decipher" className="hover:text-[#00D4FF] transition-colors">
                Decipher
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">
                Cadmus Lab
              </Link>
              <span className="text-white/10">|</span>
              <a
                href="mailto:danny@cadmuslab.ai"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <p className="text-center text-[#8888AA]/20 text-xs mt-8">
            &copy; {new Date().getFullYear()} Cadmus Lab AI LLC. Digital
            solutions designed with the real world in mind.
          </p>
        </div>
      </footer>
    </main>
  );
}
