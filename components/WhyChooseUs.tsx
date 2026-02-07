import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white font-outfit">
                Why leading brands <br />
                <span className="text-zinc-500">trust us.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light">
                We don't just write code. We partner with you to understand your business goals and deliver a digital product that drives real growth.
              </p>
            </motion.div>
            
            <div className="flex flex-col gap-4">
              {[
                "Direct communication with developers",
                "Weekly progress updates",
                "SEO-optimized architecture",
                "Blazing fast loading speeds"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-lg font-medium text-zinc-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-square rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl"
             >
                {/* Abstract Grid Visual */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                <div className="space-y-6 relative z-10">
                   {/* Uptime Card */}
                   <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow-xl transform translate-x-4 relative overflow-hidden"
                   >
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                      <div className="flex justify-between items-center mb-4">
                         <div className="text-zinc-400 font-medium font-outfit">Uptime Guarantee</div>
                         <div className="text-green-400 font-mono text-xs bg-green-400/10 px-2 py-1 rounded border border-green-500/20">99.9%</div>
                      </div>
                      <div className="w-full bg-black h-2 rounded-full overflow-hidden border border-white/5">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "99%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                         ></motion.div>
                      </div>
                   </motion.div>

                   {/* Performance Card */}
                   <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow-xl transform -translate-x-4 relative overflow-hidden"
                   >
                       <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <div className="flex justify-between items-center mb-4">
                         <div className="text-zinc-400 font-medium font-outfit">Core Web Vitals</div>
                         <div className="text-blue-400 font-mono text-xs bg-blue-400/10 px-2 py-1 rounded border border-blue-500/20">100ms</div>
                      </div>
                      <div className="flex gap-1.5 items-end h-12">
                         {[40, 60, 35, 70, 50, 90, 100].map((h, i) => (
                           <motion.div 
                             key={i}
                             initial={{ height: 0 }}
                             whileInView={{ height: `${h}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.5, delay: i * 0.1 }}
                             className="w-1/6 bg-blue-500/20 rounded-t-sm relative group overflow-hidden"
                           >
                             <div className={`absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-sm group-hover:bg-blue-400 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]`} style={{ height: '100%' }}></div>
                           </motion.div>
                         ))}
                      </div>
                   </motion.div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;