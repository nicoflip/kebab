'use client';

import styles from '../styles/components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 Kebab Palace. Tous droits réservés.</p>
        <div className={styles.socialLinks}>
          <a href="#">📘</a>
          <a href="#">📷</a>
          <a href="#">🐦</a>
        </div>
        <p>Fait avec ❤️ pour les amateurs de kebab</p>
      </div>
    </footer>
  );
}
