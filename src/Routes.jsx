import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import AdminPage from './pages/AdminPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  { path: '/checkout', element: <Checkout /> },
  { path: '/orders', element: <Orders /> },
  { path: '/orders/:id', element: <Orders /> },
  { path: '*', element: <NotFound /> },
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/product/:id',
    element: <Product />,
  },

  {
    path: '/Admin',
    element: <AdminPage />,
  },

  {
    path: '/cart',
    element: <Cart />,
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
