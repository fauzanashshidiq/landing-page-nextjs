import HeroSection from "@/components/hero-secion";
import Navbar from "@/components/navbar";
import ServiceSection from "@/components/service-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </main>
  );
}
