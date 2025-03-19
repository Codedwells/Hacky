import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../lib/animations';
import { Code, Monitor, Database, Server, Cloud, Shield } from 'lucide-react';

const partnerLogos = [
  { name: 'TechGiant', tier: 'platinum', logo: <Code className="w-12 h-12" /> },
  { name: 'CloudSys', tier: 'platinum', logo: <Cloud className="w-12 h-12" /> },
  { name: 'CodeCorp', tier: 'gold', logo: <Monitor className="w-10 h-10" /> },
  { name: 'DevInc', tier: 'gold', logo: <Server className="w-10 h-10" /> },
  { name: 'AILabs', tier: 'gold', logo: <Database className="w-10 h-10" /> },
  { name: 'BlockChain', tier: 'silver', logo: <Shield className="w-8 h-8" /> },
  { name: 'DataFlow', tier: 'silver', logo: <Database className="w-8 h-8" /> },
  { name: 'SecureNet', tier: 'silver', logo: <Monitor className="w-8 h-8" /> },
  { name: 'AppWorks', tier: 'silver', logo: <Code className="w-8 h-8" /> },
  { name: 'WebFuture', tier: 'bronze', logo: <Monitor className="w-6 h-6" /> },
  { name: 'DevOps', tier: 'bronze', logo: <Database className="w-6 h-6" /> },
  { name: 'CodeSchool', tier: 'bronze', logo: <Code className="w-6 h-6" /> },
];

const tierColors = {
  platinum: '#E5E5E5',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

const PartnerLogo = ({ name, tier, logo, index }: any) => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="flex flex-col items-center"
    >
      <div
        className={`w-full h-24 glass-card flex items-center justify-center border border-white/10 rounded-lg p-4 relative overflow-hidden group transition-all duration-300 hover:border-${tier}`}
        style={{ borderColor: `${tierColors[tier as keyof typeof tierColors]}30` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ backgroundColor: tierColors[tier as keyof typeof tierColors] }}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2" style={{ color: tierColors[tier as keyof typeof tierColors] }}>
            {logo}
          </div>
          <div
            className="text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, white, ${tierColors[tier as keyof typeof tierColors]})`,
              textShadow: `0 0 15px ${tierColors[tier as keyof typeof tierColors]}80`
            }}
          >
            {name}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Partners = () => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <section id="sponsors" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-neon-blue/10 rounded-full border border-neon-blue/30 backdrop-blur-sm">
            <span className="text-neon-blue text-sm font-medium">
              OUR SPONSORS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow">
            POWERED BY INDUSTRY LEADERS
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            HACKATHON is made possible by our incredible sponsors who are committed to advancing technology and supporting the developer community.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-center text-xl font-bold mb-6 text-gray-300">PLATINUM SPONSORS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerLogos
              .filter(partner => partner.tier === 'platinum')
              .map((partner, index) => (
                <PartnerLogo key={index} {...partner} index={index} />
              ))
            }
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-xl font-bold mb-6 text-gray-300">GOLD SPONSORS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partnerLogos
              .filter(partner => partner.tier === 'gold')
              .map((partner, index) => (
                <PartnerLogo key={index} {...partner} index={index} />
              ))
            }
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-xl font-bold mb-6 text-gray-300">SILVER SPONSORS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {partnerLogos
              .filter(partner => partner.tier === 'silver')
              .map((partner, index) => (
                <PartnerLogo key={index} {...partner} index={index} />
              ))
            }
          </div>
        </div>

        <div>
          <h3 className="text-center text-xl font-bold mb-6 text-gray-300">BRONZE SPONSORS</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partnerLogos
              .filter(partner => partner.tier === 'bronze')
              .map((partner, index) => (
                <PartnerLogo key={index} {...partner} index={index} />
              ))
            }
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 glass-card p-8 rounded-xl border border-white/10 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">BECOME A SPONSOR</h3>
          <p className="text-gray-400 mb-8">
            Join the world's most innovative companies in supporting the next generation of developers and tech innovations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-4 rounded-lg border border-white/10">
              <h4 className="font-bold text-lg mb-2">Sponsor Benefits</h4>
              <ul className="text-sm text-gray-400 space-y-2 text-left">
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Access to top tech talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Brand visibility to 10,000+ participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Product showcases and demonstrations</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-4 rounded-lg border border-white/10">
              <h4 className="font-bold text-lg mb-2">Sponsor Tiers</h4>
              <ul className="text-sm text-gray-400 space-y-2 text-left">
                <li className="flex items-start">
                  <span style={{color: tierColors.platinum}} className="mr-2">●</span>
                  <span>Platinum - Premium positioning</span>
                </li>
                <li className="flex items-start">
                  <span style={{color: tierColors.gold}} className="mr-2">●</span>
                  <span>Gold - Enhanced visibility</span>
                </li>
                <li className="flex items-start">
                  <span style={{color: tierColors.silver}} className="mr-2">●</span>
                  <span>Silver - Standard package</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg button-hover box-glow"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-glow-blue -z-10 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-glow-pink -z-10 opacity-20 blur-3xl" />
    </section>
  );
};

export default Partners;
