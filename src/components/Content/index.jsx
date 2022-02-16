import { Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import routes from "../routes"
import Page404 from "../../pages/Page404"
const Content = () => {
  return (
    <div className='content'>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route path={path} exact={exact} component={Component} />
          ))}
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </div>
  )
}
export default Content
