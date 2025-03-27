import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge design with proven conversion strategies to create landing pages that drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
              Lightning Fast
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Get your landing page up and running in minutes, not hours. Our streamlined process ensures quick delivery without compromising quality.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
              Mobile First
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Every landing page is designed with mobile users in mind first, ensuring a perfect experience across all devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
              Conversion Focused
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Our designs are optimized for conversions, using proven strategies to turn visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 