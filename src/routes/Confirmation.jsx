import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='p-6 max-w-[1300px] m-auto mt-8'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl mb-4 sm:mb-8'>Order Confirmation!</h1>
        <p className='mb-8 sm:mb-16 sm:text-xl md:text-2xl lg:text-3xl'>Your order has been recieved and is being processed! Please wait a few minutes to recieve a
            confirmation email that will have all your order info. If you have any issues with your order,
            please call customer service at (696) 969-6969. Or you can email us at test@gmail.com. Thank you for
            shopping with RECW!
        </p>
        <div className='flex justify-end sm:text-xl md:text-2xl'>
            <Link className='underline' to='/'>Return to Home</Link>
        </div>
        
    </div>
  )
}

export default Confirmation