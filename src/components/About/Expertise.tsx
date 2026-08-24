"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js & Custom Softwares", percentage: 95, color: "var(--brand-purple)", desc: "Building interactive, lightning-fast web applications, admin portals, and custom web systems." },
  { name: "WordPress & WooCommerce", percentage: 90, color: "var(--brand-blue)", desc: "Custom WordPress setups, WooCommerce stores, theme overrides, and tailormade plugins." },
  { name: "Figma UI/UX Design", percentage: 85, color: "var(--brand-orange)", desc: "User-centric wireframes, high-fidelity responsive mockups, and interaction prototypes." },
  { name: "Project Management", percentage: 80, color: "var(--brand-green)", desc: "Agile sprints, scope management, and direct project delivery mapping client requirements." },
];

export default function Expertise() {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs block mb-4">
              / My Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              My Expertise in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">Digital Engineering</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-8 leading-relaxed font-light">
              I blend technical code execution with clean visuals and solid project management. Every component I build is optimized for fast performance, modern SEO, and responsiveness.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Completed Projects", value: "10+" },
                { label: "Client Satisfaction", value: "99%" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-foreground/5 bg-foreground/5 dark:bg-white/5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-foreground/40 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div className="max-w-sm">
                    <h4 className="text-lg font-bold text-foreground">{skill.name}</h4>
                    <p className="text-foreground/50 text-xs mt-1">{skill.desc}</p>
                  </div>
                  <span className="text-xl font-bold text-foreground/20 italic">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-foreground/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
