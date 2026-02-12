
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Plus, X, Send, User, Briefcase, MessageSquare } from 'lucide-react';

const initialTestimonials = [
  {
    id: 1,
    rating: 5,
    content: "The QR menu system is a game-changer for our restaurant. Customers love that they don't need to download an app, and we love how easy it is to update prices instantly during rush hours.",
    author: "Amit Malhotra",
    role: "Owner at The Royal Tandoor",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?fit=crop&w=150&h=150"
  },
  {
    id: 8,
    rating: 5,
    content: "The dynamic pricing feature on the QR menu is brilliant. We can change prices for our lunch specials instantly without printing new menus every day. It's saved us so much printing cost.",
    author: "Rahul Verma",
    role: "Owner at Spice Garden",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=150&h=150"
  },
  {
    id: 2,
    rating: 5,
    content: "Webwrap transformed our vision into a digital reality. The team's understanding of the Indian market nuances combined with global design standards gave us a significant competitive edge.",
    author: "Aravind Patel",
    role: "Founder at TechFlow India",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150"
  },
  {
    id: 9,
    rating: 5,
    content: "Our customers love the contactless ordering experience. The QR codes are scan-friendly even in dim lighting, which was a huge issue with our previous vendor.",
    author: "Meera Reddy",
    role: "Manager at Chai Point",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?fit=crop&w=150&h=150"
  },
  {
    id: 3,
    rating: 5,
    content: "Since switching to Webwrap's QR menus, our table turnover improved by 15%. The interface is so slick and modern compared to the PDF links we used to have at our cafes.",
    author: "Sneha Kapoor",
    role: "Manager at Brew & Bean",
    image: "https://images.unsplash.com/photo-1629425733761-caacece43572?fit=crop&w=150&h=150"
  },
  {
    id: 10,
    rating: 5,
    content: "Webwrap's QR menu load time is incredibly fast. Even with poor network reception in our basement seating area, customers can access the menu without lag.",
    author: "Arjun Das",
    role: "Founder of Curry & Co.",
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?fit=crop&w=150&h=150"
  },
  {
    id: 4,
    rating: 4,
    content: "The AI chatbot integration drastically reduced our support tickets. I'm giving 4 stars only because the initial setup took a bit longer than expected, but the results were definitely worth the wait.",
    author: "Priya Sharma",
    role: "Marketing Director at LuxeRetail",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?fit=crop&w=150&h=150"
  },
  {
    id: 11,
    rating: 5,
    content: "Updating the menu used to be a weekly headache. Now, I just edit the dashboard and the QR menu updates automatically. It saves us hours of work.",
    author: "Kavita Iyer",
    role: "Operations Head at The Bombay Canteen",
    image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?fit=crop&w=150&h=150"
  },
  {
    id: 5,
    rating: 5,
    content: "We needed a robust, high-performance platform for our fintech operations. Webwrap delivered a secure, lightning-fast solution that our investors love.",
    author: "Rohan Mehta",
    role: "CTO at FinServe Capital",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=150&h=150"
  },
  {
    id: 12,
    rating: 5,
    content: "We saw a 20% increase in dessert orders because the QR menu suggests pairings. The visual appeal of the digital menu is far superior to paper.",
    author: "Deepa Nair",
    role: "Owner at Coastal Flavours",
    image: "https://images.unsplash.com/photo-1583900985261-f8ad8120216c?fit=crop&w=150&h=150"
  },
  {
    id: 6,
    rating: 5,
    content: "The attention to detail is phenomenal. From the micro-interactions to the seamless mobile experience, they exceeded our expectations in every way.",
    author: "Ananya Gupta",
    role: "Product Lead at InnovateEd",
    image: "https://images.unsplash.com/photo-1598550832454-d3a1fc6d0c6d?fit=crop&w=150&h=150"
  },
  {
    id: 7,
    rating: 4,
    content: "Working with Abhay and Gaurav was great. They treated our project like their own. I wish the documentation was a bit more detailed, but their support team made up for it quickly.",
    author: "Vikram Singh",
    role: "CEO at UrbanLogistics",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=150&h=150"
  }
];

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Form State
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-swipe functionality
  useEffect(() => {
    if (!isPaused && !isFormOpen) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }, 4000); // Swipe every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, isFormOpen, reviews.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;

    const reviewToAdd = {
      id: Date.now(),
      author: newReview.name,
      role: newReview.role,
      content: newReview.content,
      rating: newReview.rating,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newReview.name)}&background=random&color=fff`
    };

    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: '', role: '', content: '', rating: 5 });
    setIsFormOpen(false);
    setActiveIndex(0); // Go to start to see the new review
  };

  // Helper to get the subset of testimonials to show based on activeIndex and circular wrapping
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (activeIndex + i) % reviews.length;
      items.push(reviews[index]);
    }
    return items;
  };

  return (
    <div className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight font-outfit">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Our Clients</span> Say
            </h2>
            <p className="text-lg text-zinc-400 font-light">
              Hear directly from our satisfied partners about their journey with Webwrap.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
             <button 
               onClick={prevSlide}
               className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all focus:outline-none"
             >
               <ChevronLeft size={20} />
             </button>
             <button 
               onClick={nextSlide}
               className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] focus:outline-none"
             >
               <ChevronRight size={20} />
             </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div 
          className="relative mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div 
               layout
               className={`grid gap-6`}
               style={{ 
                 gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))` 
               }}
            >
              <AnimatePresence mode="popLayout">
                {getVisibleTestimonials().map((t) => (
                  <motion.div
                    key={`${t.id}-${activeIndex}`} // Force re-render on slide change for animation
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full"
                  >
                     <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/[0.07] transition-colors relative overflow-hidden">
                        
                        {/* Quote Icon Background */}
                        <div className="absolute top-6 left-6 opacity-10 text-white pointer-events-none">
                           <Quote size={80} fill="currentColor" />
                        </div>

                        <div className="relative z-10">
                           {/* Stars with Animation */}
                           <div className="flex gap-1 mb-6">
                             {[...Array(5)].map((_, i) => (
                               <motion.div
                                 key={i}
                                 initial={{ opacity: 0, scale: 0, y: 10 }}
                                 animate={{ opacity: 1, scale: 1, y: 0 }}
                                 transition={{ 
                                   duration: 0.3, 
                                   delay: 0.2 + (i * 0.1), 
                                   type: "spring",
                                   stiffness: 200,
                                   damping: 10
                                 }}
                               >
                                 <Star 
                                   size={16} 
                                   className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-700'}`} 
                                 />
                               </motion.div>
                             ))}
                           </div>

                           {/* Content */}
                           <p className="text-zinc-300 text-lg leading-relaxed mb-8 font-light relative">
                             "{t.content}"
                           </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/5">
                           <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                              <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white text-base">{t.author}</h4>
                              <p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">{t.role}</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
        </div>

        {/* Add Review Section */}
        <div className="max-w-2xl mx-auto">
           {!isFormOpen ? (
             <motion.button
               onClick={() => setIsFormOpen(true)}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="w-full py-4 rounded-2xl border border-dashed border-white/20 text-zinc-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all flex items-center justify-center gap-3 group"
             >
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                 <Plus size={20} />
               </div>
               <span className="font-medium text-lg">Share your experience with us</span>
             </motion.button>
           ) : (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative"
             >
               <button 
                 onClick={() => setIsFormOpen(false)}
                 className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>

               <h3 className="text-2xl font-bold text-white mb-6">Write a Review</h3>
               
               <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                        <User size={14} /> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={newReview.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                        <Briefcase size={14} /> Role / Company
                      </label>
                      <input
                        type="text"
                        name="role"
                        required
                        value={newReview.role}
                        onChange={handleInputChange}
                        placeholder="e.g. CEO at Startup"
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium text-zinc-400">Rating</label>
                     <div className="flex gap-2">
                       {[1, 2, 3, 4, 5].map((star) => (
                         <button
                           key={star}
                           type="button"
                           onClick={() => handleRatingChange(star)}
                           className="focus:outline-none group transition-transform hover:scale-110"
                         >
                           <Star 
                             size={24} 
                             className={`${star <= newReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-700 hover:text-yellow-400'}`} 
                           />
                         </button>
                       ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                      <MessageSquare size={14} /> Your Review
                    </label>
                    <textarea
                      name="content"
                      required
                      rows={4}
                      value={newReview.content}
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience..."
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Review
                  </button>
               </form>
             </motion.div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
