"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "Token System",
    category: "Next.js / Custom Software",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f972?q=80&w=800",
    desc: "Custom token generation and management workflow."
  },
  {
    title: "Naeemi Fragrance",
    category: "Next.js / E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
    desc: "Premium Next.js fragrance online shop."
  },
  {
    title: "Custom ERP Software",
    category: "Next.js / Custom Software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    desc: "Business resource planning and custom analytics."
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
            / Selected Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            Engineering <span className="text-foreground/40 font-light">Masterpieces</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brandBlue to-brandGreen mx-auto rounded-full" />
        </motion.div>

        {/* CAROUSEL */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-16 !overflow-visible"
        >
          {duplicatedProjects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative w-full max-w-[360px] bg-foreground/[0.03] rounded-3xl border border-foreground/5 overflow-hidden flex flex-col items-center text-center p-4 transition-all duration-500 hover:border-brandBlue/30 hover:shadow-2xl hover:shadow-brandBlue/5 backdrop-blur-sm"
              >
                {/* Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-all" />
                </div>

                {/* Content */}
                <div className="space-y-3 pb-4">
                  <span className="text-brandGreen font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-brandGreen/10 border border-brandGreen/20">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-brandBlue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/50 text-xs md:text-sm leading-relaxed max-w-[280px] font-light italic">
                    &quot;{project.desc}&quot;
                  </p>
                  
                  <button className="mt-4 flex items-center gap-2 text-foreground text-[11px] font-bold uppercase tracking-widest mx-auto group-hover:text-brandBlue transition-all">
                    View Project <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: var(--foreground) !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #38bdf8 !important; opacity: 1; }
      `}</style>
    </section>
  );
}