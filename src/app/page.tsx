import CtaSection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ServiceSection from "@/components/service-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
