
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminPage from './pages/AdminPage';

const Router = createBrowserRouter([
  
  {
    path: '/',        
    element: <Home/>, 
  },

  {
    path : "/Product",
    element: <Product/>,
  },

  {
    path: "/Admin",
    element: <AdminPage/>
  }
  
])

export function AppRoutes() {
  return <RouterProvider router= {Router} />;
}