import React from 'react'
import Categories from './Categories'
import Filter from './Filter'
import Price from './Price'
import Search from './Search'

const Aside = () => {

   return (
      <form >
         <Filter />
         <Categories />
         <Price />
         <Search />

      </form>
   )
}

export default Aside
