import React from 'react'
import { motion } from 'framer-motion'

const Pricing = ({ handleAmountChange }) => {
  const plans = [
    {
      name: "Basic",
      price: "$35",
      description: "Perfect for small businesses",
      features: [
        "Single Page Design",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO Setup",
        "5 Days Delivery",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$50",
      description: "Best for growing businesses",
      features: [
        "Everything in Basic",
        "Custom Animations",
        "Advanced SEO",
        "3 Days Delivery",
        "Email Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$100",
      description: "For established businesses",
      features: [
        "Everything in Pro",
        "Multiple Pages",
        "Custom Features",
        "Priority Support",
        "2 Days Delivery",
        "24/7 Support",
        "Performance Optimization"
      ],
      popular: false
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const handlePlanSelect = (plan) => {
    const amount = parseInt(plan.price.replace('$', ''), 10)
    handleAmountChange(amount)
    window.location.href = '#contact'
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core features.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl shadow-soft p-8 flex flex-col ${
                plan.popular ? 'border-2 border-primary-600' : ''
              }`}
            >
              <div>
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </motion.div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlanSelect(plan)}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 