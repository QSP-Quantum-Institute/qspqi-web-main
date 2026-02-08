import { motion } from "framer-motion";
import type { SectionProps, ContactInfo } from "../../common/types/sections";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

interface ContactSectionProps extends SectionProps {
  title?: string;
  contactInfo?: ContactInfo;
}

const defaultContactInfo: ContactInfo = {
  email: "contact@qspqi.org",
  phone: "+1 (555) 123-4567",
  address: "123 Quantum Street, Science City",
  social: {
    linkedin: "https://linkedin.com/company/qspqi",
    twitter: "https://twitter.com/qspqi",
    github: "https://github.com/qspqi",
  },
};

export function ContactSection({
  id = "contact",
  className = "",
  title = "Get in Touch",
  contactInfo = defaultContactInfo,
}: ContactSectionProps) {
  return (
    <section id={id} className={`py-32 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ letterSpacing: "0.01em" }}
            >
              We'd love to hear from you. Reach out to us through any of the
              following channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {contactInfo.email && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold/70" />
                  </div>
                  <div>
                    <p
                      className="font-light text-dark/70 mb-1"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg text-gray-600 hover:text-gold transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold/70" />
                  </div>
                  <div>
                    <p
                      className="font-light text-dark/70 mb-1"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-lg text-gray-600 hover:text-gold transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              )}

              {contactInfo.address && (
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold/70" />
                  </div>
                  <div>
                    <p
                      className="font-light text-dark/70 mb-1"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      Address
                    </p>
                    <p className="text-lg text-gray-600">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              )}

              {contactInfo.social && (
                <div className="pt-8">
                  <p
                    className="font-light text-dark/70 mb-4"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    Follow Us
                  </p>
                  <div className="flex space-x-4">
                    {contactInfo.social.linkedin && (
                      <motion.a
                        href={contactInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gold/70" />
                      </motion.a>
                    )}
                    {contactInfo.social.twitter && (
                      <motion.a
                        href={contactInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-gold/70" />
                      </motion.a>
                    )}
                    {contactInfo.social.github && (
                      <motion.a
                        href={contactInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gold/70" />
                      </motion.a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200/50 focus:outline-none focus:border-gold/50 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200/50 focus:outline-none focus:border-gold/50 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200/50 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 px-8 py-3 bg-gold/20 text-gold font-light rounded-full hover:bg-gold/30 transition-colors"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
