import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Culinary Boulevard\nGourmet District, NY 10013'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567\nReservations: +1 (555) 123-4568'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@elegance-restaurant.com\nreservations@elegance-restaurant.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Tue-Thu: 5:30PM - 10:00PM\nFri-Sat: 5:30PM - 11:00PM\nSun-Mon: Closed'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Visit
            <span className="block text-gold">Élégance</span>
          </h2>
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Located in the heart of the city's gourmet district, we're easily accessible and ready to provide you with an exceptional dining experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 bg-gradient-card rounded-lg shadow-card border border-border/50"
              >
                <div className="p-3 bg-gold/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-elegant whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant border border-border/50 h-full min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-6">
                <MapPin className="w-16 h-16 text-gold mx-auto" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Find Us
                  </h3>
                  <p className="text-muted-foreground font-elegant mb-6">
                    Conveniently located in Manhattan's Gourmet District with valet parking available.
                  </p>
                  <div className="space-y-4 text-sm text-muted-foreground font-elegant">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Subway: 1, 2, 3 to 14th St-Union Sq</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Valet parking available ($25)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Street parking after 6 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}