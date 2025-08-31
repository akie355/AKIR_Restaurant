import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-display font-bold text-foreground mb-6"
              >
                Our Story of
                <span className="block text-gold">Culinary Passion</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground font-elegant leading-relaxed mb-6"
              >
                Founded in 2008 by renowned Chef Alexandre Dubois, Élégance has become synonymous with gastronomic excellence. Our philosophy centers on the perfect harmony between traditional French techniques and innovative contemporary flavors.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground font-elegant leading-relaxed"
              >
                Every ingredient is carefully sourced from the finest purveyors, every technique refined through years of dedication, and every dish presented as a work of art. We believe dining should be an experience that engages all the senses.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
                <div className="text-3xl font-display font-bold text-gold mb-2">★★★</div>
                <div className="text-sm text-muted-foreground font-elegant">Michelin Guide</div>
              </div>
              <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card">
                <div className="text-3xl font-display font-bold text-gold mb-2">95</div>
                <div className="text-sm text-muted-foreground font-elegant">James Beard Award</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="lg">
                Meet Our Chef
              </Button>
              <Button variant="elegant" size="lg">
                Our Philosophy
              </Button>
            </motion.div>
          </motion.div>

          {/* Chef Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-card rounded-2xl p-8 shadow-elegant">
              {/* Chef Quote */}
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gold rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-gold-foreground">AD</span>
                </div>
                <blockquote className="text-xl font-display italic text-foreground">
                  "Cooking is not just about feeding people. It's about creating memories, emotions, and moments of pure joy."
                </blockquote>
                <div className="text-lg font-elegant">
                  <div className="text-gold font-semibold">Chef Alexandre Dubois</div>
                  <div className="text-muted-foreground">Executive Chef & Owner</div>
                </div>
                
                {/* Chef Credentials */}
                <div className="space-y-3 text-sm text-muted-foreground font-elegant">
                  <div>• Le Cordon Bleu Graduate</div>
                  <div>• Former Sous Chef at Le Bristol Paris</div>
                  <div>• James Beard Award Winner 2019</div>
                  <div>• Author of "Art of French Cuisine"</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}