const initialState = {
  active: 'all',
  categories: [
    {
      normalized: 'all',
      display: 'All',
      description: 'What a great selection!'
    },
    {
      normalized: 'electronics',
      display: 'Electronics',
      description: 'TVs, Computers, Phones, Accessories, and MORE!',
    },
    {
      normalized: 'food',
      display: 'Food',
      description: 'Yum',
    },
    {
      normalized: 'outdoors',
      display: 'Outdoors',
      description: 'Camping, hiking, and outdoor sports equipment',
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'all':
      state = {...state, active: action.type }
      return state;
    case 'electronics':
      state = {...state, active: action.type};
      return state;
    case 'food':
      state = {...state, active: action.type}
      return state;
    case 'outdoors':
      state = {...state, active: action.type}
      return state;
    default: return state;
  }
}

export default reducer;
