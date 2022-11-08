const initialState = {
  products: [
    {
      id: 1,
      category: 'electronics',
      display: 'Laptop',
      normalized: 'laptop',
      description: 'Do things',
      price: 500,
      inventoryCount: 10,
      img: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      category: 'food',
      display: 'Pizza',
      normalized: 'pizza',
      description: 'Mushrooms, Onion, and Sausage',
      price: 5,
      inventoryCount: 1000,
      img: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      category: 'outdoors',
      display: 'Fishing Rod',
      normalized: 'fishing_rod',
      description: 'Catch some fish',
      price: 30,
      inventoryCount: 5,
      img: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ]
}

const reducer = (state=initialState, action) => {
  if(action.type === 'update_product' && action.payload.normalized) {
    const newProducts = state.products.map(product => {
      if(product.normalized !== action.payload.normalized) return product;
      else return action.payload
    });
    return {...state, products: newProducts }
  } else return state;
}

export default reducer;