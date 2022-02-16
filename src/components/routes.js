import { lazy } from "react"

const Products = lazy(() =>
  import("../pages/Products" /*webpackChunkName: "Products" */)
)

export const routes = [
  {
    path: "/products",
    label: "Products",
    component: Products,
    exact: true,
    showInMenu: true,
  },
]
export default routes
