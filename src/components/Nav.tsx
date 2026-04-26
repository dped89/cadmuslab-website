import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo-transparent.png"
            alt="Cadmus Lab"
            width={48}
            height={48}
            className=""
          />
          <span className="text-white font-light tracking-[0.3em] text-sm uppercase">
            Cadmus Lab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#b4b4cc]">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#series" className="hover:text-white transition-colors">
            Content
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
