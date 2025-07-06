'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuSection from '../components/Menu/MenuSection'
import CartPage from '../components/Cart/CartPage'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingCart from '../components/Cart/FloatingCart'
import { menuItems } from '../utils/menuItems'

export default function Home() {
  return (
    <main>
      <Header />
      <section id="accueil">
        <Hero />
      </section>
      <section id="menu">
        <MenuSection items={menuItems} />
      </section>
      <section id="panier">
        <CartPage />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <FloatingCart />
    </main>
  )
}
