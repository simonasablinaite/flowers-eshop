import React from 'react'
import Categories from './Categories'
import Filter from './Filter'
import Price from './Price'
import Search from './Search'

const Aside = () => {
   return (
      <div>
         <Filter />
         <Categories />
         <Price />
         <Search />
      </div>
   )
}

export default Aside
