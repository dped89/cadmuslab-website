import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="Cadmus Lab"
              width={36}
              height={36}
              className="opacity-50"
            />
            <span className="text-[#b4b4cc]/50 text-sm tracking-[0.2em] uppercase">
              Cadmus Lab AI LLC
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#b4b4cc]/50">
            <a
              href="https://youtube.com/@CadmusLab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition-colors"
            >
              YouTube
            </a>
            <span className="text-white/10">|</span>
            <a
              href="mailto:danny@cadmuslab.ai"
              className="hover:text-[#64ffda] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <p className="text-center text-[#b4b4cc]/20 text-xs mt-8">
          &copy; {new Date().getFullYear()} Cadmus Lab AI LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
