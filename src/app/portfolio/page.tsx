"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Code2 } from "lucide-react";

// Categories definition
const categories = ["All", "WordPress", "Figma", "Next.js", "Custom Software"];

// Sample Data
const projectsData = [
  { id: 1, title: "Token System", category: "Next.js", image: "https://images.unsplash.com/photo-1551288049-bbda38a5f972?q=80&w=800", link: "#" },
  { id: 2, title: "Naeemi Fragrance e-commerce", category: "Next.js", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", link: "#" },
  { id: 3, title: "Custom ERP Software", category: "Next.js", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", link: "#" },
  { id: 4, title: "SaaS Dashboard Figma Mockup", category: "Figma", image: "https://images.unsplash.com/photo-1518186239717-2e9b13673d02?q=80&w=800", link: "#" },
  { id: 5, title: "Agency Website Figma Prototype", category: "Figma", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", link: "#" },
  { id: 6, title: "Portfolio Website Design", category: "Next.js", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", link: "#" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-foreground"
            >
              Our <span className="text-brandBlue">Portfolio</span>
            </motion.h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Check out some of our awesome projects with creative ideas and great design.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-foreground/5 p-4 rounded-3xl border border-foreground/10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat 
                    ? "bg-brandPurple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                    : "bg-foreground/5 text-foreground/40 hover:bg-foreground/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-foreground/10 rounded-full py-3 pl-12 pr-6 text-sm text-foreground focus:border-brandBlue outline-none transition-all"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-brandBlue/30 transition-all shadow-2xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-brandBlue transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 size={14} className="text-brandBlue" />
                      <span className="text-[10px] uppercase tracking-widest text-[#4ade80] font-bold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brandBlue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-foreground/50">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}