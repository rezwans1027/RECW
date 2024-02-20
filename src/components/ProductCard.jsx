import React from 'react'
import { addItemToCart } from '../store/cart/CartReducer'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch()

    return (
        <div className="mb-8 group hover:bg-slate-100">
            <div className="aspect-square mb-3 relative">
                <img
                    className="h-full w-full object-cover group-hover:opacity-75"
                    src={imageUrl}
                    alt={name}
                />
                <div className='hidden group-hover:flex z-10 w-full h-[30%] absolute bottom-0 justify-center items-center group'>
                    <button onClick={() => dispatch(addItemToCart(product))} className='bg-white p-1 w-[80%] h-[50%] text-center md:text-xl shadow-2xl
                    transition duration-100 ease-in-out hover:bg-slate-300 active:bg-slate-500'>Add To Cart</button>
                </div>
            </div>

            <h1 className="mb-1 md:text-xl text-lg font-medium">{name}</h1>
            <h2 className="text-lg">${price}</h2>
        </div>
    )
}

export default ProductCard
