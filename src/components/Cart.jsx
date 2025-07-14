import React from 'react'
import { useCartStore } from '../zustand/store/store'

const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const dispatch = useCartStore((state) => state.dispatch)

  const total = cart.reduce((sum, item) => sum +item.price * item.quantity, 0)
  console.log("cart showing on ", cart)
  return (
    <div className='border  p-4 rounded shadow'>
      <h2 className='text-xl font-semibold mb-2'>Cart</h2>
      {
        cart.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty
          </p>) :
          <div className='space-y-3'>
            {
              cart.map(item=>(
                <div key={item.id} className='flex justify-center items-center '>
                  <p className='font-medium'>
                    {item.title} X {item.quantity}
                  </p>
                  <p className='text-gray-500 text-sm '>
                    ${item.price.toFixed(2)}
                  </p>
                  <button onClick={()=> dispatch({type: "REMOVE_FROM_CART", payload: item.id})}
                   className='text-red-500 hover:underline'>
                    Remove
                  </button>
                <button>
                  <div className='mt-4 text-lg font-bold'>
                  Total:${total.toFixed(2)}
                  </div>
                   <button onClick={()=> dispatch({type: "CLEAR_CART"})}
                   className='mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                    Clear Cart
                  </button>
                </button>
                </div>
              ))
            }
          </div>

      }
    </div>
  )
}

export default Cart
