import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function NavBar() {
  const { cart } = useCartStore();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">ShopMagic</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
