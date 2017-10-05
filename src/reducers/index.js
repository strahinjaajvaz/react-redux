import {
  ADD_NAME,
  REMOVE_NAME,
  ADD_AGE,
  RESET_AGE,
  REMOVE_HOBBY,
  ADD_HOBBY
} from '../actions/index'

const defaultState = {
  person: {
    age: 21,
    name: "John Smith",
    hobbies: {
      safe: ['bicycling', 'fishing', 'camping'],
      dangerous: ['hunting', 'dragracing']
    }
  }
}

function updatePerson(state = defaultState, action) {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        ['name']: action.name
      }
    case REMOVE_NAME:
      return {
        ...state,
        ['name']: null
      }
    default: return state
  }
}

export default updatePerson