import types from "./types"

export const addProduct = (payload) => ({
  type: types.ADD_PRODUCT,
  payload,
})

// id
export const deleteProduct = (payload) => ({
  type: types.DELETE_PRODUCT,
  payload,
})

export const toggleProduct = (payload) => ({
  type: types.TOGGLE_PRODUCT,
  payload,
})
