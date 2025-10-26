"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GamesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const games = [
    {
      title: "Pixel Monster Arena",
      description: "Battle epic pixel monsters in this retro-style fighting game! Master combos, collect power-ups, and dominate the arena!",
      image: "👾",
      genre: "Fighting",
      players: "1-4",
      rating: "9.2/10",
      color: "from-primary to-secondary",
    },
    {
      title: "Cyber Dragon Quest",
      description: "Embark on an epic RPG adventure through neon-lit cyberpunk cities! Fight dragons, collect loot, and save the digital world!",
      image: "🐉",
      genre: "RPG",
      players: "1-2",
      rating: "9.5/10",
      color: "from-secondary to-accent",
    },
    {
      title: "Retro Arcade Collection",
      description: "Classic arcade games reimagined! Pac-Man meets cyberpunk! Space invaders with neon lasers! Pure nostalgic gaming bliss!",
      image: "🎮",
      genre: "Arcade",
      players: "1-8",
      rating: "9.0/10",
      color: "from-accent to-primary",
    },
    {
      title: "Unicorn Magic Battle",
      description: "Cast spells, summon creatures, and duel with magical unicorns! The most colorful and chaotic battle royale ever created!",
      image: "🦄",
      genre: "Battle Royale",
      players: "50-100",
      rating: "8.8/10",
      color: "from-primary to-accent",
    },
    {
      title: "Neon Speed Racer",
      description: "High-speed racing through cyberpunk cities! Drift around corners, boost through neon tunnels, and become the ultimate speed demon!",
      image: "🏎️",
      genre: "Racing",
      players: "1-12",
      rating: "9.3/10",
      color: "from-secondary to-primary",
    },
    {
      title: "Pixel Puzzle Master",
      description: "Solve mind-bending puzzles in a pixelated world! Think outside the box, unlock secrets, and become the ultimate puzzle master!",
      image: "🧩",
      genre: "Puzzle",
      players: "1-4",
      rating: "8.9/10",
      color: "from-accent to-secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
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
                OUR GAMES
              </span>
              <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mt-4">
                EPIC ADVENTURES AWAIT!
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Dive into our collection of mind-blowing games! From pixel monsters to cyber dragons, 
              we've got the most exciting gaming experiences that will blow your mind! 🚀
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
            className="absolute top-20 right-20 text-8xl opacity-20"
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
            className="absolute bottom-32 left-20 text-7xl opacity-20"
          >
            👾
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
            className="absolute top-1/2 left-10 text-6xl opacity-20"
          >
            🐉
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
            className="absolute top-1/3 right-10 text-6xl opacity-20"
          >
            🦄
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {games.map((game, index) => (
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
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${game.color} flex items-center justify-center mb-6 text-4xl mx-auto`}
                  >
                    {game.image}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                    {game.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {game.description}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex space-x-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {game.genre}
                      </span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                        {game.players} Players
                      </span>
                    </div>
                    <div className="text-accent font-bold">
                      {game.rating}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${game.color} text-background font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(8,253,216,0.5)] transition-all duration-300`}
                  >
                    Play Now! 🚀
                  </motion.button>
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

export default GamesPage;
