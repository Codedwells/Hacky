import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Countdown from '../components/Countdown';
import Prizes from '../components/Prizes';
import Judges from '../components/Judges';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import { toast } from '@/components/ui/use-toast';

// Add framer-motion for page transitions
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to HACKATHON",
        description: "The world's largest hackathon is coming soon! Register now to participate.",
        duration: 5000,
      });
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground overflow-hidden"
      >
        <Navbar />
        <Hero />
        <About />
        <Countdown />
        <Prizes />
        <Judges />
        <Partners />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
