import React from 'react'
import Filter from '../../Components/Filter'

const ShopPage = () => {
   return (
      <div className='shop-wrapper'>
         <aside>
            <Filter />
         </aside>

         <div className='shops-list'>
            <h1>SHOPS card</h1>
         </div>
      </div>
   )
}

export default ShopPage
