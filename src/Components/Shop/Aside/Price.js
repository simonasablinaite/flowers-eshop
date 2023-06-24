import React from 'react'

const Price = () => {
   return (
      <div className='price-wrapper'>
         <label htmlFor="price-range">Price from 0 to 200</label> <br />
         <input type="range" />
      </div>
   )
}

export default Price
