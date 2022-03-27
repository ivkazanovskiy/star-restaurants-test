import { SET_MAP, PUSH_PLACEMARKS } from '../actionTypes/mapAT'

export const setMap = (myMap, CustomLayoutClass) => {
  return {
    type: SET_MAP,
    payload: { myMap, CustomLayoutClass },
  }
}

export const pushPlacemarks = (placemarks) => {
  return {
    type: PUSH_PLACEMARKS,
    payload: placemarks,
  }
}

