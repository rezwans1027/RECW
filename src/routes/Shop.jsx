import React from 'react'
import { ProductContext } from '../context'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const { products } = React.useContext(ProductContext)

    return (
        <div className="m-auto w-[95%] max-w-[1200px] p-4">
            <h1 className='md:text-4xl sm:text-3xl text-2xl mb-6 lg:mb-10'>Shop</h1>
            <div
                className=" grid grid-cols-1 gap-2
                min-[350px]:grid-cols-2 sm:grid-cols-3 "
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop
