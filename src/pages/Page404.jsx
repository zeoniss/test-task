// import { Link } from "react-router-dom" переход с использованием компонента Link
import { useHistory } from "react-router-dom"

const Page404 = () => {
  const history = useHistory()
  const handleGoHome = () => {
    history.push("/")
  }
  return (
    <div className='404'>
      <h2>404</h2>
      <p>Page not found</p>

      <button onClick={handleGoHome}>Go Home</button>
      {/* <Link to='/'>Go home</Link> */}
    </div>
  )
}
export default Page404
