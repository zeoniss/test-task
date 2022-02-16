import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
// import { Provider } from "redux"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
