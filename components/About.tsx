import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, Code, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
             >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium mb-6 uppercase tracking-wider">
                  <Users size={12} />
                  <span>The Agency</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Redefining Web Development for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Modern Era.</span>
                </h2>
                
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    We are <strong>Webwrap</strong>—a dynamic agency founded by Abhay & Gaurav. We believe websites shouldn't just be "online brochures." They should be powerful growth engines.
                  </p>
                  <p>
                    Traditional agencies are slow and expensive. We operate differently. By combining <strong>cutting-edge AI workflows</strong> with <strong>robust engineering</strong>, we deliver premium websites faster and more affordably than the competition.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                    className="p-5 rounded-2xl bg-[#111] border border-white/5 transition-all group cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 
                      }}
                      className="mb-3 inline-block"
                    >
                      <Zap className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                    </motion.div>
                    <h4 className="font-bold text-white mb-1">Light Speed</h4>
                    <p className="text-sm text-zinc-500">Rapid development cycles</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                    className="p-5 rounded-2xl bg-[#111] border border-white/5 transition-all group cursor-default"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                      }}
                      className="mb-3 inline-block"
                    >
                      <Cpu className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                    </motion.div>
                    <h4 className="font-bold text-white mb-1">AI Enhanced</h4>
                    <p className="text-sm text-zinc-500">Next-gen optimization</p>
                  </motion.div>
                </div>
             </motion.div>
          </div>

          <div className="lg:w-1/2 w-full perspective-[1000px]">
            <motion.div
              initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative blurry gradients behind the card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl rotate-3 blur-3xl opacity-50"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-bold shadow-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 font-mono">
                    Mission.js
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Empowering Small Business</h3>
                
                <p className="text-zinc-400 leading-relaxed mb-8 italic border-l-2 border-white/20 pl-4">
                  "Our goal is simple: eliminate the barrier to entry for high-quality digital presence. Whether you run a local cafe or a tech startup, you deserve a website that looks world-class."
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Code size={18} className="text-blue-400" />
                      <span className="text-zinc-300 font-medium">Clean Code</span>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                     <div className="flex items-center space-x-3">
                      <Users size={18} className="text-purple-400" />
                      <span className="text-zinc-300 font-medium">Client Focus</span>
                    </div>
                    <span className="text-xs text-green-400 font-mono">100%</span>
                  </div>
                </div>

                {/* Signature visual */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 opacity-50">
                   <div className="text-sm font-handwriting text-zinc-500 italic">Abhay</div>
                   <div className="text-sm font-handwriting text-zinc-500 italic">Gaurav</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;