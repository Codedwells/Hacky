import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { useParallax } from '../lib/animations';
import { Code, Server, Github, Rocket } from 'lucide-react';

const Hero = () => {
{/*  const foregroundRef = useParallax(0.2);*/}
  {/*const middlegroundRef = useParallax(0.1);*/}
  {/*const backgroundRef = useParallax(0.05);*/}

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene className="w-full h-full" />
      </div>

      {/* Parallax layers */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="absolute w-96 h-96 rounded-full bg-neon-purple/20 blur-3xl -top-20 -left-20" />
        <div className="absolute w-96 h-96 rounded-full bg-neon-blue/20 blur-3xl -bottom-20 -right-20" />
      </div>

      <div
        className="absolute inset-0 z-20 flex items-center justify-center"
      >
        <div className="absolute w-full h-full bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3">
          <Code className="w-full h-full text-neon-blue/5" />
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-1/3">
          <Server className="w-full h-full text-neon-purple/5" />
        </div>
      </div>

      {/* Foreground content */}
      <div
        className="relative z-30 container mx-auto px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-neon-blue/10 rounded-full border border-neon-blue/30 backdrop-blur-sm">
            <span className="text-neon-blue text-sm font-medium">
              VIRTUAL EVENT · DATE TBD
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight">
            <span className="text-glow">THE WORLD'S</span> <br />
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              LARGEST HACKATHON
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-xl md:text-2xl mb-8">
            Join 10,000+ developers from around the globe to build the future with code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg box-glow button-hover"
            >
              Register Now
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Learn More
            </motion.a>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['$1,000,000+', 'VIRTUAL', '10,000+ HACKERS', '100+ COUNTRIES'].map((item, index) => (
                <div key={index} className="glass-card px-4 py-2 rounded-lg">
                  <span className="text-white text-sm font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
          <span className="mt-2 text-xs text-white/50">SCROLL</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
