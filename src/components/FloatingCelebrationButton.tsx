import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GrandOpeningCelebration from './GrandOpeningCelebration';

const FloatingCelebrationButton: React.FC = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCelebrationClick = () => {
    setShowCelebration(true);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCelebrationClick}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-yellow-300"
        title="Replay Grand Opening Celebration"
      >
        <div className="text-2xl">🎉</div>
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>

      <AnimatePresence>
        {showCelebration && (
          <GrandOpeningCelebration 
            key="replay-celebration"
            onClose={() => setShowCelebration(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCelebrationButton;
