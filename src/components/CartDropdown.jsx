import React from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { selectCartItems, selectCartCount } from '../store/cart/CartSelector'
import { useSelector } from 'react-redux'

const CartDropdown = ({setCartOpen}) => {
    const navigate = useNavigate()

    const cartItems = useSelector(selectCartItems)
    const totalItemsInCart = useSelector(selectCartCount)

    return (
        <div
            className="absolute right-4 top-20 z-20 flex h-80 w-56 sm:w-64 md:w-72 md:h-96 flex-col
    justify-between bg-white p-4 shadow-[0px_15px_40px_3px_rgba(0,0,0,0.3)]"
        >
            <div
                className={`flex h-full flex-col overflow-auto ${!totalItemsInCart && 'justify-center'}`}
            >
                {totalItemsInCart ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <div className="text-center">Your Cart Is Empty</div>
                )}
            </div>
            <button onClick={() => {navigate('/checkout');setCartOpen(false)}} className="tbb mt-4 bg-black text-white">Check Out</button>
        </div>
    )
}

export default CartDropdown
