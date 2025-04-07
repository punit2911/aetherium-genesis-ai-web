
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const testimonials = [
  {
    content: "Aetherium's AI platform transformed our customer service operations. We've seen a 40% reduction in response time and a significant improvement in customer satisfaction scores.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  },
  {
    content: "Implementing Aetherium's predictive analytics has given us insights we never thought possible. It's like having a crystal ball for business decisions.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  },
  {
    content: "The flexibility and power of Aetherium's API allowed us to create custom AI solutions that perfectly fit our unique business needs.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  },
  {
    content: "Our quantum neural networks have revolutionized the way businesses approach complex problem-solving, achieving unprecedented levels of accuracy and efficiency.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  },
  {
    content: "Aetherium's multimodal AI systems can process and understand text, images, audio, and video simultaneously, creating truly intelligent solutions for enterprise clients.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  },
  {
    content: "Our generative AI tools have enabled creative professionals to enhance their workflows by 300%, while maintaining brand consistency and human oversight.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/lovable-uploads/0db7c266-6a68-48ab-9725-34ec99ee6695.png"
  }
];

const Testimonials = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        duration: 0.8,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-['Space_Grotesk']">
            Cutting-Edge AI Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aetherium is pioneering the next generation of AI with these groundbreaking technologies:
          </p>
        </div>
        
        <div className="cosmic-card rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cosmic-cyan">Quantum Neural Networks</h3>
              <p className="text-gray-300">Our proprietary quantum computing architecture enables neural networks to process complex data at unprecedented speeds, solving problems that traditional computing cannot approach.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cosmic-cyan">Multimodal AI Systems</h3>
              <p className="text-gray-300">Aetherium's systems can simultaneously process text, images, audio, and video, creating truly comprehensive understanding of complex information environments.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cosmic-cyan">Adaptive Learning Algorithms</h3>
              <p className="text-gray-300">Our AI continually improves through specialized learning algorithms that require minimal training data, enabling rapid adaptation to new domains.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cosmic-cyan">Ethical AI Framework</h3>
              <p className="text-gray-300">All Aetherium systems operate within our comprehensive ethical framework, ensuring responsible AI that respects privacy, reduces bias, and maintains human oversight.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-['Space_Grotesk']">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear about the revolutionary impact of Aetherium's AI technology across diverse industries.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cosmic-card rounded-xl p-8 h-full hover:glow-border transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <svg className="h-8 w-8 text-cosmic-cyan mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 italic">{testimonial.content}</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-cosmic-purple/30 flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-cosmic-purple opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
