export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Newsletter
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Follow the build. Get the insights.
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-4 max-w-xl mx-auto">
          Weekly updates on what I&apos;m building, what I&apos;m learning, and
          the tools making it possible. No spam, no fluff &mdash; just real
          notes from a solo developer shipping real products.
        </p>

        <p className="text-[#b4b4cc] text-lg mb-10 max-w-xl mx-auto">
          Subscribe and get a free copy of <span className="text-white/90">The
          Polyglot&apos;s Reading List</span> &mdash; 50 of the best free books
          for learning any language, curated by difficulty level with
          Gutenberg links.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://dannypedraza.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
          >
            Subscribe on Substack
          </a>
          <a
            href="/polyglots-reading-list.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white/[0.15] text-white/80 font-medium tracking-wide uppercase text-sm hover:border-[#64ffda]/50 transition-colors"
          >
            Download the PDF
          </a>
        </div>
      </div>
    </section>
  );
}
