import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ManageProducts from './pages/ManageProducts';


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
    element: <ManageProducts/>
  }
  
])

export function AppRoutes() {
  return <RouterProvider router= {Router} />;
}