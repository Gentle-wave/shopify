import React from 'react'
import { useCart } from '../../context/CartContext';

const ProductLayoutOne = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    const { title, images, image, description, price, cutOffPrice, id } = product
    const firstImage = image ?? images[0] ?? ''
    const secondImage = image ?? images[1] ?? ''
    const added = isInCart(id)

    return (
        <div className='h-full aspect-video flex rounded-md overflow-hidden shadow-sm bg-white p-2 relative hover:shadow-2xl hover:scale-[1.02] duration-300 transition-all'>
            <img src={firstImage} className='w-[60%] object-contain h-full  rounded-tl-md rounded-bl-md' alt={title} />
            <img src={secondImage} className=' w-[40%] object-contain h-full  rounded-tl-md rounded-bl-md' alt={title} />
            <div className='bg-gradient-to-b from-transparent to-black absolute inset-0 p-2 flex flex-col justify-end'>
                <h2 className='text-shadow text-xl lg:text-2xl text-white font-bold font-mono line-clamp-1'>{title}</h2>
                <p className='text-xs text-gray-50 sm:text-sm font-serif line-clamp-2'>{description}</p>
                <div className='flex text-white items-center justify-between '>
                    <div className='flex items-center gap-2'>
                        <p className='text-sm font-thin'>N{price}</p>
                        {cutOffPrice && <p className='text-sm font-thin line-through opacity-85'>N{cutOffPrice}</p>}
                    </div>

                    <button disabled={added} onClick={() => addToCart(product)} className=" bg-purple-600 justify-self-end text-white text-xs font-thin px-2 py-1 rounded w-fit">
                        {added ? "Added to cart" : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductLayoutOne
