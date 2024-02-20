import { createSlice } from "@reduxjs/toolkit"

const CART_INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE, 
    reducers: {
        addItemToCart(state, action) {
            const product = action.payload;
            const existingItem = state.cartItems.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }

            state.cartCount++;
            state.cartTotal += product.price;
        },

        deleteItemFromCart(state, action) {
            const { id } = action.payload;
            const itemToDelete = state.cartItems.find(item => item.id === id);

            if (itemToDelete) {
                state.cartCount -= itemToDelete.quantity;
                state.cartTotal -= itemToDelete.price * itemToDelete.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },

        incrementCartItem(state, action) {
            const { id } = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id === id);

            if (itemToIncrement) {
                itemToIncrement.quantity++;
                state.cartCount++;
                state.cartTotal += itemToIncrement.price;
            }
        },

        decrementCartItem(state, action) {
            const { id } = action.payload;
            const itemToDecrement = state.cartItems.find(item => item.id === id);

            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity--;
                state.cartCount--;
                state.cartTotal -= itemToDecrement.price;
            }
        },

        clearCartItems(state) {
            state.cartItems = [];
            state.cartCount = 0;
            state.cartTotal = 0;
        }
    }
})

export const { addItemToCart, deleteItemFromCart, incrementCartItem, decrementCartItem, clearCartItems } = cartSlice.actions
export const cartReducer = cartSlice.reducer




