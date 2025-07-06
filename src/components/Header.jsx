'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import styles from './components.module.css'

export default function Header() {
  useEffect(() => {
    const handleScroll = (e, targetId) => {
      e.preventDefault()
      const target = document.querySelector(targetId)
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        handleScroll(e, link.getAttribute('href'))
      })
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', (e) => {
          handleScroll(e, link.getAttribute('href'))
        })
      })
    }
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>🥙 Kebab Palace</div>
        <ul className={styles.navLinks}>
          <li><Link href="#accueil">Accueil</Link></li>
          <li><Link href="#menu">Menu</Link></li>
          <li><Link href="#panier">Panier</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
