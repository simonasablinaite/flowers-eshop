import React from 'react'
import Aside from '../../Components/Shop/Aside/Aside'
import ProductsList from '../../Components/Shop/ShopList/ProductsList'


const ShopPage = () => {
   return (
      <div className='shop-wrapper'>
         <aside>
            <Aside />
         </aside>

         <div className='shops-list'>
            <ProductsList />
         </div>
      </div>
   )
}

export default ShopPage
