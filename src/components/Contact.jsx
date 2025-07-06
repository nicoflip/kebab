'use client';

import styles from '../styles/components.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Nous Trouver</h3>
            <div className={styles.contactItem}>123 Rue de la Paix, 75001 Paris</div>
            <div className={styles.contactItem}>01 23 45 67 89</div>
            <div className={styles.contactItem}>Ouvert 11h-23h tous les jours</div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Livraison & Emporter</h3>
            <p>🚚 Livraison gratuite à partir de 20€</p>
            <p>⏱️ Préparation en 15-20 minutes</p>
            <p>💳 Paiement CB, espèces acceptés</p>
          </div>
        </div>
      </div>
    </section>
  );
}
