"use client";

import { motion } from "framer-motion";
import BackToLunchbox from "@/components/Back";

// ✅ Reuse Bento animation style
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
    y: 40,
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

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Web Developer Intern",
      desc: "Built responsive landing pages and dashboards.",
    },
    {
      title: "Freelancer",
      desc: "Delivered 3+ full-stack apps for clients.",
    },
    {
      title: "Open Source Contributor",
      desc: "Contributed bug fixes and docs to GitHub repos.",
    },
  ];

  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold mb-6"
            style={{ color: "var(--accent-color)" }}
          >
            💼 Experience
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-10"
            style={{ color: "var(--muted-text)" }}
          >
            Some roles and opportunities I’ve been part of so far.
          </motion.p>

          {/* Cards */}
          <motion.div variants={container} className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.04, rotateX: 1.5, rotateY: -1.5 }}
                whileTap={{ scale: 0.97 }}
                className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
                style={{ backgroundColor: "var(--bento-bg)" }}
              >
                <h2
                  className="font-semibold text-xl"
                  style={{ color: "var(--accent-color)" }}
                >
                  {exp.title}
                </h2>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--muted-text)" }}
                >
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Back button */}
          <motion.div variants={item} className="flex justify-start mt-12">
            <BackToLunchbox />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
