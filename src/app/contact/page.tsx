"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPage() {
  return (
    <main className="bg-background transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-xs">
              / Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              Let us create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandGreen">exceptional</span> together.
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Trusted by over 5,000 clients, we help businesses grow with tailored digital solutions and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-foreground/60 leading-relaxed">
                Share your ideas with us, and our team will craft a plan that turns them into scalable, high-performance digital products. We focus on innovation, quality, and results to ensure your success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-brandBlue group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold text-foreground">hello@codecreatives.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-brandGreen group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold text-foreground">+92 300 1234567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Container */}
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                 <MapPin size={20} className="text-brandBlue" /> Our Location
               </h3>
               <div className="w-full h-[350px] rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1306387848694!2d67.0681!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDQnMDYuMCJF!5e0!3m2!1sen!2s!4v1623456789012!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
                    allowFullScreen 
                    loading="lazy"
                    className="dark:opacity-80 transition-opacity"
                    title="office location"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border border-foreground/5 group-hover:border-brandBlue/20 transition-all rounded-3xl" />
               </div>
               <p className="text-foreground/50 text-sm italic">Street 12, Tech Hub, Phase 6, Karachi, Pakistan</p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-foreground/5 border border-foreground/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandBlue/10 blur-[60px] rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                <p className="text-foreground/50 text-sm">We will get back to you within 24 hours.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" required placeholder="First Name" 
                    className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all"
                  />
                  <input 
                    type="text" required placeholder="Last Name" 
                    className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all"
                  />
                </div>

                <input 
                  type="email" required placeholder="Email Address" 
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all"
                />

                <input 
                  type="tel" required placeholder="Phone Number" 
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all"
                />

                <textarea 
                  required rows={4} placeholder="Your Message" 
                  className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all resize-none"
                ></textarea>

                <Magnetic>
                  <button className="premium-button w-full">
                    <span className="premium-button-content">
                      Send Message <Send size={18} />
                    </span>
                  </button>
                </Magnetic>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Extra Section 1: Support Channels */}
      <section className="py-20 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground">More Ways to Connect</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Technical Support", icon: MessageSquare, desc: "Need help with a project?", link: "support@codecreatives.com" },
                { title: "Business Hours", icon: Clock, desc: "Mon - Fri: 9AM - 6PM", link: "pk.codecreatives.com" },
                { title: "Global Presence", icon: Globe, desc: "Work with us from anywhere.", link: "remote.codecreatives.com" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-background border border-foreground/5 text-center space-y-4 hover:shadow-2xl transition-all group">
                   <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto text-foreground group-hover:bg-brandBlue group-hover:text-white transition-all">
                      <item.icon size={30} />
                   </div>
                   <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                   <p className="text-foreground/50 text-sm">{item.desc}</p>
                   <p className="text-brandBlue font-medium text-sm">{item.link}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Extra Section 2: FAQ Brief */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-foreground">Frequently Asked Questions</h2>
              <p className="text-foreground/50">Everything you need to know about our process.</p>
           </div>

           <div className="space-y-6">
              {[
                { q: "How long does a typical project take?", a: "Most projects range from 4 to 12 weeks depending on complexity." },
                { q: "Do you provide post-launch support?", a: "Yes, we offer monthly maintenance and scaling support for all our clients." },
                { q: "What technologies do you specialize in?", a: "We excel in Laravel, MERN Stack, Next.js, and Mobile App Development." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors">
                   <h5 className="font-bold text-foreground mb-2">/ {faq.q}</h5>
                   <p className="text-foreground/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
