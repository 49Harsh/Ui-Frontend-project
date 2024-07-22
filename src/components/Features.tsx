import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { IconType } from 'react-icons'
import { FaRocket, FaLightbulb, FaCog } from 'react-icons/fa'

interface Feature {
  title: string
  description: string
  icon: IconType
}

const features: Feature[] = [
  { 
    title: 'Innovative Solutions', 
    description: 'Cutting-edge features to boost your productivity',
    icon: FaRocket
  },
  { 
    title: 'Smart Insights', 
    description: 'Gain valuable insights with our intelligent analytics',
    icon: FaLightbulb
  },
  { 
    title: 'Customizable Settings', 
    description: 'Tailor the platform to fit your unique needs',
    icon: FaCog
  },
  { 
    title: 'Innovative Solutions', 
    description: 'Cutting-edge features to boost your productivity',
    icon: FaRocket
  },
  { 
    title: 'Smart Insights', 
    description: 'Gain valuable insights with our intelligent analytics',
    icon: FaLightbulb
  },
  { 
    title: 'Customizable Settings', 
    description: 'Tailor the platform to fit your unique needs',
    icon: FaCog
  },
]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isClient = typeof window !== 'undefined';

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardHeader className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="text-5xl mb-4 text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold mb-2 text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
     

    {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-50"
          animate={{
            x: isClient ? [0, Math.random() * window.innerWidth] : 0,
            y: isClient ? [0, Math.random() * window.innerHeight] : 0,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            left: isClient ? Math.random() * window.innerWidth : 0,
            top: isClient ? Math.random() * window.innerHeight : 0,
          }}
        />
      ))}
    </section>
  )
}

export default Features