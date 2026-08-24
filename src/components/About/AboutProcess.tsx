"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover & Plan",
    desc: "We start by understanding your business, goals, and challenges to create a clear project roadmap tailored to your needs.",
    color: "#38bdf8"
  },
  {
    num: "02",
    title: "Design & Develop",
    desc: "Our team crafts intuitive designs and develops robust, scalable solutions, ensuring seamless performance across all devices.",
    color: "#4ade80"
  },
  {
    num: "03",
    title: "Launch & Support",
    desc: "After rigorous testing and client feedback, we launch your project and provide ongoing support to ensure long-term success.",
    color: "#fb923c"
  }
];

export default function AboutProcess() {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[32px] md:text-[48px] font-bold text-foreground mb-4 leading-tight">
              Our Structural <span className="text-[#4ade80]">Process</span>
            </h2>
            <p className="text-foreground/60 text-lg font-light">
              How we take your idea from a concept to a high-performing digital product.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-[#38bdf8]/20 rounded-full overflow-hidden">
                <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" as any }}
                   className="w-full h-full bg-[#38bdf8]" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-8xl font-black text-foreground/[0.03] dark:text-white/[0.03] absolute -top-12 -left-4 group-hover:text-foreground/[0.05] transition-colors duration-500">
                {step.num}
              </div>
              <div className="relative z-10">
                <div 
                  className="w-12 h-1 mb-8 rounded-full" 
                  style={{ backgroundColor: step.color }}
                />
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
                   {step.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
