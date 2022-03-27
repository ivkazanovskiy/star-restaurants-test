import { INCREASE_SKIP, PUSH_RESTS, START_LOADING, STOP_LOADING } from "../actionTypes/dataAT"

export const pushRests = (restList) => {
  return {
    type: PUSH_RESTS,
    payload: restList
  }
}

export const increaseSkip = (num) => {
  return {
    type: INCREASE_SKIP,
    payload: num
  }
}

export const startLoading = () => {
  return {
    type: START_LOADING,
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  }
}
