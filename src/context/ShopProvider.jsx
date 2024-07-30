import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext';

import all_products from '../components/assets/all_product';



const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCartHandeler = (item, quantity) => {
    const { id, image, name, new_price, old_price } = item;
    removeFromCart(id);
    setCartItem((prev) => [...prev, { id, image, name, new_price, old_price, itemQuantity: quantity }])
  }

  const removeFromCart = (id) => {
    setCartItem(cartItem.filter((prev) => prev.id !== id));
  }

  const calculateTotalAmount = (currentCartItem) => {
    let totalAmountOfItem = 0;
    currentCartItem.forEach((item) => {
      totalAmountOfItem = totalAmountOfItem + (item.new_price * item.itemQuantity)
    })

    setTotal(totalAmountOfItem);
  }

  const cartItemCtx = {
    item: cartItem,
    addToCart: addToCartHandeler,
    all_products: all_products,
    removeCartItem: removeFromCart,
    total: total,
  }

  useEffect(() => {
    calculateTotalAmount(cartItem)
  }, [cartItem])

  return (
    <ShopContext.Provider value={cartItemCtx}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider