
import { addPlacemarks } from '../../helpers/addPlacemarks'
import { getYandexRestData } from '../../helpers/getRestData'
import {  setMap,  pushPlacemarks } from '../actionCreators/mapAC'
import { store } from '../store'

export const initMap = (center, navigate) => {
  return async (dispatch) => {

    window.ymaps.ready(() => {
      const myMap = new window.ymaps.Map("map", {
        center,
        zoom: 13
      });

      const balloonContent = [
        '<div>',
        `<strong>{{properties.name}}</strong>`,
        '<br/>',
        `{{properties.address}}`,
        '<br/>',
        `{{properties.hours}}`,
        '<br/>',
        `<i>{{properties.phone}}</i>`,
        '<br/>',
        `<button class="balloon-btn" id="btn-{{properties.restId}}">Подробнее</button>`,
        '</div>'
      ].join('')

      const CustomLayoutClass = window.ymaps.templateLayoutFactory.createClass(balloonContent,
        {
          build: function () {
            const { restId } = this._data.properties._data
            CustomLayoutClass.superclass.build.call(this);
            document.getElementById(`btn-${restId}`).addEventListener('click', () => navigate(`/restaurant/${restId}`));
          },
          clear: function () {
            const { restId } = this._data.properties._data
            const thisBtn = document.getElementById(`btn-${restId}`)
            thisBtn?.removeEventListener('click', () => navigate(`/restaurant/${restId}`));
            CustomLayoutClass.superclass.clear.call(this);
          },
        })

      dispatch(setMap(myMap, CustomLayoutClass));
    })
  }
}

export const createPlacemarks = (restList) => {
  return async (dispatch) => {

    const {
      mapReducer: { CustomLayoutClass }
    } = store.getState()

    const placemarkList = restList.map(rest => {
      const restId = rest.properties.CompanyMetaData.id
      const { lat, lon, name, address, hours, phone } = getYandexRestData(rest)

      const placemark = new window.ymaps.Placemark([lat, lon],
        {
          name, address, hours, phone, restId
        }, {
        balloonContentLayout: CustomLayoutClass,
        balloonPanelMaxMapArea: 0,
        preset: 'islands#blueFoodIcon',
      });
      return { restId, placemark }
    })
    dispatch(pushPlacemarks(placemarkList));
    addPlacemarks(placemarkList)
  }
}
