import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-soft fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              LP
            </div>
            <span className="ml-3 text-lg sm:text-xl font-bold text-gray-800">
              LandingPro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-base text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="text-base text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-base text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="text-base text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Contact
            </a>
            <a 
              href="#pricing" 
              className="text-base bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-base text-gray-600 hover:text-primary-600 transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block text-base text-gray-600 hover:text-primary-600 transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block text-base text-gray-600 hover:text-primary-600 transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block text-base text-gray-600 hover:text-primary-600 transition-colors duration-200 px-4 py-2.5 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#pricing" 
              className="w-full text-base bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors duration-200 block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 