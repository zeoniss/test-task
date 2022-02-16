import { NavLink } from "react-router-dom"
import routes from "../routes"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  active: {
    backgroundColor: "blue",
    color: "white",
  },
})

const Menu = () => {
  const classes = useStyles()
  return (
    <div className='menu'>
      <p>Menu</p>
      {routes.map(({ path, label }) => (
        <NavLink activeClassName={classes.active} key={path} to={path}>
          {label}
        </NavLink>
      ))}
      {/* <Link to='/products'>Products</Link>
      <Link to='/homepage'>Home page</Link> */}
    </div>
  )
}
export default Menu
