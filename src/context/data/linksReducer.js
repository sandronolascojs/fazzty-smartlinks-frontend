export const linksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINK':
      return {
        ...state,
        links: [...state.links, action.payload]
      }
    case 'DELETE_LINK':
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload.id)
      }
    case 'UPDATE_LINK':
      return {
        ...state,
        links: state.links.map(link => link.id === action.payload.id ? action.payload : link)
      }
    case 'GET_LINKS':
      return {
        ...state,
        links: action.payload
      }
    default:
      return state
  }
}
