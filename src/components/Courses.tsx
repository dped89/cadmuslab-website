const courses = [
  {
    title: "AI for Real Life",
    subtitle: "Zero to Confident in 30 Days",
    description:
      "Go from curious to capable. Structured learning path with quizzes, projects, and community — built from the Zero to Hero series.",
    price: "$197",
    tag: "Coming Soon",
  },
  {
    title: "Vibe Coding",
    subtitle: "Build Real AI Apps Without a CS Degree",
    description:
      "Follow along as we build real, deployed applications using AI as your coding partner. You'll leave with a portfolio, not just knowledge.",
    price: "$297",
    tag: "Coming Soon",
  },
  {
    title: "AI Business Foundations",
    subtitle: "Launch an AI Product in 90 Days",
    description:
      "From idea to revenue. Learn pricing, client acquisition, and operations from someone actually running an AI business.",
    price: "$497",
    tag: "Coming Soon",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Courses
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Go deeper. Build real things.
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-12 max-w-2xl">
          Structured courses with projects, community, and mentorship.
          Everything the free series can&apos;t give you.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {courses.map((course) => (
            <div
              key={course.title}
              className="border border-white/[0.08] p-6 hover:border-[#64ffda]/30 transition-colors group flex flex-col"
            >
              <span className="text-xs text-[#64ffda] border border-[#64ffda]/30 px-2 py-0.5 uppercase tracking-wider self-start mb-4">
                {course.tag}
              </span>
              <h3 className="text-xl font-medium text-white mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-[#64ffda]/70 mb-4">{course.subtitle}</p>
              <p className="text-sm text-[#b4b4cc] leading-relaxed mb-6 flex-1">
                {course.description}
              </p>
              <p className="text-2xl font-light text-white">
                {course.price}
                <span className="text-sm text-[#b4b4cc]/50 ml-2">one-time</span>
              </p>
            </div>
          ))}
        </div>

        {/* Subscriber CTA */}
        <div className="border border-[#64ffda]/20 bg-[#64ffda]/[0.03] p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Get in early.
          </h3>
          <p className="text-[#b4b4cc] max-w-xl mx-auto mb-2">
            Join the Cadmus Lab community for{" "}
            <span className="text-white font-medium">$9.99/month</span> and get
            exclusive content, early access to videos, monthly live sessions,
            and discounts on every course.
          </p>
          <p className="text-[#b4b4cc]/50 text-sm mb-8">
            Be the first to know when courses launch.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-[#64ffda] text-black font-medium tracking-wide uppercase text-sm hover:bg-white transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
