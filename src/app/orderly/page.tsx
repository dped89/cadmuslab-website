import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orderly — Custom Beverage Management Software | Cadmus Lab",
  description:
    "Custom beverage management software — sales, inventory, and ordering integrated into one system. Built for any size operation by Cadmus Lab.",
};

export default function OrderlyPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo-transparent.png" alt="Cadmus Lab" width={48} height={48} />
            <span className="text-black font-light tracking-[0.3em] text-sm uppercase">
              Cadmus Lab
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <a
              href="https://orderlybar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D97706] hover:text-[#B45309] transition-colors"
            >
              orderlybar.app ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — navy */}
      <section className="pt-40 pb-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up flex items-center justify-center gap-5 mb-8">
            <Image
              src="/orderly-icon.png"
              alt="Orderly"
              width={72}
              height={72}
              className="rounded-xl"
            />
            <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.08em]">
              Orderly
            </h1>
          </div>

          <p className="animate-fade-in-up-delay-1 text-[#b4b4cc] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Custom beverage management software — built around how your operation actually runs.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://orderlybar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F59E0B] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#D97706] transition-colors rounded"
            >
              Visit orderlybar.app
            </a>
            <a
              href="mailto:danny@cadmuslab.ai?subject=Orderly%20—%20Let's%20Talk"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 hover:border-white/60 hover:bg-white/[0.04] text-white font-medium tracking-wide uppercase text-sm transition-colors rounded"
            >
              Email Danny
            </a>
          </div>
        </div>
      </section>

      {/* Problem — white */}
      <section className="py-24 px-6 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#D97706] uppercase mb-6">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-slate-900">
            Your sales, inventory, and ordering should all be in one place.
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Orders scattered across spreadsheets, group texts, and email chains.
              Sales data in one system, inventory in another — or in someone&apos;s head.
              No way to connect what you&apos;re selling to what you&apos;re ordering.
            </p>
            <p>
              Whether you run one location or twenty, the process should be
              simple, connected, and built around how your operation actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Features — navy */}
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#F59E0B] uppercase mb-6">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">
            Software that fits your operation — not the other way around.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Streamlined Ordering</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                Managers build orders, directors review and approve — all in one place.
                No more chasing down orders through texts and email.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Inventory Tracking</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                Par levels, zone-based counts, printable count sheets.
                Your staff counts, the system tracks — and flags when you&apos;re running low.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Cost Optimization</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                We analyze your current setup — pricing structures, order patterns,
                distributor terms — and surface savings you didn&apos;t know were there.
                Case breaks, bulk opportunities, whatever your data reveals.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Multi-Location Ready</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                Running multiple spots? Cross-location visibility, approval workflows,
                bulk order aggregation, and role-based access for every level of your team.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Sales Integration</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                Upload POS data, auto-match to your catalog. Compare what you&apos;re
                ordering against what you&apos;re actually selling.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#F59E0B]/40 transition-colors">
              <h3 className="text-xl font-medium mb-3">Role-Based Access</h3>
              <p className="text-[#b4b4cc] leading-relaxed">
                Staff, managers, directors — everyone sees exactly what they need
                and nothing they don&apos;t. Clean, focused, no clutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration — white */}
      <section className="py-24 px-6 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-[#D97706] uppercase mb-6">
            Everything Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-slate-900">
            Sales. Inventory. Orders. One system.
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              When your sales data, inventory counts, and ordering all live in the
              same place, you can finally see the full picture — what&apos;s moving,
              what&apos;s sitting, and where you&apos;re leaving money on the table.
            </p>
            <p>
              We build the integrations around your existing POS, your distributors,
              and your team&apos;s workflow — so adoption is effortless.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works — navy */}
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#F59E0B] uppercase mb-6">
            Custom Built
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Every operation is different. Your software should be too.
          </h2>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="text-[#F59E0B] text-2xl font-light shrink-0 w-8">1</div>
              <div>
                <h3 className="text-xl font-medium mb-2">We talk about your workflow</h3>
                <p className="text-[#b4b4cc] leading-relaxed">
                  How many locations? Who orders? Who approves? What distributors?
                  What&apos;s the current process and where does it break down?
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#F59E0B] text-2xl font-light shrink-0 w-8">2</div>
              <div>
                <h3 className="text-xl font-medium mb-2">We build around you</h3>
                <p className="text-[#b4b4cc] leading-relaxed">
                  Not a one-size-fits-all app. A system designed for your team,
                  your locations, your distributors, your pricing structures.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-[#F59E0B] text-2xl font-light shrink-0 w-8">3</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Everything stays in order</h3>
                <p className="text-[#b4b4cc] leading-relaxed">
                  Sales, inventory, and ordering — connected and running from day one.
                  If there are savings to find, the system surfaces them automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — white */}
      <section className="py-32 px-6 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-900">
            Let&apos;s talk about what your operation needs.
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            One location or twenty — we&apos;ll look at your current setup and build
            a system that brings your sales, inventory, and ordering together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://orderlybar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#F59E0B] text-white font-medium tracking-wide uppercase text-sm hover:bg-[#D97706] transition-colors rounded"
            >
              Visit orderlybar.app
            </a>
            <a
              href="mailto:danny@cadmuslab.ai?subject=Orderly%20—%20Let's%20Talk"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-slate-700 font-medium tracking-wide uppercase text-sm transition-colors rounded"
            >
              Email Danny
            </a>
          </div>
        </div>
      </section>

      {/* Footer — navy */}
      <footer className="bg-[#0F172A] text-white border-t border-white/[0.08] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/orderly-icon.png"
                alt="Orderly"
                width={32}
                height={32}
                className="rounded-md opacity-50"
              />
              <span className="text-[#b4b4cc]/60 text-sm tracking-[0.15em]">
                Orderly — by Cadmus Lab AI LLC
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#b4b4cc]/60">
              <Link href="/" className="hover:text-[#F59E0B] transition-colors">
                Cadmus Lab
              </Link>
              <span className="text-white/10">|</span>
              <a
                href="https://orderlybar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F59E0B] transition-colors"
              >
                orderlybar.app
              </a>
              <span className="text-white/10">|</span>
              <a
                href="mailto:danny@cadmuslab.ai"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <p className="text-center text-[#b4b4cc]/30 text-xs mt-8">
            &copy; {new Date().getFullYear()} Cadmus Lab AI LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
