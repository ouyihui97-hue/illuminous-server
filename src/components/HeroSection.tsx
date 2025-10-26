"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block gradient-text tracking-wide">
              ILLUMINOUS
            </span>
            <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mt-4">
              FOUNDED FOR PASSION
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We founded Illuminous because we were TIRED of boring games! We wanted to create 
            the most EPIC pixel monster battles, dragon quests, and retro arcade adventures 
            that would make gamers SCREAM with excitement! This is our PASSION! 🔥
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(8, 253, 216, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold text-lg rounded-xl neon-glow hover:shadow-[0_0_40px_rgba(8,253,216,0.6)] transition-all duration-300"
            >
              START PLAYING! 🚀
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 0, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-text font-semibold text-lg rounded-xl border-2 border-secondary/50 hover:border-secondary neon-glow-secondary hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] transition-all duration-300"
            >
              EXPLORE GAMES! 🎮
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "1M+", label: "Players Online" },
              { number: "500+", label: "Games Released" },
              { number: "99%", label: "Player Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gaming Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 text-8xl opacity-10"
        >
          👾
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-20 text-7xl opacity-10"
        >
          🐉
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 text-6xl opacity-10"
        >
          🦄
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -35, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-10 text-6xl opacity-10"
        >
          🎮
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-5xl opacity-10"
        >
          ⚡
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 12, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 text-5xl opacity-10"
        >
          💎
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
