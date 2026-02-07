import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Globe, Layout, Zap, ArrowUpRight, Code2, Bot } from 'lucide-react';

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
             <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 uppercase tracking-widest">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white font-outfit"
          >
            Everything you need <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">scale faster.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-2xl mx-auto font-light"
          >
            Full-stack solutions engineered for growth. From first code to final pixel, we deliver excellence.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          
          {/* Card 1: Custom Websites */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <SpotlightCard className="h-full group">
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                    
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <motion.div 
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center text-blue-400 border border-white/5 shadow-lg relative z-20"
                            >
                                <Globe size={28} strokeWidth={1.5} />
                            </motion.div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold mb-3 text-white font-outfit">Custom Websites</h3>
                        <p className="text-zinc-400 max-w-md text-lg leading-relaxed">High-performance web applications built with Next.js. SEO-ready, accessible, and impossibly fast.</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
                            <motion.span 
                                key={tech} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-semibold text-zinc-300 border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: UI/UX */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full group">
                <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 text-pink-400 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Layout size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white font-outfit">UI/UX Design</h3>
                        <p className="text-zinc-400">Interfaces that feel natural. We focus on micro-interactions and fluidity.</p>
                    </div>
                    <div className="w-full h-32 bg-[#111] rounded-xl border border-white/5 mt-6 relative overflow-hidden">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"
                        ></motion.div>
                        <div className="absolute inset-0 grid grid-cols-6 gap-2 p-3 opacity-30">
                            {[...Array(12)].map((_, i) => (
                                <motion.div 
                                    key={i} 
                                    className="bg-white/10 rounded-sm"
                                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                                    transition={{ 
                                        duration: 2 + Math.random() * 2, 
                                        repeat: Infinity, 
                                        delay: Math.random() * 2 
                                    }}
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Niche (Cafe) */}
          <motion.div variants={itemVariants}>
            <SpotlightCard className="h-full group">
                <div className="p-8 h-full flex flex-col justify-between">
                    <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-orange-500/10 rounded-full blur-[60px] translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors"></div>
                    <div>
                        <motion.div 
                          whileHover={{ y: -3 }}
                          className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 text-orange-400 border border-white/5 shadow-lg"
                        >
                            <Coffee size={28} strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2 text-white font-outfit">Industry Niche</h3>
                        <p className="text-zinc-400">Specialized digital menus and QR systems for cafes & bistros.</p>
                    </div>
                </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: AI Integration */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <SpotlightCard className="h-full group">
                <div className="p-8 h-full flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="flex-1">
                        <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 text-green-400 border border-white/5 shadow-lg">
                            <Bot size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white font-outfit">AI Integration</h3>
                        <p className="text-zinc-400">Smart chatbots, content generation, and automated workflows powered by LLMs.</p>
                    </div>
                    
                    {/* Code Snippet Visual */}
                    <div className="w-full md:w-1/2 bg-[#050505] rounded-xl border border-white/10 p-5 font-mono text-xs text-zinc-400 shadow-2xl overflow-hidden relative">
                         {/* Scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-scan pointer-events-none"></div>
                        
                        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                            <span className="text-zinc-600">generate.ts</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}><span className="text-purple-400">const</span> <span className="text-blue-400">ai</span> = <span className="text-purple-400">new</span> OpenAI();</motion.p>
                            <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> ai.chat({'{'}
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="pl-4">
                                model: <span className="text-green-400">'gpt-4-turbo'</span>,
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="pl-4">
                                messages: [<span className="text-green-400">'Build amazing web apps'</span>]
                            </motion.p>
                            <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}>{'}'});</motion.p>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;