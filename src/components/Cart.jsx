import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import CartDropdown from './CartDropdown'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cart/CartSelector'

const Cart = () => {

  const totalItemsInCart = useSelector(selectCartCount)

  const [cartOpen, setCartOpen] = React.useState(false)
  const dropdownRef = React.useRef(null)

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); //closes the menu when clicked out of 

  return (
      <div ref={dropdownRef} className="ml-8 p-1 pb-2 rounded-full hover:bg-slate-200">
          <div
              
              className="relative cursor-pointer"
              onClick={() => setCartOpen((prev) => !prev)}
          >
              <ShoppingBagIcon className=" h-8 w-8" />
              <span
                  className="absolute 
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-[20%] text-xs"
              >
                  {totalItemsInCart}
              </span>
          </div>
          {cartOpen && <CartDropdown setCartOpen={setCartOpen}/>}
      </div>
  )
}

export default Cart
//add cart to ham menu 