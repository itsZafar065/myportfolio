"use client";
import React from "react";
import { motion } from "framer-motion";
import { Palette, Headset, Layout } from "lucide-react";

const values = [
  {
    icon: <Palette className="w-8 h-8 text-[#38bdf8]" />,
    title: "Professional Design",
    desc: "Our team crafts visually striking and user-friendly designs that not only look professional but also drive engagement and conversions. Every design is tailored to reflect your brand identity."
  },
  {
    icon: <Headset className="w-8 h-8 text-[#4ade80]" />,
    title: "Top-Notch Support",
    desc: "We don't just deliver and leave. Our dedicated support team is available 24/7 to ensure your systems run smoothly and any issues are resolved instantly."
  },
  {
    icon: <Layout className="w-8 h-8 text-[#fb923c]" />,
    title: "Header and Slider Options",
    desc: "We provide versatile UI options, including dynamic headers and high-impact sliders, giving your website a premium and interactive look that captures attention immediately."
  }
];

export default function AboutValues() {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground/[0.02] dark:bg-white/[0.02] border-y border-foreground/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-foreground mb-4">
            Why Choose <span className="text-[#fb923c]">Us?</span>
          </h2>
          <p className="text-foreground/60 text-lg font-light">
            We are committed to delivering excellence through core values that prioritize your success and brand reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-background border border-foreground/5 hover:border-[#38bdf8]/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-[#38bdf8]/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
