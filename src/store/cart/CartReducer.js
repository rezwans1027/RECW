import { CART_ACTION_TYPES } from "./CartActionTypes"

const CART_INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action
    const { cartItems, cartCount, cartTotal } = state


    switch (type) {
        case CART_ACTION_TYPES.ADD_CART_ITEM: {
            const product = payload
            var newCartItems;
            cartItems.some(item => item.id === product.id) ?
                newCartItems = cartItems.map(item => (
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item
                ))
                : newCartItems = [...cartItems, { ...product, quantity: 1 }]
            return { cartItems: newCartItems, cartCount: cartCount + 1, cartTotal: cartTotal + product.price }
        }

        case CART_ACTION_TYPES.DELETE_CART_ITEM: {
            const { id } = payload
            const { price, quantity } = cartItems.find(item => item.id === id)
            const newCartItems = cartItems.filter(item => item.id !== id)
            return { cartItems: newCartItems, cartCount: cartCount - quantity, cartTotal: cartTotal - (price * quantity) }
        }

        case CART_ACTION_TYPES.INCREMENT_CART_ITEM: {
            const { id, price } = payload
            var newCartItems = cartItems.map(item => (
                item.id === id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item
            ))
            return { cartItems: newCartItems, cartCount: cartCount + 1, cartTotal: cartTotal + price}
        }

        case CART_ACTION_TYPES.DECREMENT_CART_ITEM: {
            const { id, price } = payload
            var newCartItems = cartItems.map(item => (
                item.id === id ? 
                item.quantity === 1 ? null : {...item, quantity: item.quantity - 1}
                : item
            )).filter(Boolean)
            return { cartItems: newCartItems, cartCount: cartCount - 1, cartTotal: cartTotal - price}
        }

        default:
            return state
    }
}

