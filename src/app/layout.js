// Supprimez le 'use client' car il n'est pas nécessaire ici
import '../styles/globals.css'
import { CartProvider } from '../context/CartContent'

export const metadata = {
  title: 'Kebab Palace',
  description: 'Les meilleurs kebabs de la ville',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
