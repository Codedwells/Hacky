import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../lib/animations';

const Countdown = () => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="countdown" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow">
            GET READY FOR THE CHALLENGE
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            The world's largest hackathon is coming soon. Join our waitlist to be notified when dates are announced.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card p-12 rounded-2xl border border-white/10 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-glow-purple">
            DATE TO BE ANNOUNCED
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Something extraordinary is coming. Join our waitlist and be the first to know when we announce the official dates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue" 
            />
            <button className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg box-glow button-hover">
              Notify Me
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg button-hover box-glow"
          >
            Pre-Register Now
          </a>
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-glow-purple -z-10 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-glow-blue -z-10 opacity-30 blur-3xl" />
    </section>
  );
};

export default Countdown;
