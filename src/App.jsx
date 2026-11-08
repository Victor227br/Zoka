import { AppRoutes } from './Routes'
import { CartProvider } from './context/CartContext.jsx'
import { OrdersProvider } from './context/OrdersContext.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'
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
