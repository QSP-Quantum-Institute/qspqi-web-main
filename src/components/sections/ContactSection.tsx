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
    <section
      id={id}
      className={`py-20 bg-white ${className}`}
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
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us through any of the
              following channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.email && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-gold transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-600 hover:text-gold transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.address && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Address</p>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                )}
              </div>

              {contactInfo.social && (
                <div className="mt-8">
                  <p className="font-semibold text-dark mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    {contactInfo.social.linkedin && (
                      <motion.a
                        href={contactInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {contactInfo.social.twitter && (
                      <motion.a
                        href={contactInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {contactInfo.social.github && (
                      <motion.a
                        href={contactInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gold text-white font-semibold rounded-lg shadow-lg hover:bg-gold-300 transition-colors"
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
