import axios from "axios"
import { increaseSkip, pushRests, startLoading, stopLoading } from "../actionCreators/dataAC.js"
import { createPlacemarks } from "./mapTC.js"
import { store } from '../store'

export const loadRestList = () => {
  return async (dispatch) => {
    const {
      mapReducer: { myMap },
      dataReducer: { skip, loadingPack, isLoading }
    } = store.getState()

    if (!myMap || isLoading) return undefined;
    const [[lat1, lon1], [lat2, lon2]] = myMap.getBounds()
    const bbox = `${lon1},${lat1}~${lon2},${lat2}`
    const data = {
      text: 'Ресторан',
      apikey: process.env.REACT_APP_YANDEX_ORGANIZATION_KEY,
      lang: 'ru_RU',
      bbox: bbox,
      type: 'biz',
      results: loadingPack,
      skip: skip,
    }
    const params = (new URLSearchParams(data)).toString()

    try {
      dispatch(startLoading())
      const response = await axios(`https://search-maps.yandex.ru/v1/?${params}`)
      const restList = response.data.features
      setTimeout(() => dispatch(stopLoading()), 1000)
      dispatch(pushRests(restList))
      dispatch(createPlacemarks(restList))
      dispatch(increaseSkip(restList.length))
    } catch (error) {
      console.log(error);
      dispatch(stopLoading())
    }
  }
}


