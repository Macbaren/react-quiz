import { ADD } from './actionTypes'
import { SUB } from './actionTypes'
import { ADD_NUMBER } from './actionTypes'
import { ADD2 } from './actionTypes'

export function add() {
  return {
    type: ADD,
  }
}

export function sub() {
  return {
    type: SUB,
  }
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number,
  }
}

export function asynkAdd(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(number))
    }, 3000)
  }
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number,
  }
}