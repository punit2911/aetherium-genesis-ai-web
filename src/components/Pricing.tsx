
import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small businesses and startups.",
    features: [
      "5,000 API calls per month",
      "Basic NLP capabilities",
      "Standard support",
      "1 project",
      "Community access"
    ],
    highlighted: false
  },
  {
    name: "Professional",
    price: 129,
    description: "Ideal for growing businesses with advanced needs.",
    features: [
      "25,000 API calls per month",
      "Advanced NLP & ML models",
      "Priority support",
      "10 projects",
      "Developer tools",
      "Custom integrations"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For large organizations requiring powerful AI solutions.",
    features: [
      "Unlimited API calls",
      "All AI models & features",
      "24/7 dedicated support",
      "Unlimited projects",
      "Advanced security",
      "Custom model training",
      "On-premise deployment"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-['Space_Grotesk']">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to support your AI journey with Aetherium.
          </p>
          
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              className="relative w-14 h-7 rounded-full bg-cosmic-dark flex items-center transition duration-300 focus:outline-none"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`absolute left-1 bg-cosmic-cyan w-5 h-5 rounded-full transition-transform duration-300 transform ${
                  isYearly ? "translate-x-7" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span className={`ml-3 flex items-center ${isYearly ? "text-white" : "text-gray-400"}`}>
              Yearly
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-cosmic-cyan/20 text-cosmic-cyan">
                Save 20%
              </span>
            </span>
          </div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`cosmic-card rounded-xl p-8 h-full transition-all duration-500 ${
                plan.highlighted ? "border-cosmic-cyan relative transform hover:-translate-y-4" : "border-cosmic-purple/30 hover:-translate-y-2"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-cosmic-cyan text-cosmic-dark rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${isYearly ? (plan.price * 0.8 * 12).toFixed(0) : plan.price}</span>
                <span className="text-gray-400">/{isYearly ? "year" : "month"}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-cosmic-cyan" />
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-cosmic-cyan hover:bg-cosmic-cyan/90 text-cosmic-dark"
                    : "glass-button"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cosmic-cyan opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cosmic-purple opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Pricing;
