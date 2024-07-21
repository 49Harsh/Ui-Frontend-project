import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useState } from 'react'
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardHeader className="relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
                    initial={false}
                    animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="text-5xl mb-4 text-white"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0
                    }}
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
      </div>
      {/* Particle effect (simplified version) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-50"
          animate={{
            x: [0, Math.random() * window.innerWidth],
            y: [0, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
        />
      ))}
    </section>
  )
}

export default Features