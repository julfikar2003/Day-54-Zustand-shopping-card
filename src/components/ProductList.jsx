import React from 'react'
import { products } from '../enum/enum'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        products.map((product) => <ProductCard product={product}/>)
      }
    </div>
  )
}

export default ProductList
