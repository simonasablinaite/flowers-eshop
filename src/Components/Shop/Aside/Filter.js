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
               {/* {countryList.map((item, index) => (
                  // console.log(item.country),
                  // console.log(item.region),
                  // console.log(item.cities.map(city => city))
               ))} */}


               <form>
                  <div className='choose-region-wrapper'>
                     <h3>Choose region</h3> <br />
                     <label htmlFor="choose-region"></label>
                     <select name="coutry" id="coutry">
                        <option value='country'>Salis</option>
                     </select>

                     <select name="region" id="region">
                        <option value="region">Regionas</option>
                     </select>

                     <select name="cities" id="cities">
                        <option value="cities">Cities</option>
                     </select>
                  </div>

               </form>
            </div >
         </div>
      </>
   )
}

export default Filter
