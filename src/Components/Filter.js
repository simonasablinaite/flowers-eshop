import React from 'react'


const Filter = () => {
   const countryList = [
      {
         country: 'Lietuva',
         region: 'Aukštaitija',
         cities: ['Panevėžys', 'Kėdainiai']
      },
      {
         country: 'Lietuva',
         region: 'Žemaitija',
         cities: ['Šiauliai', 'Palanga']
      },
      {
         country: 'Lietuva',
         region: 'Dzūkija',
         cities: ['Trakai']
      },
      {
         country: 'Lietuva',
         region: 'Mažoji Lietuva',
         cities: ['Klaipėda']
      }
   ];

   return (

      <>
         <div className='filter-wrapper'>
            <div className='region-list'>
               <h2>FILTER</h2>
            </div >
         </div>
      </>
   )
}

export default Filter
