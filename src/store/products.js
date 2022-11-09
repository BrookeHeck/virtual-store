const initialState = {
  products: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_product':
      const newProducts = state.products.map(product => {
        if (product.normalized !== action.payload.normalized) return product;
        else return action.payload
      });
      return { ...state, products: newProducts }
    case 'get_products':
      return {...state, products: action.payload}
    default: return state;
  }
}

export default reducer;