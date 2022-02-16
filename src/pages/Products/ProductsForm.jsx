import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/products/actions"

const ProductsForm = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const handleChange = (e) => setValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      id: Date.now(),
      text: value,
      created: Date.now(),
      isDone: false,
    }
    dispatch(addProduct(newProduct))
    //після успішного додавання можна очистити форму
    setValue("")
  }
  return (
    <form className='products-form' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create a new product</legend>
        <input type='text' value={value} onChange={handleChange} />
        <button>+ add product</button>
      </fieldset>
    </form>
  )
}

export default ProductsForm
