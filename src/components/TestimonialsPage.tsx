import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. It's intuitive, powerful, and a game-changer for our team.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, GrowthCo",
    content: "I can't imagine running our campaigns without this tool. It's become an indispensable part of our strategy.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Freelance Designer",
    content: "As a solo entrepreneur, this product has been a lifesaver. It's like having a whole team at my fingertips.",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "CTO, InnovateTech",
    content: "The efficiency gains we've seen with this product are truly remarkable. It's transformed our development process.",
  },
  {
    id: 5,
    name: "Michael Lee",
    role: "Project Manager, BuildCo",
    content: "Managing multiple projects has never been easier. This tool keeps everything organized and on track.",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    role: "Startup Founder",
    content: "For a growing startup, this product has been invaluable. It's scaled perfectly with our expanding needs.",
  }
];
interface RotatingNumberProps {
    number: number;
    size: number;
    isClockwise: boolean;
  }
  
  const RotatingNumber: React.FC<RotatingNumberProps> = ({ number, size, isClockwise }) => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(
      scrollYProgress,
      [0, 1],
      isClockwise ? [0, 360] : [360, 0]
    );
  
    return (
      <motion.div
        className="absolute text-white text-opacity-10 font-bold select-none"
        style={{
          fontSize: size,
          rotate,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      >
        {number}
      </motion.div>
    );
  };
  
  const TestimonialsPage: React.FC = () => {
    const controls = useAnimation();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    const numbers = useMemo(() => {
      return Array.from({ length: 30 }, (_, i) => ({
        number: Math.floor(Math.random() * 10),
        size: Math.random() * 100 + 50,
        isClockwise: Math.random() > 0.5,
      }));
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [controls]);
  
    return (
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-xl"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
                <p className="text-gray-200 italic text-lg">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
  
        {/* Rotating background numbers */}
        {isVisible && numbers.map((num, i) => (
          <RotatingNumber key={i} {...num} />
        ))}
      </section>
    );
  };
  
  export default TestimonialsPage;