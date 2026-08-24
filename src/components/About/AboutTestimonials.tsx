"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sarah J.",
    role: "SaaS Founder",
    text: "Zafar was a game-changer for our dashboard launch. He built a custom token integration system in Next.js that performs flawlessly."
  },
  {
    name: "David L.",
    role: "E-Commerce Business Owner",
    text: "I hired Zafar to build the Naeemi Fragrance web shop. The Next.js integration is extremely fast, and our checkout conversions went up instantly!"
  },
  {
    name: "Ayesha K.",
    role: "Tech Startup CEO",
    text: "Zafar's code structure is top-notch. In addition to React, his project management background made the scoping process extremely easy and stress-free."
  },
  {
    name: "James W.",
    role: "E-Commerce Manager",
    text: "Professional, responsive, and highly skilled in Figma translations. He converted our visual wireframes into pixel-perfect custom software."
  },
  {
    name: "Robert M.",
    role: "Agency Director",
    text: "Zafar is my primary developer for complex React architectures. Reliable support and stable, fast deliveries every single time."
  }
];

export default function AboutTestimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandPurple/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            / Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            What My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">Clients</span> Say
          </h2>
          <p className="text-foreground/60 text-base md:text-lg font-light">
            Real feedback from the businesses and founders I&apos;ve collaborated with.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-16 !overflow-visible"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between h-full min-h-[300px] transition-all duration-500 hover:border-brandPurple/30 hover:shadow-2xl hover:shadow-brandPurple/5"
              >
                <div>
                  <Quote className="w-8 h-8 text-brandPurple/20 mb-6" />
                  <p className="text-foreground/80 leading-relaxed italic mb-8 text-sm md:text-base font-light">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-foreground/5 pt-6 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brandPurple to-brandBlue flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm">{t.name}</h5>
                    <p className="text-foreground/45 text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: var(--foreground) !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #a855f7 !important; opacity: 1; }
      `}</style>
    </section>
  );
}
