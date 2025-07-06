'use client';

import { useCart } from '../../context/CartContent';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import styles from '../../styles/components.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();
  const total = calculateTotal();
  const deliveryFee = total >= 20 ? 0 : 3.50;
  const finalAmount = total + deliveryFee;

  return (
    <section id="panier" className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.cartContainer}>
          <div className={styles.cartHeaderBar}>
            <h2>🛒 Votre Panier</h2>
            <p>Vérifiez votre commande avant de valider</p>
          </div>

          <div className={styles.cartContent}>
            {cart.length === 0 ? (
              <div className={styles.emptyCart}>
                <div className={styles.emptyCartIcon}>🛒</div>
                <h3>Votre panier est vide</h3>
                <p>Découvrez nos délicieux kebabs et ajoutez-les à votre panier</p>
                <a href="#menu" className={styles.continueShopping}>Voir le menu</a>
              </div>
            ) : (
              <>
                <div className={styles.detailedCartItems}>
                  {cart.map((item, index) => (
                    <CartItem
                      key={index}
                      item={item}
                      index={index}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                    />
                  ))}
                </div>

                <CartSummary
                  subtotal={total}
                  deliveryFee={deliveryFee}
                  finalAmount={finalAmount}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
