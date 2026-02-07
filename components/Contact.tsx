import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');
    
    // EMAILJS CREDENTIALS
    const SERVICE_ID = 'service_24vynlh';
    const TEMPLATE_ID = 'template_f9u6vns';
    const PUBLIC_KEY = 'bmN8J4y10vnt0jvlh';

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-32 bg-[#030303] relative overflow-hidden border-t border-white/5" id="contact">
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white font-outfit">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-700">launch?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto font-light">
              Let's discuss your project. We offer free initial consultations to map out your digital strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
             {/* Contact Form */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center text-center p-6 space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="text-zinc-400">Thanks for reaching out. Abhay or Gaurav will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      ref={formRef} 
                      onSubmit={handleSubmit} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6 relative z-10 w-full"
                    >
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                             <input
                               type="text"
                               id="name"
                               name="name"
                               required
                               value={formState.name}
                               onChange={handleChange}
                               className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                               placeholder="John Doe"
                             />
                          </div>
                          <div className="space-y-2">
                             <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                             <input
                               type="email"
                               id="email"
                               name="email"
                               required
                               value={formState.email}
                               onChange={handleChange}
                               className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                               placeholder="john@example.com"
                             />
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                            placeholder="Tell us about your project..."
                          ></textarea>
                       </div>

                       {status === 'error' && (
                         <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                           <AlertCircle size={16} />
                           <span>Something went wrong. Please check the Service ID/Public Keys in code.</span>
                         </div>
                       )}

                       <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group relative flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-300 bg-white rounded-xl focus:outline-none hover:bg-zinc-200 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                       >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                          <span className="relative z-10 flex items-center gap-2">
                             {isSubmitting ? (
                               <>
                                 <Loader2 className="animate-spin" size={20} />
                                 Sending...
                               </>
                             ) : (
                               <>
                                 Send Message
                                 <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                               </>
                             )}
                          </span>
                       </button>
                    </motion.form>
                  )}
                </AnimatePresence>
             </motion.div>

             {/* Contact Details Side */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 flex flex-col justify-center space-y-8 h-full"
             >
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                  className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all"
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Mail size={20} className="text-blue-400" />
                      Email Us
                    </h3>
                    <a href="mailto:webwraponline@gmail.com" className="text-zinc-400 hover:text-white transition-colors block mb-1">webwraponline@gmail.com</a>
                    <p className="text-xs text-zinc-600">Response within 24 hours</p>
                </motion.div>

                <motion.div 
                   whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                   className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all"
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Phone size={20} className="text-green-400" />
                      Call Us
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between group">
                          <span className="text-sm font-medium text-zinc-500">Call Support</span>
                          <a href="tel:7055531270" className="text-zinc-300 group-hover:text-white transition-colors">7055531270</a>
                      </div>
                      <div className="h-px bg-white/5"></div>
                      <div className="flex items-center justify-between group">
                          <span className="text-sm font-medium text-zinc-500">Call Support</span>
                          <a href="tel:8449359646" className="text-zinc-300 group-hover:text-white transition-colors">8449359646</a>
                      </div>
                    </div>
                </motion.div>

                <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/5"
                >
                   <p className="text-zinc-400 text-sm leading-relaxed">
                     "The best way to predict the future is to create it." <br/>
                     <span className="text-zinc-600 text-xs mt-2 block">- Peter Drucker</span>
                   </p>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;