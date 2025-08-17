import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: Array<{ x: number; y: number; vx: number; vy: number; color: string }>;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  color: string;
  shape: string;
}

interface Taka {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  value: string;
  isFlashing: boolean;
}

interface GrandOpeningCelebrationProps {
  onClose?: () => void;
}

const GrandOpeningCelebration: React.FC<GrandOpeningCelebrationProps> = ({ onClose }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [taka, setTaka] = useState<Taka[]>([]);
  const [showText, setShowText] = useState(false);

  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
  const shapes = ['🎉', '🎊', '✨', '💫', '🌟', '🎈', '🎁', '🎪'];
  const takaValues = ['৳', '💰', '💵', '💸', '💎', '🏆', '💍', '💎'];

  useEffect(() => {
    // Check if this is the first visit or if onClose is provided (replay mode)
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited || onClose) {
      setShowCelebration(true);
      if (!hasVisited) {
        localStorage.setItem('hasVisitedBefore', 'true');
      }
      
      // Start fireworks after a short delay
      setTimeout(() => {
        startFireworks();
        startConfetti();
        startTaka();
        setShowText(true);
      }, 500);
    }
  }, [onClose]);

  const startFireworks = () => {
    const interval = setInterval(() => {
      const newFirework: Firework = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        color: colors[Math.floor(Math.random() * colors.length)],
        particles: []
      };

      // Create particles for the firework
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 3 + Math.random() * 2;
        newFirework.particles.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      setFireworks(prev => [...prev, newFirework]);

      // Remove firework after animation
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
      }, 2000);
    }, 800);

    // Stop fireworks after 10 seconds
    setTimeout(() => clearInterval(interval), 10000);
  };

  const startConfetti = () => {
    const interval = setInterval(() => {
      const newConfetti: Confetti = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: -20,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      };

      setConfetti(prev => [...prev, newConfetti]);

      // Remove confetti after it falls off screen
      setTimeout(() => {
        setConfetti(prev => prev.filter(c => c.id !== newConfetti.id));
      }, 5000);
    }, 100);

    // Stop confetti after 15 seconds
    setTimeout(() => clearInterval(interval), 15000);
  };

  const startTaka = () => {
    const interval = setInterval(() => {
      const newTaka: Taka = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: -30,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 720,
        value: takaValues[Math.floor(Math.random() * takaValues.length)],
        isFlashing: Math.random() > 0.5
      };

      setTaka(prev => [...prev, newTaka]);

      // Remove taka after it falls off screen
      setTimeout(() => {
        setTaka(prev => prev.filter(t => t.id !== newTaka.id));
      }, 6000);
    }, 200);

    // Stop taka after 20 seconds
    setTimeout(() => clearInterval(interval), 20000);
  };

  const closeCelebration = () => {
    setShowCelebration(false);
    setShowText(false);
    setFireworks([]);
    setConfetti([]);
    setTaka([]);
    if (onClose) {
      onClose();
    }
  };

  if (!showCelebration) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        onClick={closeCelebration}
      >
        {/* Fireworks */}
        {fireworks.map((firework) => (
          <div key={firework.id} className="absolute">
            {firework.particles.map((particle, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  left: firework.x,
                  top: firework.y,
                }}
                animate={{
                  x: particle.vx * 50,
                  y: particle.vy * 50,
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        ))}

        {/* Confetti */}
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute text-2xl pointer-events-none"
            style={{
              left: piece.x,
              top: piece.y,
              color: piece.color,
            }}
            animate={{
              y: window.innerHeight + 50,
              x: piece.x + piece.vx * 100,
              rotate: piece.rotation + 360,
            }}
            transition={{
              duration: 5,
              ease: "easeIn"
            }}
          >
            {piece.shape}
          </motion.div>
        ))}

        {/* Taka (Money) Effects */}
        {taka.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute text-3xl sm:text-4xl pointer-events-none font-bold"
            style={{
              left: piece.x,
              top: piece.y,
              filter: piece.isFlashing ? 'drop-shadow(0 0 10px #FFD700)' : 'none',
            }}
            animate={{
              y: window.innerHeight + 50,
              x: piece.x + piece.vx * 150,
              rotate: piece.rotation + 720,
              scale: piece.isFlashing ? [1, 1.3, 1] : [1, 1.1, 1],
              opacity: piece.isFlashing ? [1, 0.8, 1] : [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              ease: "easeIn",
              scale: {
                duration: 1,
                repeat: piece.isFlashing ? Infinity : 0,
                ease: "easeInOut"
              },
              opacity: {
                duration: 1,
                repeat: piece.isFlashing ? Infinity : 0,
                ease: "easeInOut"
              }
            }}
          >
            {piece.value}
          </motion.div>
        ))}

        {/* Main Celebration Content */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 sm:p-12 max-w-4xl mx-4 text-center shadow-2xl border-4 border-yellow-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sparkle Effects */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Celebration Icons */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl sm:text-8xl mb-6"
            >
              🎉🎊🎈
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              GRAND OPENING!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-yellow-100 mb-6 font-semibold"
            >
              Welcome to MyChoice - Premium Cooking Oils
            </motion.p>

            {/* Celebration Text */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="space-y-4 mb-8"
                >
                  <p className="text-base sm:text-lg text-yellow-50 leading-relaxed">
                    🎊 <strong>Celebrating Our Grand Opening!</strong> 🎊
                  </p>
                  <p className="text-sm sm:text-base text-yellow-100 leading-relaxed">
                    We're thrilled to announce the launch of our premium cooking oil collection, 
                    bringing you the finest quality oils for your kitchen.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Credits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6"
            >
              <p className="text-sm sm:text-base text-yellow-50 font-medium mb-2">
                🎨 Designed & Developed by:
              </p>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-bold">
                  Sky Star Web Solutions
                </p>
                <p className="text-base sm:text-lg text-yellow-100">
                  Developed by Cripcocode Technologies Pvt Ltd
                </p>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeCelebration}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Start Exploring!
            </motion.button>

            {/* Additional Celebration Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.8 }}
              className="mt-6 text-2xl sm:text-3xl"
            >
              ✨🎪🎁💫
            </motion.div>
          </div>
        </motion.div>

        {/* Background Celebration Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl sm:text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {shapes[Math.floor(Math.random() * shapes.length)]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GrandOpeningCelebration;
