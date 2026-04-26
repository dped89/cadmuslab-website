import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decipher — Read Real Books in Any Language | Cadmus Lab",
  description:
    "A free language-learning e-reader powered by Project Gutenberg. Tap any word to translate. Track your vocabulary. Read real books in 11 languages.",
  keywords: [
    "language learning app",
    "learn language by reading",
    "bilingual reader",
    "read books in spanish",
    "read books in french",
    "language learning e-reader",
    "free language learning app",
    "gutenberg language learning",
    "tap to translate",
    "Decipher",
  ],
  openGraph: {
    title: "Decipher — Read Real Books in Any Language",
    description:
      "A free language-learning e-reader. Tap any word to translate. 70,000+ free books in 11 languages.",
    url: "https://cadmuslab.ai/decipher",
    siteName: "Cadmus Lab",
    type: "website",
  },
};

const languages = [
  { name: "Spanish", flag: "\u{1F1EA}\u{1F1F8}" },
  { name: "French", flag: "\u{1F1EB}\u{1F1F7}" },
  { name: "German", flag: "\u{1F1E9}\u{1F1EA}" },
  { name: "Portuguese", flag: "\u{1F1E7}\u{1F1F7}" },
  { name: "Italian", flag: "\u{1F1EE}\u{1F1F9}" },
  { name: "Japanese", flag: "\u{1F1EF}\u{1F1F5}" },
  { name: "Korean", flag: "\u{1F1F0}\u{1F1F7}" },
  { name: "Chinese", flag: "\u{1F1E8}\u{1F1F3}" },
  { name: "Russian", flag: "\u{1F1F7}\u{1F1FA}" },
  { name: "Arabic", flag: "\u{1F1F8}\u{1F1E6}" },
  { name: "Dutch", flag: "\u{1F1F3}\u{1F1F1}" },
];

export default function DecipherPage() {
  return (
    <main className="min-h-screen bg-[#1A1A2E] text-[#E8E8F0]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1A1A2E]/80 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-transparent.png"
              alt="Cadmus Lab"
              width={48}
              height={48}
            />
            <span className="text-white font-light tracking-[0.3em] text-sm uppercase">
              Cadmus Lab
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#8888AA]">
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <a
              href="#download"
              className="text-[#00D4FF] hover:text-white transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up flex items-center justify-center gap-5 mb-8">
            <Image
              src="/decipher-icon.png"
              alt="Decipher"
              width={72}
              height={72}
              className="rounded-xl"
            />
            <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.08em]">
              Decipher
            </h1>
          </div>

          <p className="animate-fade-in-up-delay-1 text-[#8888AA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Read real books in any language with live translation.
            Powered by 70,000+ free books from Project Gutenberg.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="inline-block px-8 py-3 bg-[#00D4FF] text-[#1A1A2E] font-medium tracking-wide uppercase text-sm hover:bg-[#00D4FF]/80 transition-colors"
            >
              Download Free on Google Play
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-8 py-3 border border-white/[0.15] text-[#E8E8F0] font-medium tracking-wide uppercase text-sm hover:border-[#00D4FF]/50 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-end gap-6 md:gap-10">
            <div className="hidden md:block w-48 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 opacity-80 -rotate-3 translate-y-4">
              <Image
                src="/decipher/home.jpg"
                alt="Decipher home screen showing your book library"
                width={360}
                height={722}
                className="w-full h-auto"
              />
            </div>
            <div className="w-56 md:w-64 rounded-2xl overflow-hidden shadow-2xl shadow-[#00D4FF]/20 ring-1 ring-[#00D4FF]/20 z-10">
              <Image
                src="/decipher/reading.jpg"
                alt="Reading Don Quijote with Spanish text and English translation side by side"
                width={360}
                height={722}
                className="w-full h-auto"
              />
            </div>
            <div className="hidden md:block w-48 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 opacity-80 rotate-3 translate-y-4">
              <Image
                src="/decipher/browse.jpg"
                alt="Browse 898 free Spanish books on Project Gutenberg"
                width={360}
                height={722}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-[#151528]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Language apps teach you to swipe. Not to read.
          </h2>
          <div className="space-y-4 text-[#8888AA] text-lg leading-relaxed">
            <p>
              You&apos;ve kept a 200-day streak on a language app. You&apos;ve earned
              every badge. But you still can&apos;t read a menu, a news article, or
              a book in your target language without panicking.
            </p>
            <p>
              That&apos;s because the most effective way to learn a language
              isn&apos;t flashcards or gamified drills &mdash; it&apos;s reading.
              Real reading. Linguists have known this for decades. The problem was
              never the method &mdash; it was the friction. Switching between a
              book, a dictionary, and a notes app just to get through a page.
            </p>
            <p>
              Decipher removes that friction entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-16">
            Everything you need to read in another language. Nothing you don&apos;t.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Tap-to-Translate</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Tap any word for an instant translation without leaving the page.
                See alternate meanings, and keep reading without breaking your flow.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">70,000+ Free Books</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Browse Project Gutenberg&apos;s entire library. Real literature &mdash;
                the same books native speakers grew up with. Not dumbed-down
                textbook passages.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Import Your Own Books</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Already have a book you want to read? Import any DRM-free EPUB
                from your device. Your personal library, your target language,
                all the same translation and vocabulary tools.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Vocabulary Tracking</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Every word you look up is saved automatically. Color-code your
                vocabulary, review with flashcards, and watch your comprehension
                grow over time.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Full-Page Translation</h3>
              <p className="text-[#8888AA] leading-relaxed">
                See the original text and the English translation side by side.
                Horizontal or vertical split &mdash; your choice. Adjust the
                ratio to match your comfort level.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Text-to-Speech</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Listen to any page read aloud in the target language. Adjustable
                speed &mdash; slow it down while you&apos;re learning, speed up as you
                improve.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-lg p-8 hover:border-[#00D4FF]/30 transition-colors">
              <h3 className="text-xl font-medium mb-3">Flashcard Review</h3>
              <p className="text-[#8888AA] leading-relaxed">
                Study the vocabulary you&apos;ve saved with animated flip cards. Filter
                by book, date, or color tag. Review the words you actually
                encountered while reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-[#151528]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Start reading in a new language in under a minute.
          </h2>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex gap-6 flex-1">
                <div className="text-[#00D4FF] text-2xl font-light shrink-0 w-8">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Pick a book in your target language
                  </h3>
                  <p className="text-[#8888AA] leading-relaxed">
                    Browse or search Project Gutenberg&apos;s library by language.
                    Thousands of titles in Spanish, French, German, Japanese, and
                    more &mdash; all free, all real literature. Or import your own
                    DRM-free EPUB if you already have a book in mind.
                  </p>
                </div>
              </div>
              <div className="w-40 md:w-44 shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src="/decipher/browse.jpg"
                  alt="Browse free books by language in Decipher"
                  width={360}
                  height={722}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex gap-6 flex-1">
                <div className="text-[#00D4FF] text-2xl font-light shrink-0 w-8">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Read with live translation beside you
                  </h3>
                  <p className="text-[#8888AA] leading-relaxed">
                    The original text and English translation sit side by side.
                    Tap any word you don&apos;t know for an instant translation.
                    No app-switching, no broken flow.
                  </p>
                </div>
              </div>
              <div className="w-40 md:w-44 shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src="/decipher/reading.jpg"
                  alt="Split-view reading with Spanish and English translation"
                  width={360}
                  height={722}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex gap-6 flex-1">
                <div className="text-[#00D4FF] text-2xl font-light shrink-0 w-8">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Build your vocabulary naturally
                  </h3>
                  <p className="text-[#8888AA] leading-relaxed">
                    Every word you look up is saved automatically. Review with
                    flashcards, track your progress, and watch the number of
                    lookups drop as you read more. That&apos;s real learning.
                  </p>
                </div>
              </div>
              <div className="w-40 md:w-44 shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src="/decipher/flashcards.jpg"
                  alt="Flashcard review with vocabulary from your reading"
                  width={360}
                  height={722}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Languages
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            11 languages. Thousands of books each.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="border border-white/[0.08] rounded-lg px-5 py-3 hover:border-[#00D4FF]/30 transition-colors"
              >
                <span className="text-2xl mr-2">{lang.flag}</span>
                <span className="text-[#E8E8F0] text-sm">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="py-24 px-6 bg-[#151528]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            No ads. No subscription. Ever.
          </h2>
          <p className="text-[#8888AA] text-lg mb-12">
            The free tier has everything you need to start learning. Premium
            removes all limits with a one-time purchase.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/[0.08] rounded-lg p-8">
              <h3 className="text-xl font-medium mb-2">Free</h3>
              <p className="text-[#00D4FF] text-3xl font-light mb-6">$0</p>
              <ul className="space-y-3 text-[#8888AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Full Project Gutenberg library
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  30 word translations per day
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  30 saved vocabulary words
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Full-page translation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Flashcard review
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  3 text-to-speech reads per day
                </li>
              </ul>
            </div>

            <div className="border border-[#00D4FF]/30 rounded-lg p-8 relative">
              <div className="absolute -top-3 left-6 bg-[#00D4FF] text-[#1A1A2E] text-xs font-bold tracking-wider uppercase px-3 py-1">
                One-Time Purchase
              </div>
              <h3 className="text-xl font-medium mb-2">Premium</h3>
              <p className="text-[#00D4FF] text-3xl font-light mb-6">
                $6.99
              </p>
              <ul className="space-y-3 text-[#8888AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Everything in Free
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Unlimited word translations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Unlimited saved vocabulary
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Unlimited text-to-speech
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  No daily limits &mdash; ever
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00D4FF] mt-1">&#10003;</span>
                  Support an indie developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Substack */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            Stay in the Loop
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Get the Polyglot&apos;s Reading List &mdash; free.
          </h2>
          <p className="text-[#8888AA] text-lg mb-8 max-w-2xl mx-auto">
            50 of the best free books for learning Spanish, French, German,
            Italian, Portuguese, and more &mdash; curated by difficulty level
            with Gutenberg links. Subscribe to the Cadmus Lab newsletter and
            it&apos;s yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://dannypedraza.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#00D4FF] text-[#1A1A2E] font-medium tracking-wide uppercase text-sm hover:bg-[#00D4FF]/80 transition-colors"
            >
              Subscribe on Substack
            </a>
            <a
              href="/polyglots-reading-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#00D4FF]/30 text-[#E8E8F0] font-medium tracking-wide uppercase text-sm hover:border-[#00D4FF]/60 transition-colors"
            >
              Download the PDF
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#151528]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-[#00D4FF] uppercase mb-6">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Common questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Is Decipher really free?
              </h3>
              <p className="text-[#8888AA] leading-relaxed">
                Yes. The free tier gives you the full Gutenberg library, 30 daily
                word translations, vocabulary flashcards, and full-page
                translation. No ads, no subscription. The optional premium
                upgrade ($6.99, one-time) removes all daily limits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                What books are available?
              </h3>
              <p className="text-[#8888AA] leading-relaxed">
                Decipher connects to Project Gutenberg, a library of over 70,000
                public-domain books. You&apos;ll find classics like Don Quijote,
                Le Petit Prince, Grimm&apos;s Fairy Tales, and thousands more
                across 11 languages. You can also import any DRM-free EPUB from
                your device &mdash; so if the book you want isn&apos;t on
                Gutenberg, you can still read it with all the same translation
                and vocabulary tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Do I need to be good at a language to use this?
              </h3>
              <p className="text-[#8888AA] leading-relaxed">
                No. The full-page translation shows you the meaning of everything
                on screen. Tap any word you don&apos;t know. Start with short,
                simple books and work your way up. The first few pages will be
                slow &mdash; that&apos;s normal and expected.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Is it available on iOS?
              </h3>
              <p className="text-[#8888AA] leading-relaxed">
                Decipher is currently available on Android via Google Play.
                iOS support is being explored for a future release.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Can I import my own books?
              </h3>
              <p className="text-[#8888AA] leading-relaxed">
                Yes. You can import any DRM-free EPUB file from your device.
                Tap-to-translate, vocabulary tracking, flashcards, full-page
                translation, and text-to-speech all work the same way with
                imported books as they do with Gutenberg titles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Start reading in a new language today.
          </h2>
          <p className="text-[#8888AA] text-lg mb-10 max-w-2xl mx-auto">
            Free on Google Play. No account required. Pick a book and start
            reading in under a minute.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.decipher.reader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#00D4FF] text-[#1A1A2E] font-medium tracking-wide uppercase text-sm hover:bg-[#00D4FF]/80 transition-colors"
          >
            Download on Google Play
          </a>
          <p className="text-[#8888AA]/50 text-sm mt-4">
            Android &bull; Free &bull; No ads &bull; No subscription
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-12">
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
              <Link
                href="/"
                className="hover:text-[#00D4FF] transition-colors"
              >
                Cadmus Lab
              </Link>
              <span className="text-white/10">|</span>
              <a
                href="https://youtube.com/@CadmusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00D4FF] transition-colors"
              >
                YouTube
              </a>
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
