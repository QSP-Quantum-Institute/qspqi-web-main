import { motion } from "framer-motion";
import type { SectionProps } from "../../common/types/sections";

interface AboutSectionProps extends SectionProps {
  title?: string;
  content?: string[];
  imageUrl?: string;
}

export function AboutSection({
  id = "about",
  className = "",
  title = "About Us",
  content = [
    "We are at the forefront of quantum computing research and innovation.",
    "Our mission is to advance the field of quantum science and make it accessible to everyone.",
  ],
  imageUrl,
}: AboutSectionProps) {
  return (
    <section id={id} className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="About us"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-gold-50 to-gold-100 rounded-lg shadow-xl flex items-center justify-center">
                  <span className="text-gold-300 text-6xl">QSP</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
