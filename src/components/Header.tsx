import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-950 shadow-md"
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-200">
            Logo
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="#home" className="text-gray-400 hover:text-gray-100">Home</Link>
            <Link href="#features" className="text-gray-400 hover:text-gray-100">Features</Link>
            <Link href="#pricing" className="text-gray-400 hover:text-gray-100">Pricing</Link>
            <Link href="#contact" className="text-gray-400 hover:text-gray-100">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 hover:text-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <Link href="#home" className="block py-2 text-gray-400 hover:text-gray-100">Home</Link>
              <Link href="#features" className="block py-2 text-gray-400 hover:text-gray-100">Features</Link>
              <Link href="#pricing" className="block py-2 text-gray-400 hover:text-gray-100">Pricing</Link>
              <Link href="#contact" className="block py-2 text-gray-400 hover:text-gray-100">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header