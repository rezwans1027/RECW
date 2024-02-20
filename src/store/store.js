import { userReducer } from './user/UserReducer'
import { categoriesReducer } from './categories/CategoriesReducer'
import { cartReducer } from './cart/CartReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)

// export const store = createStore(persistedReducer)





// const middleWares = [logger]
// const composedEnhancers = compose(applyMiddleware(...middleWares))


// export const store = createStore(rootReducer, undefined, composedEnhancers)