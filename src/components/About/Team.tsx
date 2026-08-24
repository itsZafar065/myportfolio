"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Ali Paras",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    color: "brandBlue"
  },
  {
    name: "Muhammad Subhan",
    role: "Lead Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    color: "brandGreen"
  },
  {
    name: "Muhammad Ahmed",
    role: "UI/UX Designer & Creative Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    color: "brandOrange"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-foreground/[0.02] dark:bg-white/[0.02] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-foreground mb-4">
             Meet the <span className="text-brandBlue">Experts</span>
          </h2>
          <p className="text-foreground/60 text-lg font-light leading-relaxed">
            Our team of dedicated professionals is committed to bringing your vision to life with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group "
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                 <Image 
                   src={member.image} 
                   alt={member.name} 
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                 
                 {/* Social links on hover */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-brandBlue hover:text-white transition-colors cursor-pointer shadow-lg">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer shadow-lg">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer shadow-lg">
                      <Github className="w-4 h-4" />
                    </div>
                 </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-foreground mb-1 group-hover:text-brandBlue transition-colors">{member.name}</h4>
                <p className="text-foreground/50 text-sm font-medium uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
