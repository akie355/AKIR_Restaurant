import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { sendReservationEmail } from '@/lib/email-config'

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email notification
      await sendReservationEmail(formData)
      
      toast.success('Reservation request received! We will contact you shortly to confirm.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
      })
    } catch (error) {
      console.error('Error submitting reservation:', error)
      toast.error('There was an error submitting your reservation. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="reservation" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            Reserve Your
            <span className="block text-gold">Table</span>
          </h2>
          <p className="text-xl text-muted-foreground font-elegant max-w-2xl mx-auto">
            Secure your place for an unforgettable culinary journey. We recommend booking in advance to ensure availability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-elegant border border-border/50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground font-elegant">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="bg-background/50 border-border focus:border-gold transition-colors"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-elegant">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="bg-background/50 border-border focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-foreground font-elegant">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="bg-background/50 border-border focus:border-gold transition-colors"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="guests" className="text-foreground font-elegant">Number of Guests</Label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger className="bg-background/50 border-border focus:border-gold">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="date" className="text-foreground font-elegant">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="bg-background/50 border-border focus:border-gold transition-colors"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="time" className="text-foreground font-elegant">Preferred Time</Label>
                <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger className="bg-background/50 border-border focus:border-gold">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="17:30">5:30 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                    <SelectItem value="18:30">6:30 PM</SelectItem>
                    <SelectItem value="19:00">7:00 PM</SelectItem>
                    <SelectItem value="19:30">7:30 PM</SelectItem>
                    <SelectItem value="20:00">8:00 PM</SelectItem>
                    <SelectItem value="20:30">8:30 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="specialRequests" className="text-foreground font-elegant">Special Requests</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                className="bg-background/50 border-border focus:border-gold transition-colors min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              variant="gold" 
              size="xl" 
              className="w-full animate-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Reservation...' : 'Confirm Reservation'}
            </Button>
            
            <p className="text-center text-sm text-muted-foreground font-elegant">
              *Reservations are subject to availability. We will contact you within 24 hours to confirm your booking.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}