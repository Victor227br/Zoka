import { AppRoutes } from './Routes'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductsContext'
import './style/App.css'

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ProductsProvider>
  )
}

export default App