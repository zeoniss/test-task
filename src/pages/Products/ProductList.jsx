import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"

const getProducts = (state) => state.products.items

const ProductsList = () => {
  const products = useSelector(getProducts) // todo get from redux

  return (
    <ul className='products-list'>
      {products.map(({ id }) => (
        <ProductItem key={id} id={id} />
      ))}
    </ul>
  )
}

export default ProductsList
