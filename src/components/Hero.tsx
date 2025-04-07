
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      variants={container}
      className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-['Space_Grotesk']"
          >
            <span className="text-gradient">Redefining Intelligence</span>
            <br />
            <span className="text-white">with Advanced AI</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Harness the power of cutting-edge artificial intelligence 
            to transform your business and unleash unlimited potential.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="glass-button text-lg px-8 py-6 w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="outline" className="border border-cosmic-cyan bg-transparent text-cosmic-cyan hover:bg-cosmic-cyan/10 text-lg px-8 py-6 w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-cosmic-blue to-transparent z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cosmic-purple opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cosmic-cyan opacity-10 blur-3xl animate-pulse-slow"></div>
    </motion.section>
  );
};

export default Hero;
