import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
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
          <div className="hidden md:flex space-x-4">
            <Link href="#home" className="text-gray-400 hover:text-gray-100">Home</Link>
            <Link href="#features" className="text-gray-400 hover:text-gray-100">Features</Link>
            <Link href="#pricing" className="text-gray-400 hover:text-gray-100">Pricing</Link>
            <Link href="#contact" className="text-gray-400 hover:text-gray-100">Contact</Link>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
