import {AppRoutes } from './Routes'
import { ProductsProvider } from './context/ProductsContext'
import './style/App.css'


function App() {
  return(
<ProductsProvider>
    <AppRoutes/>
</ProductsProvider>
)
}

export default App
