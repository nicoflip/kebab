'use client';

import { useCart } from '../../context/CartContent';
import styles from '../../styles/components.module.css';

export default function CartSummary({ subtotal, deliveryFee, finalAmount }) {
  return (
    <div className={styles.cartSummary}>
      <h3>Récapitulatif</h3>
      <div className={styles.summaryRow}>
        <span>Sous-total:</span>
        <span>{subtotal.toFixed(2)}€</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Livraison:</span>
        <span>{deliveryFee.toFixed(2)}€</span>
      </div>
      <div className={styles.summaryRow}>
        <strong>Total:</strong>
        <strong>{finalAmount.toFixed(2)}€</strong>
      </div>
      <button className={styles.checkoutBtn}>
        Commander
      </button>
    </div>
  );
} 