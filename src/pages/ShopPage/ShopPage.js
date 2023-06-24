import React from 'react'
import Filter from '../../Components/Shop/Aside/Filter'
import ShopList from '../../Components/Shop/ShopList/ShopList'



const ShopPage = () => {
   return (
      <div className='shop-wrapper'>
         <aside>
            <Filter />
         </aside>

         <div className='shops-list'>
            <ShopList />
         </div>
      </div>
   )
}

export default ShopPage
