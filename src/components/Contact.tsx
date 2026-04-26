export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Get in Touch
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Have a project in mind? Let&apos;s talk.
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-10 max-w-xl mx-auto">
          Whether you need custom software, want to collaborate, or just want
          to say hi — reach out.
        </p>

        <a
          href="mailto:danny@cadmuslab.ai?subject=Let's%20Talk"
          className="inline-block px-8 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
        >
          Contact Danny
        </a>
      </div>
    </section>
  );
}
