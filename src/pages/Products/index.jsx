import ProductsForm from "./ProductsForm"
import ProductList from "./ProductList"

const Products = () => {
  return (
    <div className='products'>
      <h2>Products</h2>
      <ProductsForm />
      <ProductList />
    </div>
  )
}

export default Products
