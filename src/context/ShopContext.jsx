import React, { createContext } from 'react'
import all_product from '../components/assets/all_product'


export const ShopContext = createContext({
    total : 0,
    item : [],
    all_product : [],
    addToCart : ()=>{},
    removeCartItem : ()=>{},
})


