import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import serviceImage from '@/components/image/serviceImage.jpg'
import sliderone from '@/components/image/slider 1.jpg' 
import slidertwo from '@/components/image/slider 2.jpg' 
import sliderthree from '@/components/image/slider 3.jpg' 
import sliderfour from '@/components/image/webimage.jpg'


interface SlideItem {
  id: number
  title: string
  description: string
  image: string | StaticImageData
}

const slides: SlideItem[] = [
  { id: 1, title: "Web Development", description: "Custom websites tailored to your needs", image: serviceImage },
  { id: 2, title: "Mobile Apps", description: "Native and cross-platform mobile applications", image: sliderone },
  { id: 3, title: "UI/UX Design", description: "Intuitive and attractive user interfaces", image: slidertwo },
  { id: 4, title: "Cloud Services", description: "Scalable and secure cloud solutions", image: sliderthree },
  { id: 5, title: "AI Integration", description: "Cutting-edge AI solutions for your business", image: sliderfour },
  { id: 6, title: "Cybersecurity", description: "Protect your digital assets with our security solutions", image: serviceImage },
]

const ServiceSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sliderRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      ref={sliderRef}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center py-16"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundImage: [
              'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              'radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)',
              'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            ],
            backgroundSize: ['20px 20px', '30px 30px', '20px 20px'],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our range of cutting-edge solutions to help your business thrive
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentSlide * 100}%` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative h-96">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="fill"
                      objectFit="cover"
                      className="brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                      <h3 className="text-3xl font-bold mb-4 text-white">{slide.title}</h3>
                      <p className="text-xl text-gray-200">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2"
            onClick={prevSlide}
          >
            ←
          </Button>
          <Button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2"
            onClick={nextSlide}
          >
            →
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSlider