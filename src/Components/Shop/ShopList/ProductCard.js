import React, { useState } from 'react'
import basketCart from '../../../img/Shopping-Cart-Icon.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({ picture, title, description, price }) => {

   const [cartCount, setCartCount] = useState(0);

   const addedProductHandler = () => {
      setCartCount(cartCount + 1);
      toast.success('The product has been added successfully!');

   }

   return (
      <div className='product-card'>

         <img style={{ width: 100, heigth: 180 }} src={picture} alt="flowers" />

         <h1 className='product-name'>{title}</h1>
         <span className='product-description'>{description}</span>

         <div className='purchase'>
            <span className='price'>&#8364; {price}</span>
            <div className='order'>

               <button
                  onClick={addedProductHandler}
                  className='btn'>
                  <img style={{ width: 20, heigth: 20 }}
                     className='basket-cart'
                     src={basketCart} alt="cart" /> Add to cart
                  <span className='cart-count'>{cartCount}</span>
               </button>
            </div>
         </div>
         <span className='ordered-item'>Ordered</span>

      </div >
   )
}

export default ProductCard
