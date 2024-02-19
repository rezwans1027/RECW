import React from 'react'
import { CategoriesContext } from '../context'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Category = () => {
    const { categoriesMap } = React.useContext(CategoriesContext)
    const { category } = useParams()

    return (
        <div className="m-auto w-[95%] max-w-[1200px] p-4 min-[500px]:p-8">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-xl  min-[500px]:text-2xl md:text-3xl">
                    All {category}
                </h1>
                <Link
                    to="/shop"
                    className="text-md underline min-[500px]:text-lg md:text-xl"
                >
                    Back to featured items
                </Link>
            </div>

            <div
                className=" grid grid-cols-2 gap-2
        min-[350px]:grid-cols-2 md:grid-cols-4 "
            >
                {categoriesMap[category]
                    ? categoriesMap[category].map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))
                    : null}
            </div>
        </div>
    )
}

export default Category
