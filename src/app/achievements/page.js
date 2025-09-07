"use client";

import { motion } from "framer-motion";
import BackToLunchbox from "@/components/Back";

// ✅ Same animation style as other pages
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

export default function AchievementsPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold mb-6"
            style={{ color: "var(--accent-color)" }}
          >
            🏆 Achievements
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-10"
            style={{ color: "var(--muted-text)" }}
          >
            Some notable achievements and milestones.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={container}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.04, rotateX: 1.5, rotateY: -1.5 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
              style={{ backgroundColor: "var(--bento-bg)" }}
            >
              <h2
                className="font-semibold text-xl mb-2"
                style={{ color: "var(--accent-color)" }}
              >
                🥇 Hackathon Finalist
              </h2>
              <p className="text-sm" style={{ color: "var(--muted-text)" }}>
                Built AI-powered app for sustainability.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.04, rotateX: 1.5, rotateY: -1.5 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
              style={{ backgroundColor: "var(--bento-bg)" }}
            >
              <h2
                className="font-semibold text-xl mb-2"
                style={{ color: "var(--accent-color)" }}
              >
                🏆 Google Cloud Skill Boost Prize
              </h2>
              <p className="text-sm" style={{ color: "var(--muted-text)" }}>
                Recognized for outstanding cloud development projects.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.04, rotateX: 1.5, rotateY: -1.5 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200"
              style={{ backgroundColor: "var(--bento-bg)" }}
            >
              <h2
                className="font-semibold text-xl mb-2"
                style={{ color: "var(--accent-color)" }}
              >
                🎓 JLPT N5 Certification
              </h2>
              <p className="text-sm" style={{ color: "var(--muted-text)" }}>
                Japanese language proficiency certification in progress.
              </p>
            </motion.div>
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
