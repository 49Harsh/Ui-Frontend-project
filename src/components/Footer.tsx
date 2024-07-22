import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/49Harsh', label: 'GitHub' },
    { icon: FaGlobe, href: 'https://harsh-org-portfolio.netlify.app/', label: 'Portfolio' },
    { icon: FaPhone, href: 'tel:+919569935133', label: 'Phone' },
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold">Created by Harsh Yadav</h3>
          </motion.div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="text-2xl hover:text-blue-400 transition-colors duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-8 text-center text-sm opacity-75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>&copy; {currentYear} Harsh Yadav. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;