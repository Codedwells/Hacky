import { Code, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-neon-blue" />
              <span className="text-2xl font-display font-bold text-white text-glow tracking-wider">
                HACK<span className="text-neon-pink">ATHON</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's largest hackathon, bringing together developers, designers, and innovators to create groundbreaking solutions for the digital renaissance.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, color: 'text-[#1DA1F2]' },
                { icon: <Github className="w-5 h-5" />, color: 'text-white' },
                { icon: <Linkedin className="w-5 h-5" />, color: 'text-[#0077B5]' },
                { icon: <Mail className="w-5 h-5" />, color: 'text-neon-pink' }
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center justify-center w-10 h-10 rounded-full glass-card border border-white/10 transition-all duration-300 hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Prizes', 'Judges', 'Sponsors', 'FAQ', 'Code of Conduct'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>contact@hackthon.dev</li>
              <li>Virtual Event - Worldwide</li>
            </ul>
            <div className="mt-6">
              <a href="#register" className="text-neon-green text-glow-green font-medium hover:underline">
                Register Now →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HACKATHON. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
