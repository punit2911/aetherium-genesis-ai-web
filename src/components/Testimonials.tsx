
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const testimonials = [
  {
    content: "Aetherium's AI platform transformed our customer service operations. We've seen a 40% reduction in response time and a significant improvement in customer satisfaction scores.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/placeholder.svg"
  },
  {
    content: "Implementing Aetherium's predictive analytics has given us insights we never thought possible. It's like having a crystal ball for business decisions.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/placeholder.svg"
  },
  {
    content: "The flexibility and power of Aetherium's API allowed us to create custom AI solutions that perfectly fit our unique business needs.",
    author: "Punit Gavali",
    position: "Founder, Aetherium",
    image: "/placeholder.svg"
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from businesses that have revolutionized their operations with Aetherium's AI technology.
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
                      className="h-10 w-10 object-cover opacity-70"
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
