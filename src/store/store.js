import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { userReducer } from './user/UserReducer'
import { categoriesReducer } from './categories/CategoriesReducer'
import { cartReducer } from './cart/CartReducer'
import logger from 'redux-logger'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares))
 
export const store = createStore(rootReducer)
// export const store = createStore(rootReducer, undefined, composedEnhancers)