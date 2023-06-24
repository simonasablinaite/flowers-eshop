import React from 'react'
import ShopCard from './ShopCard'

const ShopList = () => {
   const shopCardData = [
      {
         title: 'Puokštė 1',
         description: 'Aprašymas 1',
         price: 50,
      },
      {
         title: 'Puokštė 2',
         description: 'Aprašymas 2',
         price: 25,
      },
      {
         title: 'Puokštė 3',
         description: 'Aprašymas 3',
         price: 15,
      },
      {
         title: 'Puokštė 4',
         description: 'Aprašymas 4',
         price: 125,
      }
   ]

   return (
      <div className='shop-list-wrapper'>
         <ul>
            {shopCardData.map((card, index) => (
               <li>
                  <ShopCard
                     key={index}
                     title={card.title}
                     description={card.description}
                     price={card.price}
                  />
               </li>
            ))}

         </ul>
      </div>
   )
}

export default ShopList
