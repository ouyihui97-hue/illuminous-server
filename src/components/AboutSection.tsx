"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text tracking-wide">GAME STUDIO</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                We're absolutely OBSESSED with gaming! At Illuminous Gaming Studio, we don't just create games – 
                we craft LEGENDARY adventures that will make you lose sleep! Our team of passionate pixel artists, 
                crazy game designers, and coding wizards work 24/7 to bring you the most INSANE gaming experiences ever!
              </p>
              
              <p>
                We're fueled by pure PASSION and NOSTALGIA! We specialize in creating retro-style games that 
                will make you feel like a kid again, but with mind-blowing modern graphics that will blow your mind! 
                This is gaming EVOLUTION at its finest!
              </p>
              
              <p>
                Our mission? To ILLUMINATE the gaming world with the most EPIC pixel monsters, 
                INSANE battles, and unforgettable adventures that will make you scream with excitement! 
                We're not just pushing boundaries – we're SMASHING them! 🔥⚡
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold text-lg rounded-xl neon-glow hover:shadow-[0_0_40px_rgba(8,253,216,0.6)] transition-all duration-300">
                PLAY OUR GAMES! 🎮
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div variants={rightItemVariants} className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Game Categories */}
              {[
                { name: "Pixel Art", percentage: 95, color: "from-primary to-secondary" },
                { name: "Arcade", percentage: 88, color: "from-secondary to-accent" },
                { name: "RPG", percentage: 92, color: "from-accent to-primary" },
                { name: "Multiplayer", percentage: 90, color: "from-primary to-accent" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {tech.percentage}%
                  </div>
                  <div className="text-text-secondary font-medium mb-4">
                    {tech.name}
                  </div>
                  <div className="w-full bg-background/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-20 h-20 glass-card rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -left-10 w-16 h-16 glass-card rounded-full flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
