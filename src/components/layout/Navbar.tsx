"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NavLinkProps {
  href?: string;
  name: string;
  isButton?: boolean;
}

const NavLink = memo(({ href, name, isButton = false }: NavLinkProps) => {
  if (isButton) {
    return (
      <button className="flex items-center gap-1 text-foreground/70 hover:text-foreground text-sm font-medium transition-colors py-2 px-1 relative group">
        {name} 
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
    );
  }
  return (
    <Link href={href || "#"} className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors py-2 px-1 relative group">
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandBlue transition-all group-hover:w-full" />
    </Link>
  );
});

NavLink.displayName = "NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
      scrolled ? "py-2 md:py-4" : "py-6 md:py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between bg-white/70 dark:bg-[#030014]/70 backdrop-blur-xl border border-black/[0.06] dark:border-white/[0.08] px-4 md:px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "shadow-xl dark:shadow-brandBlue/5 border-black/[0.04] dark:border-white/[0.04]" : ""
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-[10001]">
            <div className="w-10 h-10 bg-gradient-to-br from-brandBlue to-brandGreen rounded-xl flex items-center justify-center font-black text-white shadow-lg group-hover:rotate-12 transition-all duration-500">
              ZM
            </div>
            <span className="text-foreground font-bold tracking-tighter text-xl">
              Zafar<span className="text-foreground/40 font-normal">Muhammad</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
              >
                <NavLink href={link.href} name={link.name} />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 relative z-[10001]">
            <ThemeToggle />
            <Link 
              href="/contact" 
              className="hidden md:flex premium-button"
            >
              <span className="premium-button-content">
                Get in Touch <ArrowRight size={14} />
              </span>
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2.5 text-foreground bg-foreground/5 rounded-xl border border-foreground/10 hover:bg-foreground/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <motion.div animate={isOpen ? "open" : "closed"}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-2xl z-[10000] lg:hidden overflow-y-auto"
          >
             <div className="min-h-screen flex flex-col justify-between p-8 pt-32">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-4xl font-black text-foreground hover:text-brandBlue transition-all flex items-center justify-between group"
                      >
                        {link.name}
                        <ArrowRight size={28} className="text-foreground/20 group-hover:text-brandBlue group-hover:translate-x-2 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 space-y-8 pb-10">
                   <div className="space-y-4">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/40">Say Hello</p>
                      <Link href="mailto:channazafar66@gmail.com" className="text-2xl font-bold text-foreground hover:text-brandBlue transition-colors">
                        channazafar66@gmail.com
                      </Link>
                   </div>
                   
                   <div className="flex gap-6">
                      <Link href="https://www.linkedin.com/in/zafarmuhammadd/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brandBlue hover:text-white hover:border-brandBlue transition-all">
                         <Linkedin size={20} />
                      </Link>
                   </div>
                   
                   <Link 
                     href="/contact" 
                     onClick={() => setIsOpen(false)} 
                     className="premium-button w-full h-16 rounded-2xl"
                   >
                     <span className="premium-button-content text-lg">
                       Get in Touch <ArrowRight size={20} />
                     </span>
                   </Link>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}