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
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 ${className}`}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-200 to-gold-300 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-dark mb-6"
          >
            {subtitle}
          </motion.p>

          {description && (
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gold text-white font-semibold rounded-lg shadow-lg hover:bg-gold-300 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
