import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import CartDropdown from './CartDropdown'
import { CartContext } from '../context'

const Cart = () => {

  const { totalItemsInCart } = React.useContext(CartContext)

  const [cartOpen, setCartOpen] = React.useState(false)

  return (
    <div className='ml-8 cursor-pointer relative'>
      <div className='relative' onClick={() => setCartOpen(prev => !prev)}>
        <ShoppingBagIcon className=' w-8 h-8'/>
        <span className='text-xs 
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%]'>
          {totalItemsInCart}
        </span>
        {cartOpen && <CartDropdown />}
      </div>
    </div>
  )
}

export default Cart
//add cart to ham menu 