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
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    },
    {
      id: 2,
      category: 'food',
      display: 'Pizza',
      normalized: 'pizza',
      description: 'Mushrooms, Onion, and Sausage',
      price: 5,
      inventoryCount: 1000,
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 3,
      category: 'outdoors',
      display: 'Fishing Rod',
      normalized: 'fishing_rod',
      description: 'Catch some fish',
      price: 30,
      inventoryCount: 5,
      img: 'https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_product':
      const newProducts = state.products.map(product => {
        if (product.normalized !== action.payload.normalized) return product;
        else return action.payload
      });
      return { ...state, products: newProducts }
    default: return state;
  }
}

export default reducer;