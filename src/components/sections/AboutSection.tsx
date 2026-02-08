import { motion } from "framer-motion";
import type { SectionProps } from "../../common/types/sections";

interface AboutSectionProps extends SectionProps {
  title?: string;
  content?: string[];
}

export function AboutSection({
  id = "about",
  className = "",
  title = "About Us",
  content = [
    "We are at the forefront of quantum computing research and innovation.",
    "Our mission is to advance the field of quantum science and make it accessible to everyone.",
  ],
}: AboutSectionProps) {
  return (
    <section id={id} className={`py-32 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl md:text-6xl font-light text-dark/80 mb-6"
              style={{
                fontFamily: "Inter, Poppins, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {title}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
                style={{ letterSpacing: "0.01em" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
