import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div>
            <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center space-x-2 mb-6 cursor-default group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                  <motion.svg 
                    viewBox="0 0 40 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M8 12C8 12 10 28 14 28C18 28 20 18 20 18C20 18 22 28 26 28C30 28 32 12 32 12" 
                      stroke="url(#footer-logo-gradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.circle 
                      cx="20" cy="14" r="4" 
                      fill="#ffffff" 
                      fillOpacity="0.2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, type: "spring" }}
                     />
                  </motion.svg>
               </div>
               <span className="text-2xl font-bold text-white tracking-tight group-hover:text-green-400 transition-colors duration-300">Webwrap</span>
            </motion.div>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Building the future of the web, one pixel at a time. Specializing in AI-powered, modern web solutions for forward-thinking brands.
            </p>
          </div>
          
          <div className="flex gap-16">
             <div>
                <h4 className="font-bold text-white mb-6">Navigation</h4>
                <ul className="space-y-4 text-sm text-zinc-400">
                   <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                   <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                   <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                   <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-white mb-6">Connect</h4>
                <div className="flex space-x-4">
                  <motion.a whileHover={{ y: -3, scale: 1.1, color: '#fff' }} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 transition-all"><Github size={18} /></motion.a>
                  <motion.a whileHover={{ y: -3, scale: 1.1, color: '#60a5fa' }} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 transition-all"><Twitter size={18} /></motion.a>
                  <motion.a whileHover={{ y: -3, scale: 1.1, color: '#f472b6' }} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 transition-all"><Instagram size={18} /></motion.a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Webwrap. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-1">
             <span>Made with</span>
             <Heart size={12} className="text-red-600 fill-current animate-pulse" />
             <span>in React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;