"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  status: "Live" | "In Development" | "Coming Soon";
  href: string | null;
  /** Mono-style slug shown in the card footer. */
  slug: string;
  waitlistUrl?: string | null;
};

const projects: Project[] = [
  {
    name: "Orderly",
    subtitle: "Beverage Order Management",
    description:
      "Custom-built management system for multi-location bars and restaurants. Integrates sales, inventory, and ordering into one system with approval workflows, cost optimization, and role-based access.",
    tech: ["React", "Express", "PostgreSQL"],
    status: "Live",
    href: "/orderly",
    slug: "orderly",
    waitlistUrl: null,
  },
  {
    name: "Decipher",
    subtitle: "Language Learning E-Reader",
    description:
      "A reading app with tap-to-translate, progress tracking, and a full library powered by Project Gutenberg. Learn a language by reading real books.",
    tech: ["React Native", "Expo", "Gutenberg API"],
    status: "Live",
    href: "/decipher",
    slug: "decipher",
    waitlistUrl: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Real products. Built with AI. Deployed to production.
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-12 max-w-2xl">
          These aren&apos;t demos or tutorials — they&apos;re real software solving real
          problems for real users.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--tx", `${x}%`);
      el.style.setProperty("--ty", `${y}%`);
      const rx = ((y - 50) / 50) * -3;
      const ry = ((x - 50) / 50) * 4;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translateY(-2px) rotateX(${rx.toFixed(
          2
        )}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
    };
    const onLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const inner = (
    <div ref={ref} className="pcard">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-medium text-white">{project.name}</h3>
        <span
          className={`text-[11px] tracking-[0.16em] uppercase px-2 py-0.5 inline-flex items-center gap-2 font-mono ${
            project.status === "Live"
              ? "text-[#64ffda] border border-[#64ffda]/30"
              : "text-[#b4b4cc]/60 border border-white/10"
          }`}
        >
          {project.status === "Live" && <span className="live-dot" />}
          {project.status}
        </span>
      </div>

      <p className="text-sm text-[#64ffda]/70 mb-4">{project.subtitle}</p>

      <p className="text-[#b4b4cc] leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-[#b4b4cc]/65 border border-white/[0.06] px-2 py-1 transition-colors duration-300 group-hover:text-[#b4b4cc]/95 group-hover:border-white/20"
          >
            {t}
          </span>
        ))}
      </div>

      {project.waitlistUrl ? (
        <a
          href={project.waitlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0a14] bg-[#64ffda] px-5 py-2.5 hover:bg-[#64ffda]/90 transition-colors tracking-wide uppercase mt-auto"
          onClick={(e) => e.stopPropagation()}
        >
          Join the Waitlist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      ) : (
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] uppercase text-[#b4b4cc]/50">
          <span>{project.slug}</span>
          <span className="cta text-[#64ffda] inline-flex items-center gap-1.5">
            View case study →
          </span>
        </div>
      )}
    </div>
  );

  return project.href ? (
    <Link href={project.href} className="block group">
      {inner}
    </Link>
  ) : (
    <div className="group">{inner}</div>
  );
}
