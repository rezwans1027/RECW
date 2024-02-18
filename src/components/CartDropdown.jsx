import React from 'react'
import CartItem from './CartItem'
import { CartContext } from '../context'

const CartDropdown = () => {

    const { cartItems } = React.useContext(CartContext)

  return (
    <div className='absolute w-56 h-80 bg-white -left-48 top-12 p-4 z-20
    flex flex-col justify-between shadow-[0px_15px_40px_3px_rgba(0,0,0,0.3)]'>
         <div className='h-full flex flex-col overflow-scroll'>
             {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
         </div>
         <button className='mt-4 tbb bg-black text-white'>Check Out</button>
    </div>
  )
}

export default CartDropdown