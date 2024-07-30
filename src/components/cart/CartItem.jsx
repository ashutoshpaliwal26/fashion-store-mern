import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_products, cartItem, removeFromCart } = useContext(ShopContext);
    const cartItemContext = useContext(ShopContext);
    
    return (
        <div className='cart-item'>
            <div className="cartitem-fomate-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                cartItemContext.item.map((e) => {
                        return (<>
                            <div className="cartitem-formate cartitem-fomate-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className="cartitem-quantity">{e.itemQuantity}</button>
                                <p>{cartItemContext.total}</p>
                                <img src={remove_icon} className='cartitem-remove-icon' onClick={() => {cartItemContext.removeCartItem(e.id)}} alt="" />
                            </div>
                            <hr/>
                        </>
                    )
                })
            }

        </div>
    )
}

export default CartItem