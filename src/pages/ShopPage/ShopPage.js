import React from 'react'
import Filter from '../../Components/Shop/Aside/Filter'
import ProductsList from '../../Components/Shop/ShopList/ProductsList'


const ShopPage = () => {
   return (
      <div className='shop-wrapper'>
         <aside>
            <Filter />
         </aside>

         <div className='shops-list'>
            <ProductsList />
         </div>
      </div>
   )
}

export default ShopPage
