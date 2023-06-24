import React from 'react'
import basketCart from '../../../img/basket-cart-icon.png'
import { Link } from 'react-router-dom'

const ShopCard = ({ title, description, price }) => {
   return (
      <div className='shop-card'>
         <img src="" alt="" />
         <h1>{title}</h1>
         <span>{description}</span>
         <div className='purchase'>
            <span className='price'>&#8364; {price}</span>
            <div className='order'>
               <Link>
                  <img src={basketCart} alt="cart"
                  />
                  <span>Dėti į krepšelį </span>
               </Link>

            </div>
         </div>
      </div>
   )
}

export default ShopCard
