import React from 'react'
import { useCartStore } from '../zustand/store/store'

const ProductCard = ({product}) => {
  const dispatch = useCartStore((state) => state.dispatch)
  
    return (
    <div className='border rounded-lg p-4 shadow hover:shadow-md'>
      <img src={product.image} alt={product.title}  className='h-32 mx-auto' />
        <h2 className='text-lg font-semibold mt-2'>{product.title}</h2>
        <p className='text-sm text-gray-600'>Price: ${product.price}</p>
        <button onClick={()=>dispatch({type: "ADD_TO_CART", payload: product})} className='bg-blue-500 text-white px-4 py-2 rounded mt-3 hover:bg-blue-600 '>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard
