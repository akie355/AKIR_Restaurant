import { Navigation } from '@/components/restaurant/Navigation'
import { Hero } from '@/components/restaurant/Hero'
import { MenuSection } from '@/components/restaurant/MenuSection'
import { About } from '@/components/restaurant/About'
import { ReservationForm } from '@/components/restaurant/ReservationForm'
import { Contact } from '@/components/restaurant/Contact'
import { Footer } from '@/components/restaurant/Footer'

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MenuSection />
      <About />
      <ReservationForm />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;