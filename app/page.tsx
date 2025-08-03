import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import DemoSection from '../components/sections/DemoSection';
import BlogSection from '../components/sections/BlogSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <main 
      className="min-h-screen"
      style={{ backgroundColor: '#0F172A' }}
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <DemoSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
