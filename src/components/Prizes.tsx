import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../lib/animations';
import { Trophy, Gift, Award, Star } from 'lucide-react';

const prizes = [
  {
    place: 'GRAND PRIZE',
    amount: '$300,000',
    color: '#FFDF00',
    benefits: [
      'Cash prize of $300,000',
      'Global media coverage',
      'Investor pitch opportunities',
      'Incubator program access'
    ]
  },
  {
    place: 'RUNNER UP',
    amount: '$150,000',
    color: '#C8C8C9',
    benefits: [
      'Cash prize of $150,000',
      'Cloud credits package',
      'Mentorship program',
      'Conference passes'
    ]
  },
  {
    place: '3RD PLACE',
    amount: '$75,000',
    color: '#CD7F32',
    benefits: [
      'Cash prize of $75,000',
      'Premium API access',
      'Product development support',
      'PR feature package'
    ]
  }
];

const PrizeCard = ({ place, amount, color, benefits, index }: any) => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      className="relative glass-card rounded-xl border border-white/10 overflow-hidden"
      style={{ boxShadow: `0 0 30px ${color}20` }}
    >
      <div 
        className="h-2" 
        style={{ background: `linear-gradient(90deg, ${color}50, ${color})` }}
      />
      <div className="p-6">
        <div className="absolute top-3 right-3">
          <Trophy className="w-6 h-6" style={{ color }} />
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white opacity-80">{place}</h3>
          <p className="text-4xl font-display font-bold" style={{ color }}>
            {amount}
          </p>
        </div>
        <ul className="space-y-2">
          {benefits.map((benefit: string, i: number) => (
            <li key={i} className="flex items-start text-sm text-gray-300">
              <span className="mr-2" style={{ color }}>●</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const prizeCategories = [
  {
    icon: <Gift className="w-5 h-5 text-neon-blue" />,
    title: 'CATEGORY PRIZES',
    description: 'Over $300,000 in specialized category prizes',
    items: [
      'Best AI Implementation - $50,000',
      'Best Web3 Project - $50,000',
      'Best Social Impact - $50,000',
      'Best Developer Tool - $50,000'
    ]
  },
  {
    icon: <Award className="w-5 h-5 text-neon-pink" />,
    title: 'SPONSOR PRIZES',
    description: 'Additional prizes from our sponsors',
    items: [
      'Cloud credits worth $100,000',
      'Hardware packages worth $50,000',
      'Premium API subscriptions',
      'Enterprise software licenses'
    ]
  },
  {
    icon: <Star className="w-5 h-5 text-neon-green" />,
    title: 'SPECIAL AWARDS',
    description: 'Recognition and opportunities',
    items: [
      'Startup accelerator spots',
      'Mentorship from industry leaders',
      'Internship opportunities',
      'Conference speaking slots'
    ]
  }
];

const PrizeTypeCard = ({ icon, title, description, items, index }: any) => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 * index }}
      className="glass-card p-6 rounded-xl border border-white/10 overflow-hidden"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-white/5 mr-3 border border-white/10">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start text-sm text-gray-400">
            <span className="mr-2 text-neon-purple">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Prizes = () => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);
  
  return (
    <section id="prizes" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-neon-green/10 rounded-full border border-neon-green/30 backdrop-blur-sm">
            <span className="text-neon-green text-sm font-medium">
              PRIZE POOL
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow text-glow-green">
            $1,000,000+ IN PRIZES
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Compete for life-changing prizes and opportunities that will accelerate your career and projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <PrizeCard key={index} {...prize} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center mb-10"
        >
          <h3 className="text-2xl font-display font-bold mb-4">MULTIPLE PRIZE TYPES</h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            Beyond cash prizes, we offer a variety of opportunities to help your projects succeed.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {prizeCategories.map((category, index) => (
            <PrizeTypeCard key={index} {...category} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 glass-card p-6 rounded-xl border border-white/10 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-white">Total Value Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-neon-blue mr-2">●</span>
              <span className="text-gray-300">$525,000 in main prizes</span>
            </div>
            <div className="flex items-start">
              <span className="text-neon-purple mr-2">●</span>
              <span className="text-gray-300">$200,000 in category prizes</span>
            </div>
            <div className="flex items-start">
              <span className="text-neon-pink mr-2">●</span>
              <span className="text-gray-300">$150,000 in sponsor prizes</span>
            </div>
            <div className="flex items-start">
              <span className="text-neon-green mr-2">●</span>
              <span className="text-gray-300">$125,000+ in opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-1/4 w-1/4 h-1/3 bg-glow-purple -z-10 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/3 bg-glow-green -z-10 opacity-20 blur-3xl" />
    </section>
  );
};

export default Prizes;
