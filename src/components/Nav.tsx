import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo-transparent.png"
            alt="Cadmus Lab"
            width={48}
            height={48}
            className=""
          />
          <span className="text-black font-light tracking-[0.3em] text-sm uppercase">
            Cadmus Lab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#projects" className="hover:text-black transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#series" className="hover:text-black transition-colors">
            Content
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
