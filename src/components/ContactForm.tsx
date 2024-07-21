import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import anime from 'animejs'

interface RandomPosition {
  left: string;
  top: string;
  animationDuration: string;
}

const generateRandomPositions = (count: number): RandomPosition[] => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
  }));
};

interface FormField {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)
  const [isVisible, setIsVisible] = useState(false)

  const randomPositions = useMemo(() => generateRandomPositions(20), []);
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitStatus('success')
    // Reset form after successful submission
    setName('')
    setEmail('')
    setMessage('')
  }

  const formFields: FormField[] = [
    { type: 'text', placeholder: 'Name', value: name, onChange: setName },
    { type: 'email', placeholder: 'Email', value: email, onChange: setEmail },
    { type: 'textarea', placeholder: 'Message', value: message, onChange: setMessage },
  ]

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const clickEffect = document.createElement('div')
      clickEffect.className = 'fixed w-4 h-4 rounded-full pointer-events-none mix-blend-screen z-50'
      clickEffect.style.left = `${e.clientX - 8}px`
      clickEffect.style.top = `${e.clientY - 8}px`
      clickEffect.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)'
      document.body.appendChild(clickEffect)

      anime({
        targets: clickEffect,
        scale: [0, 15],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        complete: () => {
          document.body.removeChild(clickEffect)
        }
      })
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl"
        >
          {formFields.map((field, index) => (
            <motion.div
              key={field.placeholder}
              className="mb-4"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {field.type === 'textarea' ? (
                <Textarea
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  required
                  className="bg-white bg-opacity-20 text-white placeholder-gray-300 border-none"
                />
              ) : (
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  required
                  className="bg-white bg-opacity-20 text-white placeholder-gray-300 border-none"
                />
              )}
            </motion.div>
          ))}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </motion.form>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className={`mt-4 p-4 rounded-lg text-white text-center ${
                submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {submitStatus === 'success' ? 'Message sent successfully!' : 'An error occurred. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background squares */}
      {isVisible && randomPositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-lg bg-white opacity-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.1,
            scale: 1,
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: parseFloat(position.animationDuration),
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: position.left,
            top: position.top,
          }}
        />
      ))}
    </section>
  )
}

export default ContactForm