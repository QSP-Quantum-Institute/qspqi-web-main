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
      className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}
    >
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
