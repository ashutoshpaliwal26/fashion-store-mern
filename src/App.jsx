import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCatagory from './pages/ShopCatagory'
import Product from './pages/Product'
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCatagory banner={men_banner} category={"men"}/>}/>
        <Route path='/women' element={<ShopCatagory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App