import { motion } from "framer-motion";
import type { SectionProps, ServiceItem } from "../../common/types/sections";
import { Atom, Brain, Cpu, Zap } from "lucide-react";

interface ServicesSectionProps extends SectionProps {
  title?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "1",
    title: "Quantum Research",
    description:
      "Cutting-edge research in quantum computing and quantum information theory.",
  },
  {
    id: "2",
    title: "Education & Training",
    description:
      "Comprehensive courses and workshops for quantum computing enthusiasts.",
  },
  {
    id: "3",
    title: "Consulting Services",
    description:
      "Expert consulting for businesses looking to integrate quantum solutions.",
  },
  {
    id: "4",
    title: "Innovation Lab",
    description:
      "State-of-the-art facilities for quantum experiments and development.",
  },
];

export function ServicesSection({
  id = "services",
  className = "",
  title = "Our Services",
  services = defaultServices,
}: ServicesSectionProps) {
  const icons = [Atom, Brain, Cpu, Zap];

  return (
    <section
      id={id}
      className={`py-32 bg-white ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(244,232,193,0.15) 50%, rgba(230,242,255,0.15) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold/70" />
                    </div>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-light text-dark/80 mb-4"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base md:text-lg text-gray-600 leading-relaxed"
                    style={{ letterSpacing: "0.01em" }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
