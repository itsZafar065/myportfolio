"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, LayoutDashboard, Database, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    desc: "Bespoke web applications built with Next.js, React, and Laravel for maximum scalability.",
    icon: <Code2 className="text-brandPurple" />,
    gradient: "group-hover:from-brandPurple/20",
  },
  {
    title: "WordPress Development",
    desc: "Tailored themes, WooCommerce stores, and custom plugins tailored to your business needs.",
    icon: <Smartphone className="text-brandBlue" />,
    gradient: "group-hover:from-brandBlue/20",
  },
  {
    title: "UI/UX Figma Design",
    desc: "Wireframes and high-fidelity prototypes designed in Figma with focus on user conversion.",
    icon: <LayoutDashboard className="text-brandOrange" />,
    gradient: "group-hover:from-brandOrange/20",
  },
  {
    title: "Project Management",
    desc: "Scope optimization, timeline tracking, and agile management ensuring successful deliveries.",
    icon: <Database className="text-brandGreen" />,
    gradient: "group-hover:from-brandGreen/20",
  },
  {
    title: "API Integrations",
    desc: "Seamless connection of external microservices, payment gateways, and databases.",
    icon: <Globe className="text-brandPurple" />,
    gradient: "group-hover:from-brandPurple/20",
  },
  {
    title: "Performance & SEO",
    desc: "Optimization of website loading speed, accessibility scores, and search engine visibility.",
    icon: <ShieldCheck className="text-brandBlue" />,
    gradient: "group-hover:from-brandBlue/20",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Glows for 3D Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandPurple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4 flex flex-col items-center justify-center w-full"
        >
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs">
            / My Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#38bdf8]">Solutions</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-background border border-foreground/5 hover:border-foreground/10 transition-all duration-500 cursor-pointer overflow-hidden shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-foreground/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
                
                <div className="pt-4 overflow-hidden">
                  <div className="h-[2px] w-12 bg-foreground/10 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-brandPurple to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}