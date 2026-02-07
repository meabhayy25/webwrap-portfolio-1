import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "OpenAI", "Framer Motion", "PostgreSQL", "Supabase", "Prisma", "AWS", "Docker"
  ];

  return (
    <div className="py-24 bg-[#030303] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-500 text-xs font-bold mb-12 uppercase tracking-[0.2em]">Powering Next-Gen Experiences</p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
           {skills.map((skill, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
               className="px-8 py-4 rounded-xl bg-[#0a0a0a] border border-white/5 text-zinc-400 font-medium cursor-default transition-all duration-300 hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
             >
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 hover:from-white hover:to-white transition-all">
                 {skill}
               </span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;