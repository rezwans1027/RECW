import React from 'react'
import {
    onAuthStateChangedListener,//subscribes to login stream and listens for login/logout
    createUserDocumentFromAuth, 
    addCollectionAndDocuments,
    getCategoriesAndDocuments
} from './utils/firebase/FirebaseUtil'
import PRODUCTS from './shopData.json'



export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState()
    const value = { currentUser, setCurrentUser }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {//return user object 
            if(user) createUserDocumentFromAuth(user)//if user object is not null then create fb doc/return fb doc
            setCurrentUser(user)//user null will set user as null, else will set user
        })
        return () => unsubscribe()//disconnect listener to prevent memory leaks
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}




export const CategoriesContext = React.createContext()

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = React.useState({})

    React.useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])

    const value = { categoriesMap } 

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}



export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = React.useState([]) 

    const addItemToCart = (product) => {
        var newCartItems;

        cartItems.some(item => item.id === product.id) ?
        newCartItems = cartItems.map(item => (
            item.id === product.id ? 
            {...item, quantity: item.quantity + 1}
            : item
        ))
        : newCartItems = [...cartItems, {...product, quantity:1}]

        setCartItems(newCartItems)
    }

    const deleteItemFromCart = (id) => {
        var newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
    }

    const incrementCartItem = (id) => {
        var newCartItems = cartItems.map(item => (
            item.id === id ? 
            {...item, quantity: item.quantity + 1}
            : item
        ))
        setCartItems(newCartItems)
    }

    const decrementCartItem = (id) => {
        var newCartItems = cartItems.map(item => (
            item.id === id ? 
            item.quantity === 1 ? null : {...item, quantity: item.quantity - 1}
            : item
        )).filter(Boolean)
        setCartItems(newCartItems)
    }

    const totalItemsInCart = cartItems.reduce((totalItems, currentItem) => totalItems += currentItem.quantity, 0)
    const totalPriceInCart = cartItems.reduce((totalItems, currentItem) => totalItems += currentItem.quantity * currentItem.price, 0)

    const value = { cartItems, setCartItems, addItemToCart, totalItemsInCart, deleteItemFromCart, incrementCartItem, decrementCartItem, totalPriceInCart }
    return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}