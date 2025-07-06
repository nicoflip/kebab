'use client';

import { useCart } from '../../context/CartContent';
import MenuItem from './MenuItem';
import styles from '../../styles/components.module.css';

export default function MenuSection({ items }) {
  const { addToCart } = useCart();

  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Notre Menu</h2>
        <div className={styles.menuGrid}>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
