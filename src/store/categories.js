const initialState = {
  active: 'food',
  categories: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_categories':
      state = {...state, categories: action.payload}
      return state;
    case 'food':
      state = {...state, active: action.type }
      return state;
    case 'electronics':
      state = {...state, active: action.type};
      return state;
    case 'games':
      state = {...state, active: action.type}
      return state;
    case 'weapons':
      state = {...state, active: action.type}
      return state;
    default: return state;
  }
}

export default reducer;
