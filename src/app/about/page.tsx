"use client";
import React from "react";
import AboutHero from "../../components/About/AboutHero";
import Expertise from "../../components/About/Expertise";
import AboutValues from "../../components/About/AboutValues";
import AboutProcess from "../../components/About/AboutProcess";
import Testimonials from "../../components/About/AboutTestimonials";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-background transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutHero />
        <Expertise />
        <AboutValues />
        <AboutProcess />
        <Testimonials />
      </motion.div>
    </main>
  );
}
