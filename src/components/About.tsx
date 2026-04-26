export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-white/[0.08] pt-16">
          <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Your background isn&apos;t a limitation.
            <br />
            It&apos;s your superpower.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-[#b4b4cc] leading-relaxed">
            <div className="space-y-6">
              <p>
                I&apos;m Danny Pedraza. My path went through exercise science,
                hospitality, and cloud engineering before I ever touched AI. And
                that&apos;s exactly the point.
              </p>
              <p>
                Every industry I&apos;ve worked in had problems that AI can solve —
                problems that a pure computer scientist would never even see.
                When you combine real-world experience with AI tools, you don&apos;t
                just learn technology. You solve problems nobody else is solving.
              </p>
              <p>
                I&apos;ve built and deployed real software — ordering systems for
                bars, AI-powered reading apps, evidence vault systems. Not
                because I had a CS degree, but because I understood the problems
                and used AI to build the solutions.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Cadmus Lab exists for people like us — career changers, curious
                professionals, entrepreneurs, and anyone who sees a problem
                worth solving. Your unique perspective is what makes your
                solutions valuable.
              </p>
              <p>
                A nurse who understands patient workflows. A teacher who knows
                how students learn. A small business owner who knows what their
                customers actually need. Those insights, combined with AI, are
                more powerful than any algorithm alone.
              </p>
              <p className="text-white font-medium">
                We&apos;re living through the personal computer moment of our
                generation. Cadmus Lab is here to make sure you&apos;re part of it —
                whoever you are, wherever you&apos;re coming from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
