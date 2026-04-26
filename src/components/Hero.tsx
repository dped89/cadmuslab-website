export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Hero content */}
      <div className="relative z-10 px-6 text-center">
        {/* Logo mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-transparent.png"
          alt="Cadmus Lab"
          style={{
            width: 375,
            height: 375,
            objectFit: "contain",
            objectPosition: "center top",
            marginBottom: -40,
            animation: "float 6s ease-in-out infinite",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.15em] uppercase mb-6">
          Cadmus Lab
        </h1>

        <p className="text-xl md:text-2xl text-[#b4b4cc] font-light mb-4">
          Learn AI. Build with AI. Launch with AI.
        </p>

        <p className="text-base text-[#b4b4cc]/70 max-w-2xl mx-auto mb-12">
          Free video series, hands-on courses, and a community of builders
          turning AI knowledge into real products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
          >
            See the Projects
          </a>
          <a
            href="https://youtube.com/@CadmusLab"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white font-medium tracking-wide uppercase text-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 to-white/30" />
      </div>
    </section>
  );
}
