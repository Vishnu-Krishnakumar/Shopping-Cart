import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Home } from './components/Home.jsx';
import { ShopPage } from './components/ShopPage.jsx';
import { ShoppingCart } from './components/ShoppingCart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path:"ShopPage",
    element: <ShopPage/>,
  },
  {
    path:"ShoppingCart",
    element: <ShoppingCart/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
