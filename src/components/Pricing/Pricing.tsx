"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Building2 } from "lucide-react";

const plans = [
  {
    name: "Hourly Support",
    price: "25",
    Icon: Zap,
    features: [
      "Figma UI/UX tweaks & revisions",
      "Next.js / WordPress bug fixing",
      "Component level integrations",
      "Hourly work progress reports",
      "Direct WhatsApp / Slack sync"
    ],
    color: "#a855f7",
    gradient: "from-brandPurple/20 to-transparent",
    border: "group-hover:border-brandPurple/50"
  },
  {
    name: "Project-Based",
    price: "500",
    popular: true,
    Icon: Rocket,
    features: [
      "Complete Next.js Web App build",
      "E-Commerce website solution",
      "Custom Figma to React conversion",
      "Tailored administration panel",
      "2-weeks post launch support"
    ],
    color: "#38bdf8",
    gradient: "from-brandBlue/20 to-transparent",
    border: "border-brandBlue/40"
  },
  {
    name: "Monthly Retainer",
    price: "1,200",
    Icon: Building2,
    features: [
      "Dedicated Full Stack dev hours",
      "Sprint planning & scoping",
      "CMS / API systems engineering",
      "Figma wireframes & designs",
      "Priority developer assistance"
    ],
    color: "#4ade80",
    gradient: "from-brandGreen/20 to-transparent",
    border: "group-hover:border-brandGreen/50"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 flex flex-col items-center justify-center w-full"
        >
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
            / Engagement Models
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4">
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#38bdf8]">Pricing</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brandPurple to-brandBlue mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.Icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative bg-background border border-foreground/5 rounded-3xl p-8 shadow-xl transition-all duration-500 ${plan.border}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brandPurple to-brandBlue text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-md">
                    Most Popular
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-b ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`} />

                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-foreground/5 w-fit rounded-2xl border border-foreground/10">
                    <IconComponent size={28} style={{ color: plan.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-black text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/40 text-sm">
                      {plan.name === "Hourly Support" ? "/hr" : plan.name === "Monthly Retainer" ? "/mo" : "/start"}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-foreground/60 text-sm">
                        <Check size={16} className="text-brandPurple" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all
                    ${plan.popular 
                      ? 'bg-gradient-to-r from-brandPurple to-brandBlue text-white hover:opacity-95 shadow-md shadow-brandPurple/10' 
                      : 'bg-foreground/5 text-foreground border border-foreground/10 hover:bg-foreground/10'}`}>
                    Choose Model
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}