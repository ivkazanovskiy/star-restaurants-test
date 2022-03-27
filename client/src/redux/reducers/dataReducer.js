import { INCREASE_SKIP, PUSH_RESTS, START_LOADING, STOP_LOADING } from "../actionTypes/dataAT"

const initialState = {
  isLoading: false,
  restList: [],
  loadingPack: 20,
  skip: 0,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_RESTS:
      const loadedRests = action.payload
      const newUniqueRests = loadedRests.filter(newRest => {
        const newId = newRest.properties.CompanyMetaData.id
        const isRepeated = state.restList.find(oldRest => oldRest.properties.CompanyMetaData.id === newId)
        return !isRepeated
      });
      return { ...state, restList: state.restList.concat(newUniqueRests) }
    case INCREASE_SKIP:
      return { ...state, skip: state.skip + action.payload }
    case START_LOADING:
      return { ...state, isLoading: true }
    case STOP_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
