export const ADD_NAME = "ADD_NAME"
export const REMOVE_NAME = "REMOVE_NAME"
export const ADD_AGE = 'ADD_AGE'
export const RESET_AGE = "RESET_AGE"
export const ADD_HOBBY = 'ADD_HOBBY'
export const REMOVE_HOBBY = "REMOVE_HOBBY"

export function addName(name) {
  return {
    type: ADD_NAME,
    name
  }
}

export function removeName(name) {
  return {
    type: REMOVE_NAME,
    name
  }
}

export function addAge(age) {
  return {
    type: ADD_AGE,
    age
  }
}

export function resetAGe(age) {
  return {
    type: RESET_AGE,
    age
  }
}

export function addHobbies(hobby){
  return {
    type: ADD_HOBBY,
    hobby
  }
}

export function removeHobbies(hobby){
  return {
    type: REMOVE_HOBBY,
    hobby
  }
}