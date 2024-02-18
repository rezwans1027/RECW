import React from 'react'
import { CartContext } from '../context'

const Checkout = () => {
    const { cartItems, deleteItemFromCart, incrementCartItem, decrementCartItem, totalPriceInCart } = React.useContext(CartContext)

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
                    <div className="flex items-center gap-2 border-b-2 border-black text-sm sm:text-lg">
                        <img
                            src={item.imageUrl}
                            className="mb-4 mt-4 aspect-square w-[20%]"
                        />
                        <div className="w-[20%]">{item.name}</div>
                        <div className="flex w-[20%] items-center pl-4 pr-1">
                            <button onClick={() => decrementCartItem(item.id)} className="text-2xl sm:text-5xl cursor-pointer">
                                {'<'}
                            </button>
                            <div className="pt-1 sm:text-xl ">
                                {item.quantity}
                            </div>
                            <button onClick={() => incrementCartItem(item.id)} className="text-2xl sm:text-5xl cursor-pointer">
                                {'>'}
                            </button>
                        </div>
                        <div className="w-[20%] pl-2">
                            ${item.quantity * item.price}
                        </div>
                        <div onClick={() => deleteItemFromCart(item.id)} className="cursor-pointer flex w-14 justify-center">X</div>
                    </div>
                ))}
            </div>
            <h1 className='text-xl sm:text-2xl text-right'>Total: ${totalPriceInCart}</h1>
        </div>
    )
}

export default Checkout
