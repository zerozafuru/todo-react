import { filters } from '../actions'

const filtered = (state = filters.ALL, action) => {
  switch (action.type) {
    case 'FILTER_SET':
      return action.filters
    default:
      return state
  }
}

export default filtered