import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionAnimation } from '../lib/animations';
import { Award, Linkedin, Twitter, Globe } from 'lucide-react';

const judges = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead',
    company: 'TechGiant',
    image: 'https://placehold.co/600x400?text=Dr.%20Sarah%20Chen',
    bio: 'Leading expert in artificial intelligence with over 15 years of experience developing cutting-edge algorithms for computer vision and natural language processing.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'CloudSys',
    image: 'https://placehold.co/600x400?text=Marcus%20Johnson',
    bio: 'Serial tech entrepreneur who has successfully scaled multiple startups and led engineering teams at top tech companies. Expert in cloud architecture and distributed systems.',
    expertise: ['Cloud Computing', 'System Architecture', 'Entrepreneurship'],
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Aisha Patel',
    role: 'Blockchain Specialist',
    company: 'BlockChain',
    image: 'https://placehold.co/600x400?text=Aisha%20Patel',
    bio: 'Pioneering researcher in blockchain technology and decentralized finance. Has contributed to several open-source projects and authored numerous research papers.',
    expertise: ['Blockchain', 'Web3', 'Smart Contracts'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Dr. James Wilson',
    role: 'Professor of CS',
    company: 'Tech University',
    image: 'https://placehold.co/600x400?text=Dr.%20James%20Wilson',
    bio: 'Distinguished professor of computer science specializing in algorithms and data structures. Has mentored hundreds of students who now work at leading tech companies.',
    expertise: ['Algorithms', 'Data Structures', 'Education'],
    social: {
      linkedin: '#',
      website: '#'
    }
  },
  {
    name: 'Elena Rodriguez',
    role: 'UX Director',
    company: 'DesignFirm',
    image: 'https://placehold.co/600x400?text=Elena%20Rodriguez',
    bio: 'Award-winning designer with a focus on creating intuitive, accessible, and beautiful user experiences. Previously led design teams at several Fortune 500 companies.',
    expertise: ['User Experience', 'Accessibility', 'Design Systems'],
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Venture Partner',
    company: 'Tech Ventures',
    image: 'https://placehold.co/600x400?text=David%20Kim',
    bio: 'Investor with a portfolio of over 50 successful tech startups. Focuses on early-stage companies with innovative approaches to solving complex technical challenges.',
    expertise: ['Venture Capital', 'Startup Strategy', 'Technology Investment'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  }
];

const JudgeCard = ({ judge, index }: { judge: any, index: number }) => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="glass-card rounded-xl border border-white/10 overflow-hidden group"
    >
      <div className="relative">
        <div className="overflow-hidden h-60">
          <img
            src={judge.image}
            alt={judge.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex gap-2 justify-end">
            {judge.social.linkedin && (
              <a href={judge.social.linkedin} className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <Linkedin size={14} className="text-white" />
              </a>
            )}
            {judge.social.twitter && (
              <a href={judge.social.twitter} className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <Twitter size={14} className="text-white" />
              </a>
            )}
            {judge.social.website && (
              <a href={judge.social.website} className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <Globe size={14} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{judge.name}</h3>
        <p className="text-neon-blue text-sm mb-3">{judge.role} @ {judge.company}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{judge.bio}</p>
        <div className="flex flex-wrap gap-2">
          {judge.expertise.map((skill: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Judges = () => {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <section id="judges" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-neon-pink/10 rounded-full border border-neon-pink/30 backdrop-blur-sm">
            <span className="text-neon-pink text-sm font-medium">
              MEET OUR EXPERTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow text-glow-pink">
            WORLD-CLASS JUDGES
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Our panel of industry leaders and technical experts will evaluate projects based on innovation, technical complexity, design, and business potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <JudgeCard key={index} judge={judge} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">JUDGING CRITERIA</h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold mb-3 text-white">Technical Innovation</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">●</span>
                  <span>Use of cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">●</span>
                  <span>Novel solutions to complex problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-2">●</span>
                  <span>Technical complexity and depth</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold mb-3 text-white">User Experience</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Intuitive and accessible design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Performance and responsiveness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-blue mr-2">●</span>
                  <span>Visual aesthetics and usability</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold mb-3 text-white">Impact & Potential</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">●</span>
                  <span>Solution to real-world problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">●</span>
                  <span>Market potential and scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">●</span>
                  <span>Social and environmental impact</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-bold mb-3 text-white">Execution & Presentation</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">●</span>
                  <span>Quality of implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">●</span>
                  <span>Clarity of presentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-yellow mr-2">●</span>
                  <span>Completeness of prototype</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 glass-card p-6 rounded-xl border border-neon-pink/20 relative overflow-hidden max-w-3xl mx-auto text-center"
        >
          <div className="absolute inset-0 opacity-5">
            <Award className="w-full h-full" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 text-white">INTERESTED IN BEING A JUDGE?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for industry leaders and technical experts to join our panel of judges. If you're interested in evaluating the next generation of tech innovations, we'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-medium rounded-lg button-hover box-glow"
            >
              Apply to Be a Judge
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-glow-pink -z-10 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-1/3 h-1/3 bg-glow-blue -z-10 opacity-20 blur-3xl" />
    </section>
  );
};

export default Judges;
