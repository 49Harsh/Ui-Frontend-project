import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Heroimage from '@/components/image/webimage.jpg'

interface Particle {
  id: number
  baseX: number
  baseY: number
  color: string
}

const Particle: React.FC<{ x: number; y: number; color: string }> = ({ x, y, color }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-full"
    style={{ 
      backgroundColor: color,
      left: x,
      top: y
    }}
    animate={{ x, y }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
)

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroRef.current) {
      const { width, height } = heroRef.current.getBoundingClientRect()
      const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
      }))
      setParticles(newParticles)
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {particles.map((particle) => {
        const x = mousePosition.x !== 0 
          ? particle.baseX + (mousePosition.x - particle.baseX) * 0.1
          : particle.baseX
        const y = mousePosition.y !== 0 
          ? particle.baseY + (mousePosition.y - particle.baseY) * 0.1
          : particle.baseY
        return (
          <Particle 
            key={particle.id} 
            x={x}
            y={y}
            color={particle.color}
          />
        )
      })}
      {/* Rest of your Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className='flex flex-col lg:flex-row items-center justify-between p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl'>
            <div className='flex flex-col justify-center items-center lg:items-start lg:w-1/2 mb-8 lg:mb-0'>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-7 text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Welcome to Our Landing Page
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover amazing features and boost your productivity
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg' size="lg">
                  Get Started
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className='lg:w-1/2'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image src={Heroimage} width={450} height={400} alt='Hero image' className='rounded-lg shadow-2xl' priority />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero