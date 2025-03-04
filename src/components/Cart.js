import React, { useCallback, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLoaderData } from 'react-router-dom';

const CartPage = () => {
  const { carts: cartItems } = useLoaderData();
  const { removeFromCart, addToCart } = useCart();

  const removeCartItem = useCallback(async (id) => {
    try {
      removeFromCart(id)
      const req = await fetch(`https://ncwpb75s-3000.euw.devtunnels.ms/cart/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const res = await req.json()

      console.log('remove response;', res)
    }
    catch (error) {
      console.log('error removing from cart ; ', error.message)
    }
  }, [removeFromCart])

    // useEffect(() => {
    //   cartItems?.forEach(cart => {
    //     addToCart(cart)
    //   })
    // }, [addToCart, cartItems])

  return (
    <div className="container mx-auto p-4 min-h-[90vh]">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
            {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center">
                <img
                  src={item.image || item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </button>
                <p className='mt-1'>{item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
