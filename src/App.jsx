import { AppRoutes } from './Routes'
import { CartProvider } from './context/CartContext'
import { OrdersProvider } from './context/OrdersContext'
import { ProductsProvider } from './context/ProductsContext'
import './style/App.css'

function App() {
  return (
    <ProductsProvider>
      <OrdersProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </OrdersProvider>
    </ProductsProvider>
  )
}

export default App