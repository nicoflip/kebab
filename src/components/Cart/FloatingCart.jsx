'use client'

import { useCart } from '../../context/CartContent'
import styles from '../../styles/components.module.css'

export default function FloatingCart() {
  const { cartItems, toggleCart } = useCart()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <button className={styles.floatingCart} onClick={toggleCart}>
      <span className={styles.cartIcon}>🛒</span>
      {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
    </button>
  )
}
