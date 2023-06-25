import React, { useState } from 'react'

const Price = () => {

   const [price, setPrice] = useState(0);

   const changePriceHandler = (e) => {
      setPrice(e.target.value);

   }
   return (
      <div className='price-wrapper'>
         <label htmlFor="price-range">Price from 0 to {price}</label> <br />
         <input
            type="range"
            onChange={changePriceHandler}
            min={0}
            max={200}
            step={1}
            value={price}
            className='custom-slider'
         />
      </div>
   )
}

export default Price
