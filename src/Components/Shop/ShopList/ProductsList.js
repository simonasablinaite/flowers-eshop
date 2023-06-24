import ProductCard from './ProductCard'
import puokste_1 from '../../../img/puokste-1.jpg'
import puokste_2 from '../../../img/puokste-2.jpg'
import puokste_3 from '../../../img/puokste-3.jpg'
import puokste_4 from '../../../img/puokste-4.jpg'
import puokste_5 from '../../../img/puokste-5.jpg'
import puokste_6 from '../../../img/puokste-6.jpg'


const ProductsList = () => {

   const productCardData = [
      {
         picture: puokste_1,
         title: 'Pavasarinių gėlių puokštė',
         description: 'Puokštę sudaro daug, įvairių pavasarinių gėlių',
         price: 50,
      },
      {
         picture: puokste_2,
         title: 'Bouquet of gerberas',
         description: '',
         price: 25,
      },
      {
         picture: puokste_3,
         title: 'Puokštė 3',
         description: 'Red, yellow and orange floral botanical flower bouquets. Wild spring leaf isolated. ',
         price: 45,
      },
      {
         picture: puokste_4,
         title: 'Puokštė 4',
         description: 'Aprašymas 4',
         price: 125,
      },
      {
         picture: puokste_5,
         title: 'Floral composition in glass',
         description: 'Floral composition in glass, transparent vase: red roses, orchids, red gerbera daisies.',
         price: 35,
      },
      {
         picture: puokste_6,
         title: 'Red roses bouquete',
         description: 'Bouquet of red roses on yellow paper',
         price: 170,
      }
   ]

   return (
      <div className='product-list'>
         {productCardData.map((product, index) => (
            <ProductCard
               key={index}
               picture={product.picture}
               title={product.title}
               description={product.description}
               price={product.price}
            />
         )

         )}
      </div>
   )
}

export default ProductsList
