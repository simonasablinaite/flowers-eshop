import axios from 'axios'
import ProductCard from './ProductCard'
// import puokste_1 from '../../../img/puokste-1.jpg'
// import puokste_2 from '../../../img/puokste-2.jpg'
// import puokste_3 from '../../../img/puokste-3.jpg'
// import puokste_4 from '../../../img/puokste-4.jpg'
// import puokste_5 from '../../../img/puokste-5.jpg'
// import puokste_6 from '../../../img/puokste-6.jpg'
import { API_URL } from '../../../config.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {

   const [newProducts, setNewProducts] = useState([]);

   useEffect(() => {
      fetch(`${API_URL}/products`)
         .then(res => res.json())
         .then(data => setNewProducts(data));
   }, [])
   // const productCardData = [
   //    {
   //       picture: puokste_1,
   //       title: 'Spring flowers bouquet',
   //       description: 'The bouquet consists of many different spring flowers',
   //       price: 50,
   //    },
   //    {
   //       picture: puokste_2,
   //       title: 'Bouquet of gerberas',
   //       description: '',
   //       price: 25,
   //    },
   //    {
   //       picture: puokste_3,
   //       title: 'Festive bouquet',
   //       description: 'Red, yellow and orange floral botanical flower bouquet. Wild spring leaf isolated. ',
   //       price: 45,
   //    },
   //    {
   //       picture: puokste_4,
   //       title: 'Pink and green flowers bouquet',
   //       description: 'Pink roses, yellow smaller gerberas and a lot of green akcents',
   //       price: 125,
   //    },
   //    {
   //       picture: puokste_5,
   //       title: 'Floral composition in glass',
   //       description: 'Floral composition in glass, transparent vase: red roses, orchids, red gerbera daisies.',
   //       price: 35,
   //    },
   //    {
   //       picture: puokste_6,
   //       title: 'Red roses bouquete',
   //       description: 'Bouquet of red roses on yellow paper',
   //       price: 170,
   //    }
   // ]

   return (
      <div className='product-list'>

         <ul>
            {newProducts.map(product => <li key={product.id}>
               <Link to={'/product'}>{product.title}</Link></li>)}
         </ul>





         {/* {newProducts.map((product, index) => (
            <ProductCard
               key={index}
               picture={product.picture}
               title={product.title}
               description={product.description}
               price={product.price}
            />
         )

         )} */}
      </div>
   )
}

export default ProductsList
