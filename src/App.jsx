import React from 'react'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import SignIn from './routes/SignIn'
import Shop from './routes/Shop'
import Checkout from './routes/Checkout'
import Category from './routes/Category'
import {
    onAuthStateChangedListener, //subscribes to login stream and listens for login/logout
    createUserDocumentFromAuth,
    getCategoriesAndDocuments
} from './utils/firebase/FirebaseUtil'
import { setCurrentUser } from './store/user/UserReducer'
import { setCategories } from './store/categories/CategoriesReducer'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            //return user object
            if (user) createUserDocumentFromAuth(user) //if user object is not null then create fb doc/return fb doc
            const pickedUser = user && (({accessToken, email}) => ({accessToken, user}))(user)
            dispatch(setCurrentUser(pickedUser)) //user null will set user as null, else will set user
        })
        return () => unsubscribe() //disconnect listener to prevent memory leaks
    }, [])

    React.useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setCategories(categoriesArray))
        }
        getCategoriesMap()
    },[])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Category />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default App
