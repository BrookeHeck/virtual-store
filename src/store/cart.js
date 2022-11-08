const initialState = {
  numberOfItems: 0,
  productList: [],
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'add_product':
      state = {
        numberOfItems: state.numberOfItems + 1,
        productList: [...state.productList, action.payload.product]}
      return state;
    case 'remove_product':
      state = {
        numberOfItems: state.numberOfItems - 1,
        productList: state.productList.filter(product => product.id === action.payload.product.id),
      }
      return state;
    case 'clear_cart':
      state = {numberOfItems: 0, productList: []}
      return state;
    default: return state;
  }
}

export default reducer;

