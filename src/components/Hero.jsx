import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary-50 to-primary-100 py-20 sm:py-32 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Custom Landing Pages That Convert
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Transform your online presence with professionally designed landing pages that drive results. We combine stunning design with proven conversion strategies to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#pricing" 
                className="text-base bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#examples" 
                className="text-base border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
              >
                <span className="flex items-center justify-center">
                  View Examples
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              <div className="relative bg-white rounded-2xl shadow-soft p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 