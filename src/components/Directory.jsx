import React from 'react'
import CategoryItem from './CategoryItem'
import { Link } from 'react-router-dom'

const Directory = ({ categories }) => {
    return (
        <div className="m-auto flex w-[95%] max-w-[1350px] flex-col gap-2 p-4 max-[500px]:w-full">
            <div className=" grid w-full grid-cols-3 gap-2 max-[500px]:grid-cols-1">
                {categories.slice(0, 3).map((category, index) => (
                    <Link key={category.title} to={`shop/${category.title}`}>
                        <CategoryItem
                            title={category.title}
                            imageUrl={category.imageUrl}
                        />
                    </Link>
                ))}
            </div>
            <div className=" grid w-full max-w-[1350px] grid-cols-2 gap-2">
                {categories.slice(3, 5).map((category, index) => (
                    <Link key={category.title} to={`shop/${category.title}`}>
                        <CategoryItem
                            title={category.title}
                            imageUrl={category.imageUrl}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Directory
