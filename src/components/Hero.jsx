'use client';

import Link from 'next/link';
import styles from '../styles/components.module.css';

export default function Hero() {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Kebab Palace</h1>
        <p>Les meilleurs kebabs de la ville, préparés avec amour</p>
        <Link href="#menu" className={styles.ctaButton}>
          Découvrir notre menu
        </Link>
      </div>
    </section>
  );
}
