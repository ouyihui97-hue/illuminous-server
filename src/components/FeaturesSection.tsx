"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: "👾",
      title: "EPIC Pixel Monsters",
      description: "BATTLE LEGENDARY pixel monsters that will make you SCREAM! These aren't just games - they're EPIC ADVENTURES that will blow your mind!",
      color: "from-primary to-secondary",
    },
    {
      icon: "⚡",
      title: "LIGHTNING FAST Combat",
      description: "Feel the ADRENALINE RUSH with our INSANELY fast combat system! Every punch, every kick, every move is pure GAMING MAGIC!",
      color: "from-secondary to-accent",
    },
    {
      icon: "🏆",
      title: "LEGENDARY Achievements",
      description: "Unlock the most RARE and EPIC achievements ever created! Show off your skills and become a TRUE GAMING LEGEND!",
      color: "from-accent to-primary",
    },
    {
      icon: "🌐",
      title: "GLOBAL Multiplayer",
      description: "Compete with the BEST players worldwide! This is where CHAMPIONS are made! Are you ready to DOMINATE the leaderboards?",
      color: "from-primary to-accent",
    },
    {
      icon: "🎮",
      title: "RETRO Arcade MADNESS",
      description: "Classic arcade games REIMAGINED with mind-blowing graphics! This is NOSTALGIA on STEROIDS! Pure gaming PERFECTION!",
      color: "from-secondary to-primary",
    },
    {
      icon: "💎",
      title: "MAGICAL Power-ups",
      description: "Collect the most INSANE power-ups and special abilities! Transform into a GAMING GOD and DESTROY everything in your path!",
      color: "from-accent to-secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text tracking-wide">FEATURES</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Get ready to have your MIND BLOWN! We're talking about the most EPIC pixel monster battles, 
            INSANE dragon quests, and absolutely LEGENDARY retro arcade games that will make you 
            lose your mind with excitement! This is gaming at its FINEST! 🔥⚡
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 text-2xl`}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
