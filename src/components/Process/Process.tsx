"use client";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover & Plan",
    desc: "I start by understanding your goals, specifications, and workflows to create a clear project roadmap tailored to your needs.",
    icon: <Search className="text-brandPurple" size={32} />,
    color: "from-brandPurple/20 to-transparent",
    border: "border-brandPurple/30"
  },
  {
    id: "02",
    title: "Design & Develop",
    desc: "I design high-fidelity layouts in Figma and build them using Next.js or WordPress, ensuring pixel-perfect responsive execution.",
    icon: <PenTool className="text-brandBlue" size={32} />,
    color: "from-brandBlue/20 to-transparent",
    border: "border-brandBlue/30"
  },
  {
    id: "03",
    title: "Launch & Support",
    desc: "After rigorous testing, the website or custom software is deployed. I provide post-launch support to guarantee stable performance.",
    icon: <Rocket className="text-brandGreen" size={32} />,
    color: "from-brandGreen/20 to-transparent",
    border: "border-brandGreen/30"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brandPurple font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs"
          >
            / How it works?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mt-4 leading-tight"
          >
            My 3-step process to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#38bdf8] font-bold">deliver digital solutions.</span>
          </motion.h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step Card */}
              <div className={`relative z-10 bg-background border border-foreground/5 ${step.border} rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-4 shadow-2xl overflow-hidden`}>
                
                {/* Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Step Number & Icon */}
                <div className="flex justify-between items-start mb-8 sm:mb-12 relative z-10">
                  <div className="p-4 bg-foreground/5 rounded-2xl border border-foreground/10 text-foreground group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-brandPurple transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brandPurple to-brandBlue group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandPurple/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}