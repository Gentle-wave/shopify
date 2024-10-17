import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <p>{product.title}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
