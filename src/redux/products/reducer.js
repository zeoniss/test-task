import { combineReducers } from "redux"
import types from "./types"

const initialState = {
  items: [
    {
      id: 1,
      text: "do something",
      created: Date.now(),
      isDone: false,
    },
  ],
}

const items = (state = initialState.items, action) => {
  const { type, payload } = action

  switch (type) {
    case types.ADD_PRODUCT:
      return [...state, payload]

    case types.DELETE_PRODUCT:
      return state.filter(({ id }) => id !== payload)

    case types.TOGGLE_PRODUCT:
      return state.map((product) =>
        product.id === payload
          ? {
              ...product,
              isDone: !product.isDone,
            }
          : product
      )

    default:
      return state
  }
}

export default combineReducers({
  items,
})
