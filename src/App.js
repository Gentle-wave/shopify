import { Outlet, RouterProvider, createBrowserRouter, useLoaderData } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/products';
import CartPage from './pages/cart';
import Footer from './components/Footer';
import { CartProvider, useCart } from './context/CartContext';
import { useEffect } from 'react';

const homepageLoader = async () => {
  try {
    const req = await fetch('https://ncwpb75s-3000.euw.devtunnels.ms/products')
    const res = await req.json()
    return {products:res.products,  carts: res.cartCount}
  }
  catch (error) {
    throw new Error('Failed to load products')
  }
}

const cartPageLoader = async () => {
  try {
    const req = await fetch('https://ncwpb75s-3000.euw.devtunnels.ms/cart')
    const res = await req.json()
    return {carts: res.cartItems}
  }
  catch (error) {
    throw new Error('Failed to cart items')
  }
}

const MainApp = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartProvider>  <MainApp />     </CartProvider>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homepageLoader
      },
      {
        path: "/products",
        element: <Products />,
        loader: homepageLoader
      },
      {
        path: "/cart",
        element: <CartPage />,
        loader: cartPageLoader
      },
    ]
  }
]);

// App Component with RouterProvider
function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
