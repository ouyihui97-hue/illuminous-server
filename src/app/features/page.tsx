"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: "👾",
      title: "EPIC Pixel Monsters",
      description: "BATTLE LEGENDARY pixel monsters that will make you SCREAM! These aren't just games - they're EPIC ADVENTURES that will blow your mind!",
      details: "Face off against 50+ unique pixel monsters, each with their own special attacks and weaknesses. Master the art of combat and become the ultimate monster slayer!",
      color: "from-primary to-secondary",
    },
    {
      icon: "⚡",
      title: "LIGHTNING FAST Combat",
      description: "Feel the ADRENALINE RUSH with our INSANELY fast combat system! Every punch, every kick, every move is pure GAMING MAGIC!",
      details: "Experience 60fps combat with frame-perfect timing. Chain combos, execute special moves, and feel every impact with our advanced physics engine!",
      color: "from-secondary to-accent",
    },
    {
      icon: "🏆",
      title: "LEGENDARY Achievements",
      description: "Unlock the most RARE and EPIC achievements ever created! Show off your skills and become a TRUE GAMING LEGEND!",
      details: "Over 200 unique achievements to unlock! From speed runs to perfect scores, every achievement tells a story of your gaming journey!",
      color: "from-accent to-primary",
    },
    {
      icon: "🌐",
      title: "GLOBAL Multiplayer",
      description: "Compete with the BEST players worldwide! This is where CHAMPIONS are made! Are you ready to DOMINATE the leaderboards?",
      details: "Join millions of players in real-time battles! Climb the global leaderboards, form guilds, and prove you're the ultimate gaming champion!",
      color: "from-primary to-accent",
    },
    {
      icon: "🎮",
      title: "RETRO Arcade MADNESS",
      description: "Classic arcade games REIMAGINED with mind-blowing graphics! This is NOSTALGIA on STEROIDS! Pure gaming PERFECTION!",
      details: "Experience 20+ classic arcade games with modern twists! From Pac-Man to Space Invaders, we've given them all a cyberpunk makeover!",
      color: "from-secondary to-primary",
    },
    {
      icon: "💎",
      title: "MAGICAL Power-ups",
      description: "Collect the most INSANE power-ups and special abilities! Transform into a GAMING GOD and DESTROY everything in your path!",
      details: "Discover 100+ unique power-ups! From speed boosts to invincibility shields, each power-up changes the game completely!",
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
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block gradient-text tracking-wide">
                FEATURES
              </span>
              <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mt-4">
                GAMING PERFECTION!
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Get ready to have your MIND BLOWN! We're talking about the most EPIC pixel monster battles, 
              INSANE dragon quests, and absolutely LEGENDARY retro arcade games that will make you 
              lose your mind with excitement! This is gaming at its FINEST! 🔥⚡
            </motion.p>
          </motion.div>
        </div>

        {/* Background Gaming Icons */}
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
            🎮
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
            ⚡
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 text-4xl mx-auto`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FeaturesPage;
