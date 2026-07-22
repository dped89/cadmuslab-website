export default function Contact() {
  return (
    <section id="contact" className="section-top-fade relative z-10 py-24 md:py-32 bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#0d9488] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Get in Touch
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-900">
          Have a project in mind? Let&apos;s talk.
        </h2>

        <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
          Whether you need custom software, want to collaborate, or just want
          to say hi — reach out.
        </p>

        <a
          href="mailto:danny@halnos.ai?subject=Let's%20Talk"
          className="inline-block px-8 py-3 bg-black text-white font-medium tracking-wide uppercase text-sm hover:bg-[#0d9488] transition-colors rounded"
        >
          Contact Danny
        </a>
      </div>
    </section>
  );
}
