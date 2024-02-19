import React from 'react'
import { Link } from 'react-router-dom'
import { CategoriesContext } from '../context'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const { categoriesMap } = React.useContext(CategoriesContext)

    return (
        <div className="m-auto w-[95%] max-w-[1200px] p-4">
            <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:mb-10">
                Shop
            </h1>
            <div>
                {Object.keys(categoriesMap).map((title) => (
                    <div key={title}>
                        <div className='flex justify-between'>
                            <h2 className='mb-3 text-lg sm:text-xl md:text-2xl'>Featured {title}</h2>
                            <Link to={`${title}`} className='text-md sm:text-lg md:text-xl underline'>View all {title}</Link>
                        </div>
                        <div
                            className=" grid grid-cols-2 gap-2
                    min-[350px]:grid-cols-2 md:grid-cols-4 "
                        >
                            {categoriesMap[title].slice(0,4).map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
