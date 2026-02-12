
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, QrCode, Zap, BarChart3, ArrowRight, UtensilsCrossed, ChefHat } from 'lucide-react';

const QRMenu: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-yellow-400" />,
      title: "Lightning Fast",
      desc: "Load menus instantly without app downloads. Optimized for weak signals."
    },
    {
      icon: <UtensilsCrossed size={24} className="text-orange-400" />,
      title: "Real-time Updates",
      desc: "Sold out of the special? Update availability and prices in seconds."
    },
    {
      icon: <BarChart3 size={24} className="text-blue-400" />,
      title: "Smart Analytics",
      desc: "Track views, popular items, and peak hours to optimize your inventory."
    }
  ];

  return (
    <div className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                <QrCode size={14} />
                <span>Webwrap Exclusive</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-outfit">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Smartest Menu</span> <br/>
                In Town.
              </h2>
              
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-light">
                Elevate your dining experience with our proprietary QR platform. 
                Beautiful digital menus that look great on any device, update instantly, and drive 20% higher average order values.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                      <p className="text-sm text-zinc-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                <span>Get a Demo</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Visual - Phone Mockup */}
          <div className="lg:w-1/2 w-full flex justify-center perspective-[1000px] py-10">
            <motion.div
               initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
               whileInView={{ rotateY: -5, rotateX: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden"
            >
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
               
               {/* Screen Content */}
               <div className="w-full h-full bg-[#0a0a0a] overflow-hidden relative">
                  {/* App Header */}
                  <div className="h-40 bg-gradient-to-b from-orange-500/20 to-transparent p-6 pt-12 flex flex-col justify-end">
                     <div className="w-12 h-12 rounded-full bg-white/10 mb-4 backdrop-blur-sm flex items-center justify-center">
                        <ChefHat size={24} className="text-white" />
                     </div>
                     <h3 className="text-2xl font-bold text-white">The Urban Bistro</h3>
                     <p className="text-xs text-zinc-400">Open until 10 PM • 4.8 Stars</p>
                  </div>

                  {/* Menu Items Animation */}
                  <div className="p-4 space-y-4">
                     {[1, 2, 3].map((i) => (
                       <motion.div 
                         key={i}
                         initial={{ y: 20, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
                         className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                       >
                          <div className="w-16 h-16 rounded-lg bg-zinc-800 shrink-0 overflow-hidden relative">
                             {/* Placeholder food gradient */}
                             <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${i === 1 ? 'from-green-500 to-blue-500' : i === 2 ? 'from-red-500 to-orange-500' : 'from-yellow-500 to-pink-500'}`}></div>
                          </div>
                          <div className="flex-1">
                             <div className="h-3 w-3/4 bg-zinc-700 rounded-full mb-2"></div>
                             <div className="h-2 w-1/2 bg-zinc-800 rounded-full mb-3"></div>
                             <div className="flex justify-between items-center">
                                <div className="h-3 w-8 bg-orange-500/50 rounded-full"></div>
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                   <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                     ))}
                  </div>

                  {/* Floating Action Button inside phone */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center z-10"
                  >
                     <Smartphone size={24} className="text-white" />
                  </motion.div>
               </div>
            </motion.div>

            {/* Floating QR Card behind */}
            <motion.div
               initial={{ x: 50, opacity: 0, rotate: -10 }}
               whileInView={{ x: 80, opacity: 1, rotate: -5 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="absolute top-20 right-0 lg:-right-12 w-48 h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-4 -z-10"
            >
               <div className="bg-white p-2 rounded-lg shadow-lg">
                  <QrCode size={100} className="text-black" />
               </div>
               <p className="text-xs font-mono text-center text-zinc-400">Scan to view menu</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRMenu;
