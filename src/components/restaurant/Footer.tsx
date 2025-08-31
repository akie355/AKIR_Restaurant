import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div className="text-3xl font-display font-bold text-gold">
              AKIR
            </div>
            <p className="text-muted-foreground font-elegant">
              Authentic South Indian cuisine bringing the traditional flavors of Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh to your table with modern elegance.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-secondary/20 rounded-lg hover:bg-gold/10 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-gold" />
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg hover:bg-gold/10 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-gold" />
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg hover:bg-gold/10 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gold" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              {['Menu', 'Reservations', 'Private Dining', 'Gift Cards', 'Catering'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-muted-foreground font-elegant hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-foreground">
              Contact
            </h3>
            <div className="space-y-3 text-muted-foreground font-elegant">
              <div>123 Culinary Boulevard</div>
              <div>Gourmet District, NY 10013</div>
              <div>+1 (555) 123-4567</div>
              <div>info@akir-restaurant.com</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/30 mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground font-elegant">
            © 2024 AKIR Restaurant. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}