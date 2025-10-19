"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gamingLinks = [
    { name: "Games", href: "#games" },
    { name: "Arcade", href: "#arcade" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "Achievements", href: "#achievements" },
  ];

  const socialLinks = [
    { name: "Discord", icon: "🎮", href: "#" },
    { name: "Twitch", icon: "📺", href: "#" },
    { name: "Steam", icon: "💨", href: "#" },
    { name: "YouTube", icon: "📹", href: "#" },
  ];

  return (
    <footer className="relative bg-background/90 backdrop-blur-md border-t border-primary/30 py-16">
      {/* Pixel Monster Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl"
        >
          👾
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-background font-mono font-bold text-xl">I</span>
              </div>
              <span className="text-3xl font-bold gradient-text tracking-wide">
                ILLUMINOUS
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              Crafting the future of gaming with cutting-edge technology and 
              immersive digital experiences that push the boundaries of what's possible.
            </p>
            
            {/* Gaming Stats */}
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1M+</div>
                <div className="text-sm text-text-secondary">Players</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-text-secondary">Games</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-text-secondary">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Gaming Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-text mb-6 flex items-center">
              <span className="mr-2">🎯</span>
              Gaming
            </h3>
            <ul className="space-y-3">
              {gamingLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ 
                      x: 5,
                      color: "#08FDD8",
                      textShadow: "0 0 10px #08FDD8"
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-text mb-6 flex items-center">
              <span className="mr-2">🌐</span>
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 0 20px rgba(8, 253, 216, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 text-center group cursor-pointer"
                >
                  <div className="text-2xl mb-1">{social.icon}</div>
                  <div className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-text-secondary text-sm mb-4 md:mb-0">
            © 2024 Illuminous. All rights reserved. Made with ❤️ for gamers.
          </div>
          
          {/* Pixel Art Elements */}
          <div className="flex space-x-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              🔥
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              💎
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Pixel Monsters */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-4 left-4 text-3xl hidden lg:block"
      >
        🐉
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-4 right-4 text-3xl hidden lg:block"
      >
        🦄
      </motion.div>
    </footer>
  );
};

export default Footer;
