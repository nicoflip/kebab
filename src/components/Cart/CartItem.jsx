'use client';

import { useCart } from '../../context/CartContent';
import styles from '../../styles/components.module.css';

export default function CartItem({ item, index, removeFromCart, updateQuantity }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemInfo}>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p className={styles.price}>{item.price}€</p>
      </div>
      <div className={styles.itemActions}>
        <button 
          onClick={() => updateQuantity(item.name, item.quantity - 1)}
          className={styles.quantityBtn}
        >
          -
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.name, item.quantity + 1)}
          className={styles.quantityBtn}
        >
          +
        </button>
        <button 
          onClick={() => removeFromCart(item.name)}
          className={styles.removeBtn}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
} 