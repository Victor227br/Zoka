import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import AdminPage from './pages/AdminPage'
import Cart from './pages/Cart'

const router = createBrowserRouter([
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
