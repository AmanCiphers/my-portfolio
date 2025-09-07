"use client";
import { motion } from "framer-motion";
import BackToLunchbox from "@/components/Back";

// ✅ Reuse same animation style as Projects / Experience / Achievements
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

export default function AboutPage() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Heading */}
          <motion.h1
            className="text-4xl font-extrabold mb-4"
            style={{ color: "var(--accent-color)" }}
            variants={item}
          >
            👨‍💻 About Me
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="mb-6 leading-relaxed p-6 rounded-2xl"
            style={{
              color: "var(--muted-text)",
              backgroundColor: "var(--bento-bg)",
            }}
            variants={item}
          >
            Hey there 👋 I’m{" "}
            <span className="font-semibold">Amandeep Singh</span>, a Computer
            Science student passionate about building modern web apps,
            automation tools, and exploring AI.
          </motion.p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          {/* Skills */}
          <motion.h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--accent-color)" }}
            variants={item}
          >
            ⚡ Skills
          </motion.h2>

          <motion.ul
            className="grid grid-cols-2 gap-3 p-6 rounded-2xl"
            style={{
              backgroundColor: "var(--bento-bg)",
              color: "var(--muted-text)",
            }}
            variants={item}
          >
            {[
              "React.js / Next.js",
              "Node.js / Express",
              "MongoDB / SQL",
              "TailwindCSS",
              "Git & GitHub",
              "Python (Basics)",
            ].map((skill, i) => (
              <motion.li
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, color: "var(--highlight-color)" }}
                className="transition-colors"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Back button */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex justify-start mt-12"
        >
          <BackToLunchbox />
        </motion.div>
      </div>
    </main>
  );
}
