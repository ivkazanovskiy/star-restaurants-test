import { store } from "../redux/store"

export const addPlacemarks = (placemarkList) => {
  const { mapReducer: { myMap } } = store.getState()
  for (const placemarkObj of placemarkList) {
    myMap.geoObjects
      .add(placemarkObj.placemark)
  }
}
