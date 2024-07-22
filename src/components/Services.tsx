import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import ServiceImage from '@/components/image/serviceImage.jpg'

interface Service {
  id: number
  title: string
  description: string
  icon: string
}

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const servicesRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef(null)
  const ctaRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  useEffect(() => {
    setServices([
      { id: 1, title: "Web Development", description: "Custom websites tailored to your needs", icon: "🌐" },
      { id: 2, title: "Mobile Apps", description: "Native and cross-platform mobile applications", icon: "📱" },
      { id: 3, title: "UI/UX Design", description: "Intuitive and attractive user interfaces", icon: "🎨" },
      { id: 4, title: "Cloud Services", description: "Scalable and secure cloud solutions", icon: "☁️" },
    ])
  }, [])

  return (
    <section 
      ref={servicesRef} 
      id="services" 
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we can help your business grow with our cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col lg:flex-row items-center justify-between p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl'
        >
          <div className='flex flex-col justify-center items-center lg:items-start lg:w-1/2 mb-8 lg:mb-0'>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={isCtaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to get started?
            </motion.h3>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isCtaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's discuss how we can help your project succeed
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className='bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg' size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className='lg:w-1/2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image src={ServiceImage} width={450} height={400} alt='Service image' className='rounded-lg shadow-2xl' priority />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services