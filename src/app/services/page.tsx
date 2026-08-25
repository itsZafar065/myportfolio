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
  Send,
  Database
} from "lucide-react";
import Link from "next/link";

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
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    cta: "Configure Hosting"
  }
];

const techStack = [
  { name: "HTML5", icon: "html5/html5-original", borderHoverColor: "#e34f26", shadowColor: "rgba(227, 79, 38, 0.15)" },
  { name: "CSS3", icon: "css3/css3-original", borderHoverColor: "#1572b6", shadowColor: "rgba(21, 114, 182, 0.15)" },
  { name: "Javascript", icon: "javascript/javascript-original", borderHoverColor: "#f7df1e", shadowColor: "rgba(247, 223, 30, 0.15)" },
  { name: "Typescript", icon: "typescript/typescript-original", borderHoverColor: "#3178c6", shadowColor: "rgba(49, 120, 198, 0.15)" },
  { name: "React", icon: "react/react-original", borderHoverColor: "#61dafb", shadowColor: "rgba(97, 218, 251, 0.15)" },
  { name: "NextJS", icon: "nextjs/nextjs-original", borderHoverColor: "#808080", shadowColor: "rgba(128, 128, 128, 0.15)" },
  { name: "TailwindCSS", icon: "tailwindcss/tailwindcss-original", borderHoverColor: "#38bdf8", shadowColor: "rgba(56, 189, 248, 0.15)" },
  { name: "Figma", icon: "figma/figma-original", borderHoverColor: "#f24e1e", shadowColor: "rgba(242, 78, 30, 0.15)" },
  { name: "PHP", icon: "php/php-original", borderHoverColor: "#777bb4", shadowColor: "rgba(119, 123, 180, 0.15)" },
  { name: "Laravel", icon: "laravel/laravel-original", borderHoverColor: "#ff2d20", shadowColor: "rgba(255, 45, 32, 0.15)" },
  { name: "NodeJS", icon: "nodejs/nodejs-original", borderHoverColor: "#339933", shadowColor: "rgba(51, 153, 51, 0.15)" },
  { name: "Express", icon: "express/express-original", borderHoverColor: "#808080", shadowColor: "rgba(128, 128, 128, 0.15)" },
  { name: "MySQL", icon: "mysql/mysql-original", borderHoverColor: "#4479a1", shadowColor: "rgba(68, 121, 161, 0.15)" },
  { name: "MongoDB", icon: "mongodb/mongodb-original", borderHoverColor: "#47a248", shadowColor: "rgba(71, 162, 72, 0.15)" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original", borderHoverColor: "#336791", shadowColor: "rgba(51, 103, 145, 0.15)" },
  { name: "Firebase", icon: "firebase/firebase-original", borderHoverColor: "#ffca28", shadowColor: "rgba(255, 202, 40, 0.15)" },
  { name: "GraphQL", icon: "graphql/graphql-plain", borderHoverColor: "#e10098", shadowColor: "rgba(225, 0, 152, 0.15)" },
  { name: "WordPress", icon: "wordpress/wordpress-plain", borderHoverColor: "#21759b", shadowColor: "rgba(33, 117, 155, 0.15)" },
  { name: "Git", icon: "git/git-original", borderHoverColor: "#f05032", shadowColor: "rgba(240, 80, 50, 0.15)" },
  { name: "GitHub", icon: "github/github-original", borderHoverColor: "#808080", shadowColor: "rgba(128, 128, 128, 0.15)" },
  { name: "Docker", icon: "docker/docker-original", borderHoverColor: "#2496ed", shadowColor: "rgba(36, 150, 237, 0.15)" },
  { name: "Python", icon: "python/python-original", borderHoverColor: "#3776ab", shadowColor: "rgba(55, 118, 171, 0.15)" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark", borderHoverColor: "#ff9900", shadowColor: "rgba(255, 153, 0, 0.15)" },
  { name: "Redux", icon: "redux/redux-original", borderHoverColor: "#764abc", shadowColor: "rgba(118, 74, 188, 0.15)" }
];

export default function ServicesPage() {
  return (
    <main className="bg-background pt-24 md:pt-32 pb-16 md:pb-20 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="relative pb-10 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs">
            / Professional Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground leading-tight">
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue">Services</span>
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            I help businesses grow with tailored digital solutions, fast load times, and custom user-centric UI/UX layouts.
          </p>
        </div>
      </section>

      {/* Alternating Services Sections */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 sm:space-y-24 md:space-y-32">
          {detailedServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.num} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center"
              >
                
                {/* Left/Right Text Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brandBlue bg-brandBlue/5 px-3 py-1.5 rounded-full">
                      {service.num}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
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

                  <div className="pt-2">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[32px] overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5 group">
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

      {/* Custom Designed Grid Technology Stack (Exactly like Screenshot) */}
      <section className="py-16 md:py-24 bg-foreground/[0.01] dark:bg-white/[0.01] border-y border-foreground/5 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
            <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-xs">
              / Stacks &amp; Frameworks
            </span>
            <h2 className="text-2xl md:text-5xl font-black text-foreground">
              Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandBlue font-bold">Stack</span>
            </h2>
            <p className="text-foreground/60 text-sm md:text-base font-light">
              A comprehensive set of modern frameworks, databases, and third-party tools optimized for scalable systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {techStack.map((tech, index) => {
              const isExpress = tech.name === "Express";
              const isNext = tech.name === "NextJS";
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -8,
                    borderColor: tech.borderHoverColor,
                    boxShadow: `0 12px 30px ${tech.shadowColor}`
                  }}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-foreground/5 bg-background dark:bg-[#08051a] flex flex-col items-center justify-center gap-3 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`} 
                      alt={tech.name}
                      className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${isExpress || isNext ? "dark:invert" : ""}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (tech.name === "Express") {
                          target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg";
                        }
                        if (tech.name === "NextJS") {
                          target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg";
                        }
                        if (tech.name === "AWS") {
                          target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
                        }
                      }}
                    />
                  </div>
                  <span className="text-foreground/80 font-bold text-xs tracking-tight group-hover:text-foreground transition-colors text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Call to Action Banner */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 md:p-16 rounded-3xl sm:rounded-[40px] bg-foreground/5 border border-foreground/10 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background blur decorative lights */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brandPurple/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brandBlue/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs block">
                / Project Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground leading-tight">
                Ready to Build a Scalable <br className="hidden sm:block" />
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
