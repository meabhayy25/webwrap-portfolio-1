import React, { useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import { ArrowRight, Play, Zap, MousePointer2, Code, Sparkles, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);

  // Mouse tilt effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Parallax for inner elements
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);
  
  // Parallax for floating icons (amplified)
  const iconTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-40px", "40px"]);
  const iconTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-40px", "40px"]);

  // Parallax for Background Giant Logo (Reverse direction for depth)
  const bgLogoX = useTransform(mouseXSpring, [-0.5, 0.5], ["50px", "-50px"]);
  const bgLogoY = useTransform(mouseYSpring, [-0.5, 0.5], ["50px", "-50px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const technologies = ["REACT", "TYPESCRIPT", "TAILWIND", "OPENAI", "FRAMER", "NODE.JS", "POSTGRES", "SUPABASE", "VERCEL", "AWS"];

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center perspective-[2000px] min-h-screen justify-center"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* GIANT BACKGROUND LOGO */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
        <motion.div
           style={{ x: bgLogoX, y: bgLogoY }}
           animate={{ rotate: [0, 3, 0, -3, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="opacity-[0.15]"
        >
          <svg viewBox="0 0 40 40" className="w-[120vw] h-[120vw] md:w-[1000px] md:h-[1000px] overflow-visible">
            <defs>
              <linearGradient id="hero-big-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            
            {/* Glow Layer */}
            <motion.path 
              d="M8 12C8 12 10 28 14 28C18 28 20 18 20 18C20 18 22 28 26 28C30 28 32 12 32 12" 
              stroke="url(#hero-big-logo-gradient)" 
              strokeWidth="0.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              className="blur-xl"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Sharp Stroke Layer */}
            <motion.path 
              d="M8 12C8 12 10 28 14 28C18 28 20 18 20 18C20 18 22 28 26 28C30 28 32 12 32 12" 
              stroke="url(#hero-big-logo-gradient)" 
              strokeWidth="0.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Circle Dot */}
            <motion.circle 
              cx="20" cy="14" r="4" 
              fill="url(#hero-big-logo-gradient)" 
              fillOpacity="0.05"
              stroke="url(#hero-big-logo-gradient)"
              strokeWidth="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1, type: "spring" }}
             />
          </svg>
        </motion.div>
      </div>

      {/* Animated Ambient Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 z-10 relative"
      >
        
        {/* Animated Badge */}
        <motion.div variants={itemVariants} className="inline-flex relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative flex items-center space-x-2 bg-[#050505] border border-white/10 rounded-full px-4 py-1.5 shadow-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-300">Accepting new clients for 2026</span>
            <ArrowRight size={14} className="text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </motion.div>

        {/* Main Heading with Stagger */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-9xl font-bold tracking-tight text-white mb-6 max-w-6xl mx-auto leading-[0.9] md:leading-[0.85]"
        >
          Build the web <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
            of tomorrow.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          We craft pixel-perfect websites with <span className="text-white font-medium">Modern Tech</span> and <span className="text-white font-medium">AI</span>. 
          No templates, just pure engineering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
            className="group relative h-14 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-100 transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
             <span className="relative">Start Project</span>
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} 
            className="h-14 px-10 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-md group"
          >
            <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            View Work
          </button>
        </motion.div>

        {/* 3D Interface Visual with Parallax */}
        <motion.div 
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
            {/* New Floating Icons */}
            <motion.div 
              style={{ x: iconTranslateX, y: iconTranslateY }}
              className="absolute -top-12 -right-12 z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl"
              >
                <Code className="text-blue-500" size={32} />
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ x: iconTranslateX, y: iconTranslateY }}
              className="absolute -bottom-10 -left-10 z-30 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-14 h-14 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="text-purple-500" size={28} />
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ x: iconTranslateX, y: iconTranslateY }}
              className="absolute top-1/2 -right-20 z-20 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-12 h-12 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl opacity-80"
              >
                <Cpu className="text-emerald-500" size={24} />
              </motion.div>
            </motion.div>

            <div className="relative rounded-2xl bg-[#080808] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-[16/10] md:aspect-[21/9] group transform-style-3d">
               {/* Reflection/Shine */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20 pointer-events-none mix-blend-overlay"></div>

                {/* Browser Chrome */}
                <div className="h-12 border-b border-white/5 bg-[#0a0a0a] flex items-center px-4 justify-between z-10 relative">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#000] rounded-lg text-[11px] text-zinc-500 font-mono border border-white/5 shadow-inner">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        webwrap.dev
                    </div>
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Content Area */}
                <div className="relative h-full bg-[#050505] flex p-1">
                   {/* Sidebar */}
                   <motion.div 
                      style={{ x: translateX }}
                      className="w-16 md:w-64 border-r border-white/5 bg-[#030303] hidden md:flex flex-col p-4 gap-4 z-10"
                   >
                       <div className="w-10 h-10 rounded-xl bg-blue-600/10 mb-4 animate-pulse flex items-center justify-center border border-blue-500/20">
                          <div className="w-4 h-4 bg-blue-500 rounded-md"></div>
                       </div>
                       <div className="h-2 w-24 bg-zinc-800 rounded-full"></div>
                       <div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
                       <div className="h-2 w-20 bg-zinc-800 rounded-full"></div>
                       
                       <div className="mt-auto p-3 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                          <div className="h-2 w-full bg-white/10 rounded-full mb-2"></div>
                          <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                       </div>
                   </motion.div>

                   {/* Main View */}
                   <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px]">
                       {/* Floating UI Elements Parallax */}
                       <motion.div 
                          style={{ x: translateX, y: translateY }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-1/4 left-1/4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
                       >
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 relative border border-green-500/20">
                                <Zap size={24} fill="currentColor" className="opacity-80" />
                                <div className="absolute inset-0 rounded-xl border border-green-500/30 animate-ping"></div>
                             </div>
                             <div>
                                <div className="text-xs text-zinc-500 font-mono mb-1">LIGHTHOUSE SCORE</div>
                                <div className="text-2xl font-bold text-white font-outfit">100<span className="text-green-500 text-sm">/100</span></div>
                             </div>
                          </div>
                       </motion.div>

                       <motion.div 
                          style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]), y: useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "-20px"]) }}
                          animate={{ y: [0, 15, 0] }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-1/3 right-1/4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
                       >
                           <div className="flex items-center gap-4">
                               <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                   <MousePointer2 size={18} />
                               </div>
                               <div>
                                   <div className="text-sm font-medium text-white">Conversion Rate</div>
                                   <div className="text-xs text-zinc-400">+124% Increase</div>
                               </div>
                           </div>
                       </motion.div>
                       
                       {/* Abstract Center Visual */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[80px] rounded-full animate-pulse-slow"></div>
                   </div>
                </div>
            </div>
        </motion.div>

        {/* Infinite Scroll Marquee */}
        <div className="mt-32 pt-10 border-t border-white/5 overflow-hidden">
           <p className="text-xs text-zinc-600 mb-8 uppercase tracking-[0.3em] font-semibold">Our Digital Arsenal</p>
           <div className="relative flex overflow-x-hidden group">
             <motion.div 
               className="flex gap-20 whitespace-nowrap"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, ease: "linear", repeat: Infinity }}
             >
                {[...technologies, ...technologies].map((tech, index) => (
                  <span key={index} className="text-2xl font-bold text-zinc-800 hover:text-white transition-colors duration-500 cursor-default font-outfit">
                    {tech}
                  </span>
                ))}
             </motion.div>
             <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none"></div>
             <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none"></div>
           </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;