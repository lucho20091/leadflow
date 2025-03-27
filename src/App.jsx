import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Examples from './components/Examples'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [amount, setAmount] = useState(0)

  function handleAmountChange(newAmount) {
    setAmount(newAmount)
  }

  console.log(amount)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Examples />
        <Process />
        <Pricing handleAmountChange={handleAmountChange}/>
        <Contact amount={amount}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
