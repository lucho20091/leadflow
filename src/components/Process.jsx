import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Choose a Template',
    description: 'Browse our collection of professionally designed templates and choose the one that best fits your needs.'
  },
  {
    number: '02',
    title: 'Customize Your Page',
    description: 'Use our intuitive drag-and-drop builder to customize your landing page with your content and branding.'
  },
  {
    number: '03',
    title: 'Launch & Track',
    description: 'Publish your landing page and track its performance with our built-in analytics tools.'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Create your landing page in three simple steps
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-8 left-0 w-full h-0.5 bg-primary-200 hidden md:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-bold mb-4"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 