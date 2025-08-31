import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import signatureDish from '@/assets/signature-dish.jpg'
import appetizers from '@/assets/appetizers.jpg'
import wineCollection from '@/assets/wine-collection.jpg'

export function MenuSection() {
  const menuCategories = [
    {
      title: 'Signature Dishes',
      description: 'Our chef\'s masterpieces, crafted with authentic South Indian spices',
      image: signatureDish,
      items: [
        { name: 'Malabar Fish Curry', price: '₹850', description: 'Fresh catch in coconut curry with Kodampuli' },
        { name: 'Hyderabadi Biryani', price: '₹650', description: 'Fragrant basmati rice with tender mutton and saffron' },
        { name: 'Chettinad Chicken', price: '₹580', description: 'Spicy Tamil specialty with roasted spices and curry leaves' }
      ]
    },
    {
      title: 'Traditional Starters',
      description: 'Authentic appetizers from the heart of South India',
      image: appetizers,
      items: [
        { name: 'Medu Vada', price: '₹240', description: 'Crispy lentil donuts served with sambar and chutneys' },
        { name: 'Koliwada Prawns', price: '₹420', description: 'Spicy battered prawns with curry leaf tempering' },
        { name: 'Gunpowder Dosa', price: '₹280', description: 'Crispy dosa with spicy gun powder and ghee' }
      ]
    },
    {
      title: 'Beverages & Desserts',
      description: 'Traditional drinks and sweet endings from South India',
      image: wineCollection,
      items: [
        { name: 'Filter Coffee', price: '₹150', description: 'Authentic South Indian coffee in traditional tumbler' },
        { name: 'Payasam Selection', price: '₹250', description: 'Variety of traditional sweet puddings' },
        { name: 'Solkadhi', price: '₹180', description: 'Refreshing kokum and coconut drink' }
      ]
    }
  ]

  return (
    <section id="menu" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Authentic South Indian
            <span className="block text-gold">Cuisine</span>
          </h2>
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Traditional recipes passed down through generations, prepared with authentic spices and time-honored techniques.
          </p>
        </motion.div>

        <div className="space-y-24">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-4xl font-display font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-elegant">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-start p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/70 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl font-display font-semibold text-foreground mb-2">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground font-elegant">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-2xl font-display font-bold text-gold ml-4">
                        {item.price}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  View Full {category.title} Menu
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}