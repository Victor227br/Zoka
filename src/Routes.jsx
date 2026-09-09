import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import AdminPage from './pages/AdminPage'

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
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}