import React from 'react'

const CategoryItem = ({ title, imageUrl }) => {
    return (
        <div
            id="category-container "
            className="group relative z-5 h-36 cursor-pointer overflow-hidden rounded-sm border-black 
            max-[500px]:h-20 md:h-48 lg:h-64 xl:h-72"
        >
            <div
                id="image-container"
                className="z-5 h-36 transform bg-cover bg-center p-0 transition-transform
                duration-700 hover:scale-110 md:h-48 lg:h-64 xl:h-72"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div
                id="text-container"
                className="absolute bottom-0 z-0 flex max-w-32 transform 
                    flex-col items-start
                    justify-center
                    bg-transparent p-2 max-[500px]:max-h-14 max-[500px]:max-w-24 "
            >
                <h1
                    className="inline pb-1 text-2xl font-medium leading-7 tracking-wide text-white
                    drop-shadow-[1px_2px_5px_rgba(0,0,0,0.95)] max-[500px]:pb-0 max-[500px]:text-[18px]"
                >
                    {title}
                </h1>
                <span
                    className="text-md font-extralight text-white
                    max-[500px]:p-0 max-[500px]:text-[12px]"
                >
                    SHOP NOW
                </span>
            </div>
        </div>
    )
}

export default CategoryItem
