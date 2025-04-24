// src/app/page.tsx
import { Particles } from "@/components/magicui/particles";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={200}
          staticity={30}
          color="#ffffff"
          ease={100}
        />
      </div>
      <div className="relative z-10 pt-16">
        <HeroSection />
      </div>
    </div>
  );
}