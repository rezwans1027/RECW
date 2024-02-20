import { CART_ACTION_TYPES } from "./CartActionTypes";

export const addItemToCart = (product) => ({
    type: CART_ACTION_TYPES.ADD_CART_ITEM, 
    payload: product
})
export const deleteItemFromCart = (product) => ({
    type: CART_ACTION_TYPES.DELETE_CART_ITEM, 
    payload: product
})
export const incrementCartItem = (product) => ({
    type: CART_ACTION_TYPES.INCREMENT_CART_ITEM, 
    payload: product
})
export const decrementCartItem = (product) => ({
    type: CART_ACTION_TYPES.DECREMENT_CART_ITEM, 
    payload: product
})