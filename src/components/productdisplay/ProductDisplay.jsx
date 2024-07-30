import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../assets/star_icon.png'
import start_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const cartContext = useContext(ShopContext);

    const addToCartHandeler = () =>{
        cartContext.addToCart(product,1);
    }

    
    return (
        <div className='productdisplay'>
            <div className="prodcutdisplay-left">
                <div className="prodcut-image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img className='product-display-main-image' src={product.image} alt="" />
                </div>
            </div>
            <div className="prodcutdisplay-right">
                <h1>{product.name}</h1>
                <div className="display-right-starts">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="prodcuct-right-price">
                    <div className="prodcut-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="prodcut-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut est repellat modi, iusto dolorum expedita fugiat distinctio ipsa rerum? Ipsum cum et sapiente, blanditiis aliquid magnam optio qui quisquam itaque.
                </div>
                <div className="product-right-size">
                    <h1>Select Size</h1>
                    <div className="product-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={addToCartHandeler}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay