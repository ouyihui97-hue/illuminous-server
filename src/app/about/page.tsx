"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Game Designer",
      description: "The mastermind behind our most EPIC pixel monster battles! 10+ years of pure gaming passion!",
      avatar: "👨‍💻",
    },
    {
      name: "Maya Rodriguez",
      role: "Pixel Art Wizard",
      description: "Creates the most INSANE pixel art you've ever seen! Every pixel is crafted with love!",
      avatar: "👩‍🎨",
    },
    {
      name: "Jake Thompson",
      role: "Code Ninja",
      description: "Turns coffee into LEGENDARY game code! The fastest coder in the gaming universe!",
      avatar: "👨‍💻",
    },
    {
      name: "Luna Park",
      role: "Sound Designer",
      description: "Makes every sound effect EPIC! You'll hear the music in your dreams!",
      avatar: "👩‍🎵",
    },
  ];

  const achievements = [
    { title: "Games Released", value: "500+", icon: "🎮" },
    { title: "Happy Players", value: "1M+", icon: "😊" },
    { title: "Awards Won", value: "50+", icon: "🏆" },
    { title: "Years of Passion", value: "10+", icon: "⭐" },
  ];

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
                ABOUT US
              </span>
              <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mt-4">
                THE GAMING LEGENDS!
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              We're the CRAZY team behind the most EPIC gaming experiences! 
              Meet the passionate gamers who make the impossible possible! 🚀
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
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                <span className="gradient-text tracking-wide">OUR STORY</span>
              </h2>
              
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  It all started with a DREAM! We were just a bunch of gaming fanatics who couldn't get enough 
                  of pixel monsters and epic adventures. We thought: "Why not create the games WE want to play?"
                </p>
                
                <p>
                  So we did! We quit our jobs, maxed out our credit cards, and started coding like CRAZY! 
                  We lived on pizza and energy drinks for months, but we didn't care - we were making GAMES!
                </p>
                
                <p>
                  Fast forward to today, and we've created over 500 EPIC games that millions of players love! 
                  We're still that same passionate team, just with better equipment and more coffee! ☕
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-text-secondary font-medium">
                      {achievement.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text tracking-wide">MEET THE TEAM</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              The CRAZY passionate gamers who make the magic happen! 
              These legends work 24/7 to bring you the most EPIC gaming experiences!
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="glass-card p-8 text-center group cursor-pointer"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
