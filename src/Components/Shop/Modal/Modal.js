import React from 'react'
import { Link } from 'react-router-dom';
import ShopPage from '../../../pages/ShopPage/ShopPage';

const Modal = () => {
   return (
      <div>
         <h3>The product has been successfully added to the cart</h3>

         <Link to='/shop'>{<ShopPage />}</Link>

         <button className='btn'>Buy</button>
      </div>
   )
}

export default Modal
