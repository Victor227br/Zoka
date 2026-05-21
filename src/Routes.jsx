import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
// import ShoppingCart from "./page/ShoppingCart"


const Router = createBrowserRouter([
  {
    path: '/',        
    element: <Home />, 
  },

  {
    path : "/Product",
    element: <Product/>,
  },

//   {
//     path: "/ShoppingCart",
//     element : <ShoppingCart/>
//   },

])

export function AppRoutes() {
  return <RouterProvider router={Router} />;
}