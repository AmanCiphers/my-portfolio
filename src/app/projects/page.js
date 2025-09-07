"use client";

import { motion } from "framer-motion";
import BackToLunchbox from "@/components/Back";

// ✅ Reusing the same animations from Bento
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 1,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      mass: 1,
    },
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "🌱 EcoTrack",
      desc: "A web app to track personal carbon footprint and suggest actionable improvements for a sustainable lifestyle.",
    },
    {
      title: "📚 StudySphere",
      desc: "A collaborative platform for sharing and accessing study resources, notes, and guides for students and learners worldwide.",
    },
    {
      title: "📚 StudySphere",
      desc: "A collaborative platform for sharing and accessing study resources, notes, and guides for students and learners worldwide.",
    },
    {
      title: "📚 StudySphere",
      desc: "A collaborative platform for sharing and accessing study resources, notes, and guides for students and learners worldwide.",
    },
    {
      title: "📚 StudySphere",
      desc: "A collaborative platform for sharing and accessing study resources, notes, and guides for students and learners worldwide.",
    },
    {
      title: "📚 StudySphere",
      desc: "A collaborative platform for sharing and accessing study resources, notes, and guides for students and learners worldwide.",
    },
  ];

  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Header */}
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold mb-6"
            style={{ color: "var(--accent-color)" }}
          >
            🚀 Projects
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-12 text-lg"
            style={{ color: "var(--muted-text)", lineHeight: "1.8" }}
          >
            Here are some projects I’ve built recently. Each project showcases
            my skills in building modern web apps, solving real-world problems,
            and exploring new technologies.
          </motion.p>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            className="grid gap-8 md:grid-cols-2"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="p-6 rounded-3xl border border-transparent hover:border-[#d19a66] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: "var(--bento-bg)" }}
              >
                <h2
                  className="font-semibold text-xl mb-3"
                  style={{ color: "var(--accent-color)" }}
                >
                  {project.title}
                </h2>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-text)", lineHeight: "1.7" }}
                >
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Back button */}
          <motion.div variants={item} className="flex justify-start mt-16">
            <BackToLunchbox />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
