import React, { useState } from 'react'
import Categories from './Categories'
import Output from './Output'
import Price from './Price'
import Search from './Search'

const Aside = () => {
   const [searchField, setSearchField] = useState('');

   const [asideSectionData, setAsideSectionData] = useState(null);
   //    {
   //    // country: '',
   // title: '',
   // description: '',
   //    // city: '',
   //    // categories: ['', '', ''],
   //    // price: ''

   // }

   const searchFieldHandler = event => setSearchField(event.target.value);

   const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log(searchField);
   }
   return (
      <form onSubmit={formSubmitHandler} >

         <Categories />
         <Price />
         <Search
            searchField={searchField}
            searchFieldHandler={searchFieldHandler}
         />
         <Output
            asideSectionData={asideSectionData}
         />
      </form>
   )
}

export default Aside
