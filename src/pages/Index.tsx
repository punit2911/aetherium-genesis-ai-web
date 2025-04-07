
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIDemo from "@/components/AIDemo";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Show a welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Aetherium",
        description: "Experience the future of AI technology today.",
        duration: 5000,
      });
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toast]);

  return (
    <div className="relative overflow-x-hidden" ref={mainRef}>
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <Features />
        <AIDemo apiKey="AIzaSyDDwF40RLWr4yPtJEMQG5rvARBYSALwV3A" />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
