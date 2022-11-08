const initialState = {
  products: {
    laptop: {
      category: 'electronics',
      productName: 'Laptop',
      normalized: 'laptop',
      description: 'Do things',
      price: 500,
      inventoryCount: 10,
    },
    pizza: {
      category: 'food',
      productName: 'Pizza',
      normalized: 'pizza',
      description: 'Mushrooms, Onion, and Sausage',
      price: 5,
      inventoryCount: 1000,
    },
    fishing_rod: {
      category: 'outdoors',
      productName: 'Fishing Rod',
      normalized: 'fishing_rod',
      description: 'Catch some fish',
      price: 30,
      inventoryCount: 5,
    },
  }
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'increment_inventory':
      state = {...state, [action.payload.normalized]: action.payload}
      return state;
    case 'decrement_inventory':
      state = {...state, [action.payload.normalized]: action.payload}
      return state;
    default: return state;
  }
}

export default reducer;