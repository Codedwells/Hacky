import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../lib/animations';
import { Atom, Code, Github, Trophy, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-neon-blue" />,
    title: 'Code with the Best',
    description: 'Challenge yourself alongside elite developers and designers from around the world.'
  },
  {
    icon: <Trophy className="w-6 h-6 text-neon-pink" />,
    title: 'Win Big Prizes',
    description: 'Compete for a share of the $1,000,000+ prize pool and career-changing opportunities.'
  },
  {
    icon: <Github className="w-6 h-6 text-neon-green" />,
    title: 'Open Source Impact',
    description: 'Contribute to projects that will shape the future of technology and society.'
  },
  {
    icon: <Atom className="w-6 h-6 text-neon-yellow" />,
    title: 'Cutting-Edge Tech',
    description: 'Get hands-on with the latest frameworks, AI models, and developer tools.'
  }
];

const FeatureCard = ({ icon, title, description, index }: any) => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex flex-col items-start">
        <div className="p-3 rounded-lg bg-white/5 mb-4 border border-white/10">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  const theme = "TAKE CREATIVE FREEDOM HERE!";

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-neon-purple/10 rounded-full border border-neon-purple/30 backdrop-blur-sm">
            <span className="text-neon-purple text-sm font-medium">
              THIS YEAR'S THEME
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow text-glow-purple">
            {theme}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Join us in reimagining the digital world through innovation, creativity, and groundbreaking technology. Create solutions that bridge art, technology, and humanity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-6 rounded-xl border border-neon-blue/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <Globe className="w-full h-full text-neon-blue" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4 text-glow">VIRTUAL GLOBAL EVENT</h3>
              <p className="text-gray-300 mb-4">
                Connect with 10,000+ participants from over 100 countries, forming diverse teams to solve complex challenges.
              </p>
              <ul className="space-y-2 text-gray-400">
                {[
                  'Participate from anywhere in the world',
                  'Form international teams across all time zones',
                  'Collaborate in real-time using cutting-edge tools',
                  'Build lifelong professional connections'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-blue mr-2">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card p-6 rounded-xl border border-neon-pink/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <Zap className="w-full h-full text-neon-pink" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4 text-glow-pink">LEARN FROM THE BEST</h3>
              <p className="text-gray-300 mb-4">
                Get exclusive access to workshops, mentoring sessions, and technical deep-dives led by industry experts.
              </p>
              <ul className="space-y-2 text-gray-400">
                {[
                  'Hands-on workshops on emerging technologies',
                  'One-on-one mentoring with tech leaders',
                  'Technical deep-dives and code reviews',
                  'Career development and networking opportunities'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-neon-pink mr-2">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-1/5 h-1/3 bg-glow-pink -z-10 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-1/5 h-1/3 bg-glow-blue -z-10 opacity-20 blur-3xl" />
    </section>
  );
};

export default About;
