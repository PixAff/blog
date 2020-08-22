export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_ASSET':
      return [...state, action.payload];
    default:
      return state;
  }
}
