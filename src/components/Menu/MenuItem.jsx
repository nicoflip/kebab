'use client';

import { useState } from 'react';
import { useCart } from '../../context/CartContent';
import styles from '../../styles/components.module.css';

export default function MenuItem({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
    setQuantity(1);
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.itemContent}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className={styles.itemPrice}>{item.price}€</div>
        <div className={styles.itemActions}>
          <div className={styles.quantitySelector}>
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className={styles.quantityBtn}
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className={styles.quantityBtn}
            >
              +
            </button>
          </div>
          <button 
            onClick={handleAddToCart}
            className={styles.addToCartBtn}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
} 