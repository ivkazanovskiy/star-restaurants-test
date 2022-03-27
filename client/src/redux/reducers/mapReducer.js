import { PUSH_PLACEMARKS, SET_MAP } from '../actionTypes/mapAT'

const initialState = {
  center: [59.9386, 30.3141],
  myMap: null,
  CustomLayoutClass: null,
  placemarkList: [],
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP:
      return { ...state, myMap: action.payload.myMap, CustomLayoutClass: action.payload.CustomLayoutClass }
    case PUSH_PLACEMARKS:
      return { ...state, placemarkList: state.placemarkList.concat(action.payload) }
    default:
      return state
  }
}
