import React from 'react'
import CartItem from './CartItem'
import { CartContext } from '../context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = ({setCartOpen}) => {
    const navigate = useNavigate()

    const { cartItems, totalItemsInCart } = React.useContext(CartContext)

    return (
        <div
            className="absolute right-4 top-20 z-20 flex h-80 w-56 flex-col
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
