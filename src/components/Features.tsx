
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Zap, Monitor, Cloud, Code, Activity, Cog } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10 text-cosmic-cyan" />,
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities to understand and generate human language with unprecedented accuracy."
  },
  {
    icon: <Cloud className="w-10 h-10 text-cosmic-cyan" />,
    title: "Cloud Integration",
    description: "Seamlessly integrate with all major cloud providers for scalable and flexible deployment."
  },
  {
    icon: <Monitor className="w-10 h-10 text-cosmic-cyan" />,
    title: "Real-time Analytics",
    description: "Monitor performance and gain insights with our comprehensive real-time analytics dashboard."
  },
  {
    icon: <Code className="w-10 h-10 text-cosmic-cyan" />,
    title: "Developer API",
    description: "Flexible and robust API that allows developers to customize and extend functionality."
  },
  {
    icon: <Activity className="w-10 h-10 text-cosmic-cyan" />,
    title: "Predictive Insights",
    description: "Leverage the power of machine learning to predict trends and make data-driven decisions."
  },
  {
    icon: <Cog className="w-10 h-10 text-cosmic-cyan" />,
    title: "Automated Workflows",
    description: "Create intelligent automated workflows that adapt and improve over time."
  }
];

const Features = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-['Space_Grotesk']">
            Cutting-Edge AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful capabilities that set Aetherium apart in the world of artificial intelligence.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cosmic-card rounded-xl p-6 h-full transition-transform duration-300 hover:translate-y-[-8px] hover:glow-border"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-cosmic-dark to-cosmic-blue">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 rounded-full bg-cosmic-purple opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 -left-40 w-80 h-80 rounded-full bg-cosmic-cyan opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Features;
