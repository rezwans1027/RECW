import React from 'react'
import { selectCartItems, selectCartTotal } from '../store/cart/CartSelector'
import { deleteItemFromCart, incrementCartItem, decrementCartItem } from '../store/cart/CartReducer'
import { useDispatch, useSelector } from 'react-redux'
import PaymentForm from '../components/PaymentForm'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const totalPriceInCart = useSelector(selectCartTotal)
    const dispatch = useDispatch()

    return (
        <div className="m-auto mt-6 max-w-[1200px] text-xs p-2 min-[374px]:p-6 min-[400px]:text-sm sm:p-8">
            <h1 className="mb-8 text-3xl">Checkout</h1>
            <div className="mb- flex w-full flex-col border-b-2 border-black pb-2">
                <div className="flex gap-2 sm:text-lg ">
                    <h1 className="w-[20%] min-w-14">Product</h1>
                    <h1 className=" w-[20%] min-w-14 ">Name</h1>
                    <h1 className="w-[20%] min-w-16">Quantity</h1>
                    <h1 className="w-[20%]">Price</h1>
                    <h1>Remove</h1>
                </div>
            </div>
            <div className='mb-6'>
                {cartItems.map((item) => (
                    <div className="flex items-center gap-2 border-b-2 border-black text-sm sm:text-lg" key={item.name}>
                        <div className='mb-4 mt-4 w-[20%]'>
                        <img
                            src={item.imageUrl}
                            className="aspect-square object-cover"
                        />
                        </div>
                        
                        <div className="w-[20%]">{item.name}</div>
                        <div className="flex w-[20%] items-center pl-4 pr-1">
                            <button onClick={() => dispatch(decrementCartItem(item))} className="text-2xl sm:text-5xl cursor-pointer">
                                {'<'}
                            </button>
                            <div className="pt-1 sm:text-xl ">
                                {item.quantity}
                            </div>
                            <button onClick={() => dispatch(incrementCartItem(item))} className="text-2xl sm:text-5xl cursor-pointer">
                                {'>'}
                            </button>
                        </div>
                        <div className="w-[20%] pl-2">
                            ${item.quantity * item.price}
                        </div>
                        <div onClick={() => dispatch(deleteItemFromCart(item))} className="cursor-pointer flex w-14 justify-center">X</div>
                    </div>
                ))}
            </div>
            <h1 className='text-xl sm:text-2xl text-right mb-16'>Total: ${totalPriceInCart}</h1>
            <PaymentForm />
        </div>
    )
}

export default Checkout
