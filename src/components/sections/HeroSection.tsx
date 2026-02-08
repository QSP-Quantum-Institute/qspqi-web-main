import { motion } from "framer-motion";
import type { SectionProps } from "../../common/types/sections";

interface HeroSectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function HeroSection({
  id = "hero",
  className = "",
  title = "QSP Quantum Institute",
  subtitle = "Welcome to the future of quantum computing",
  description,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(244,232,193,0.25) 50%, rgba(230,242,255,0.25) 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-dark/80 mb-8"
            style={{
              fontFamily: "Inter, Poppins, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-light text-dark/60 mb-8"
            style={{ letterSpacing: "0.02em" }}
          >
            {subtitle}
          </motion.p>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{ letterSpacing: "0.01em" }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
