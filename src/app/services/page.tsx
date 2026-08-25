"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Laptop, 
  Smartphone, 
  ShoppingBag, 
  LayoutDashboard, 
  Globe, 
  ShieldCheck, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Send
} from "lucide-react";
import Link from "next/link";
import TechMarquee from "@/components/sections/TechMarquee";

const detailedServices = [
  {
    num: "01",
    title: "Custom Web Development",
    desc: "I build fast, responsive, and secure frontend interfaces and custom applications matching your business metrics. Every layout is optimized for pixel-perfect execution.",
    icon: <Code2 size={24} className="text-[#38bdf8]" />,
    bgGlow: "from-[#38bdf8]/10",
    bullets: [
      "Next.js and React frontend structures",
      "Tailwind CSS responsive codebases",
      "Clean, scalable, and modular code",
      "SEO-friendly header tags & performance"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    cta: "Start Web Project"
  },
  {
    num: "02",
    title: "SaaS Development",
    desc: "Complete cloud systems built to handle secure user logins, user roles, databases, and admin dashboards for managing data.",
    icon: <LayoutDashboard size={24} className="text-[#a855f7]" />,
    bgGlow: "from-[#a855f7]/10",
    bullets: [
      "User authentication and authorization",
      "Interactive data visualization charts",
      "Secure SQL and NoSQL databases",
      "Scalable REST and GraphQL APIs"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    cta: "Build My SaaS"
  },
  {
    num: "03",
    title: "UI/UX Figma Design",
    desc: "Wireframes and high-fidelity prototypes crafted to deliver seamless interfaces and maximize conversion rates.",
    icon: <LayoutDashboard size={24} className="text-[#fb923c]" />,
    bgGlow: "from-[#fb923c]/10",
    bullets: [
      "User flows and wireframe layouts",
      "High-fidelity responsive UI mockups",
      "Reusable design component systems",
      "Interactive clickable prototypes"
    ],
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80",
    cta: "Design My UI"
  },
  {
    num: "04",
    title: "E-Commerce Solutions",
    desc: "Comprehensive online storefronts designed to streamline catalog browsing, shopping carts, and custom checkout flows.",
    icon: <ShoppingBag size={24} className="text-[#4ade80]" />,
    bgGlow: "from-[#4ade80]/10",
    bullets: [
      "WooCommerce & Shopify platforms",
      "Tailor-made product filter structures",
      "High-speed responsive shopping carts",
      "Inventory sync configurations"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    cta: "Open My Store"
  },
  {
    num: "05",
    title: "Payment Method Integrations",
    desc: "Compliance-first configuration of international checkout engines and local payment interfaces.",
    icon: <ShieldCheck size={24} className="text-[#38bdf8]" />,
    bgGlow: "from-[#38bdf8]/10",
    bullets: [
      "Stripe payment gateway APIs",
      "PayPal checkout SDK integrations",
      "Multi-currency support setups",
      "Secure encrypted checkouts"
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    cta: "Configure Payments"
  },
  {
    num: "06",
    title: "Third-Party API Integrations",
    desc: "Linking external databases, notification systems, customer relationship management tools, and social logins with your app.",
    icon: <Globe size={24} className="text-[#a855f7]" />,
    bgGlow: "from-[#a855f7]/10",
    bullets: [
      "Salesforce & Hubspot CRM connections",
      "Google Maps address auto-completes",
      "Twilio SMS & email delivery gateways",
      "Social login integrations"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    cta: "Integrate APIs"
  },
  {
    num: "07",
    title: "Open Source CMS Setup",
    desc: "Custom WordPress setups, theme editing, and headless content management systems for flexible content editing.",
    icon: <Laptop size={24} className="text-[#4ade80]" />,
    bgGlow: "from-[#4ade80]/10",
    bullets: [
      "WordPress theme overrides & setups",
      "Headless CMS setups (Strapi, Sanity)",
      "ACF and custom gutenberg blocks",
      "Page speed speed-up solutions"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    cta: "Setup My CMS"
  },
  {
    num: "08",
    title: "Premium Hosting & Deployments",
    desc: "Server setups, Vercel deployments, custom server management, and 24/7 uptime monitoring.",
    icon: <Cloud size={24} className="text-[#fb923c]" />,
    bgGlow: "from-[#fb923c]/10",
    bullets: [
      "Vercel, Netlify & AWS setups",
      "DNS configurations & SSL installs",
      "Automated CI/CD code deployments",
      "Uptime and server health monitoring"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    cta: "Configure Hosting"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-background pt-32 pb-20 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs">
            / Professional Services
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">Services</span>
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            I help businesses grow with tailored digital solutions, fast load times, and custom user-centric UI/UX layouts.
          </p>
        </div>
      </section>

      {/* Alternating Services Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {detailedServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.num} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                
                {/* Left/Right Text Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/30">
                      Step {service.num}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
                    {service.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-foreground/80 text-sm font-medium">
                        <CheckCircle size={16} className="text-[#4ade80] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link 
                      href="/contact" 
                      className="premium-button text-xs"
                    >
                      <span className="premium-button-content">
                        {service.cta} <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </motion.div>

                {/* Left/Right Mockup Image Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5 group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <TechMarquee />

      {/* Footer Call to Action Banner */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[40px] bg-foreground/5 border border-foreground/10 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background blur decorative lights */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brandPurple/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brandBlue/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs block">
                / Project Inquiry
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                Ready to Build a Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue font-bold">Web Product?</span>
              </h2>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
                Share your specifications, and we will formulate a developmental roadmap to construct your next-generation software.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="premium-button w-full sm:w-auto text-xs"
                >
                  <span className="premium-button-content">
                    Start a Project <Send size={14} />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="premium-button premium-button-secondary w-full sm:w-auto text-xs"
                >
                  <span className="premium-button-content">
                    Contact Me
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
