import { useSelector, useDispatch } from "react-redux"
import { toggleProduct, deleteProduct } from "../../redux/products/actions"
import moment from "moment"

const getProductItem = (id) => (state) =>
  state.products.items.find((product) => product.id === id)

const ProductItem = ({ id }) => {
  const dispatch = useDispatch()
  const { text, created, isDone } = useSelector(getProductItem(id))
  const handleToggle = () => {
    dispatch(toggleProduct(id))
  }
  const handleDelete = () => {
    dispatch(deleteProduct(id))
  }

  return (
    <li>
      <button onClick={handleDelete}>x </button>
      <p>text: {text}</p>
      <p>created: {moment(created).format("YYYY/MM/DD hh:mm:ss")}</p>
      <label>
        <span>something for check</span>
        <input type='checkbox' checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  )
}

export default ProductItem
