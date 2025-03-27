import React from 'react'

const Pricing = () => {
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

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-soft p-8 flex flex-col ${
                plan.popular ? 'border-2 border-primary-600' : ''
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 