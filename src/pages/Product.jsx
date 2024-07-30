import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumps from '../components/breadcrumps/BreadCrumps';
import ProductDisplay from '../components/productdisplay/ProductDisplay';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id===Number(productId));
  
  return (
    <div>
      <BreadCrumps product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product