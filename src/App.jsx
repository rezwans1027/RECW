import React from 'react'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import SignIn from './routes/SignIn'
import Shop from './routes/Shop'
import Checkout from './routes/Checkout'
import Category from './routes/Category'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:category' element={<Category />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>   
    </Routes>
  )
}

export default App