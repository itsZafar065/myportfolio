"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { id: 1, img: "https://codecreatives.com/uploads/clients/Client-1765544585.png" },
  { id: 2, img: "https://codecreatives.com/uploads/clients/Client-1765544615.png" },
  { id: 3, img: "https://codecreatives.com/uploads/clients/Client-1765544680.png" },
  { id: 4, img: "https://codecreatives.com/uploads/clients/Client-1765544796.png" },
  { id: 5, img: "https://codecreatives.com/uploads/clients/Client-1759564861.jpeg" },
  { id: 6, img: "https://codecreatives.com/uploads/clients/Client-1759567744.png" },
  { id: 7, img: "https://codecreatives.com/uploads/clients/Client-1759568322.png" },
  { id: 8, img: "https://codecreatives.com/uploads/clients/Client-1759568849.png" },
  { id: 9, img: "https://codecreatives.com/uploads/clients/Client-1759570250.png" },
  { id: 10, img: "https://codecreatives.com/uploads/clients/Client-1759571931.png" },
];

export default function Clients() {
  return (
    <section className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CENTERED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
            / Valued Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
            Trusted by over <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/40 to-foreground">300+ clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brandBlue to-brandGreen mx-auto rounded-full mt-4" />
          <p className="text-foreground/40 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light italic">
            &quot;We bring solutions to make life easier for our customers through cutting-edge engineering and strategic digital partnerships.&quot;
          </p>
        </motion.div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -5, 
              }}
              className="relative h-32 md:h-40 bg-foreground/[0.03] border border-foreground/5 rounded-3xl flex items-center justify-center p-8 group transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative w-full h-full">
                <Image 
                  src={logo.img} 
                  alt="Client Logo" 
                  fill
                  className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative background light */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}