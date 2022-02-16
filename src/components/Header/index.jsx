import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import styles from "./styles.module.scss"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import Badge from "@mui/material/Badge"
import IconButton from "@material-ui/core/IconButton"
import { getCart } from "../../utils/productsApi"

const getCountProduct = (state) => state.products.items.length

const Header = () => {
  const [cart, setCart] = useState([])
  const count = useSelector(getCountProduct)
  useEffect(() => {
    getCart().then((data) => setCart(data))
  }, [])

  return (
    <div className={styles.header}>
      <p>Header</p>

      <IconButton>
        <Badge badgeContent={count} color='primary'>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  )
}
export default Header
