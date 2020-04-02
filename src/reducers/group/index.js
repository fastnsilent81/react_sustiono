let newState
const group = (state = {
  name: '',
  people: [],
  memberGroup: [],
  searchQuery: {
    username: '',
    email: ''
  }
}, action) => {
  switch (action.type) {
    case 'ON_CHANGE_GROUP_NAME':
      newState = {
        ...state, name: action.name
      }
      return newState
    case 'ON_CHANGE_SEARCH_QUERY':
      newState = {
        ...state, searchQuery: action.searchQuery
      }
      return newState
    case 'ON_CHANGE_PEOPLE':
      newState = {
        ...state, people: action.people
      }
      return newState
    case 'ON_CHANGE_MEMBER_GROUP':
      newState = {
        ...state, memberGroup: action.memberGroup
      }
      return newState
    default:
      return state
  }
}

export default group
