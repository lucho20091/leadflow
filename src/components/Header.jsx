import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white shadow-soft z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">LP</span>
            </div>
            <span className="ml-2 text-lg sm:text-xl font-semibold text-gray-800">LandingPro</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#features" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              Features
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#process" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              How It Works
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#pricing" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              Pricing
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#contact" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              Contact
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Get Started
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#features"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Features
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#process"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  How It Works
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#pricing"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Pricing
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#contact"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="block px-3 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header 