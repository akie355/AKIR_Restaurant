import { Button } from '@/components/ui/button'
import { Scene3D } from '@/components/3d/Scene3D'
import { motion } from 'framer-motion'
import heroImage from '@/assets/hero-restaurant.jpg'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight"
            >
              Authentic South Indian
              <span className="block text-gold animate-shimmer bg-gradient-gold bg-clip-text text-transparent">
                Flavors
              </span>
              Reimagined
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-muted-foreground font-elegant leading-relaxed max-w-md"
            >
              Traditional South Indian cuisine meets contemporary elegance, bringing ancient spices and time-honored recipes to modern tables.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button 
                variant="hero" 
                className="animate-glow"
                onClick={() => {
                  const reservationSection = document.getElementById('reservation')
                  if (reservationSection) {
                    reservationSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Reserve Your Table
              </Button>
              <Button 
                variant="elegant" 
                size="xl"
                onClick={() => {
                  const menuSection = document.getElementById('menu')
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Explore Menu
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center glass p-6 rounded-lg">
              <div className="text-4xl font-display font-bold text-gold mb-2">15+</div>
              <div className="text-muted-foreground font-elegant">Years of Excellence</div>
            </div>
            <div className="text-center glass p-6 rounded-lg">
              <div className="text-4xl font-display font-bold text-gold mb-2">★★★</div>
              <div className="text-muted-foreground font-elegant">Michelin Stars</div>
            </div>
            <div className="text-center glass p-6 rounded-lg">
              <div className="text-4xl font-display font-bold text-gold mb-2">50+</div>
              <div className="text-muted-foreground font-elegant">Signature Dishes</div>
            </div>
            <div className="text-center glass p-6 rounded-lg">
              <div className="text-4xl font-display font-bold text-gold mb-2">1000+</div>
              <div className="text-muted-foreground font-elegant">Wine Selection</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}