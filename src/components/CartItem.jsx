import React from 'react'

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem

  return (
    <div className='flex mb-4 items-center'>
        <img src={imageUrl} className='h-16 w-16 mr-4 object-cover aspect-square'/>
        <div className=''>
            <h1>{name}</h1>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
  )
}

export default CartItem