import React from 'react'
import { Link } from 'react-router-dom'

import basketCart from '../../../img/Shopping-Cart-Icon.png'


const ProductCard = ({ picture, title, description, price }) => {

   return (
      <div className='product-card'>

         <img style={{ width: 100, heigth: 180 }} src={picture} alt="flowers" />

         <h1 className='product-name'>{title}</h1>
         <span className='product-description'>{description}</span>

         <div className='purchase'>
            <span className='price'>&#8364; {price}</span>
            <div className='order'>
               <Link to='/order-form'>
                  <img style={{ width: 30, heigth: 30 }}
                     className='basket-cart'
                     src={basketCart} alt="cart" />
                  <span className='order-item'>Į krepšelį</span>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
