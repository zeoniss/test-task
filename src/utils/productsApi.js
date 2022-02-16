import axios from "axios"

axios.defaults.baseURL = "http://localhost:4040"

export const getProducts = () =>
  //axios возращает готовые данные в json
  axios.get("/products").then(({ data }) => data)

//payload - то что нужно отправить на сервер

export const addProduct = (payload) =>
  axios
    .post("/products", payload)
    //ответ с сервера добавим в setState
    .then(({ data }) => data)

export const deleteProduct = (id) =>
  axios.delete(`/products/${id}`).then(({ data }) => data)

export const getCart = () => axios.get("/cart").then(({ data }) => data)
