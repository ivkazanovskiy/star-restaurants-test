import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { initMap } from '../redux/thunksCreators/mapTC';
import { addPlacemarks } from '../helpers/addPlacemarks';
import { loadRestList } from '../redux/thunksCreators/dataTC';


function MyMapJS() {

  const dispatch = useDispatch()
  const { placemarkList, center, myMap } = useSelector(state => state.mapReducer)
  const { restList } = useSelector(state => state.dataReducer)
  const navigate = useNavigate()

  // инициализация карты при первой сборке компонента
  // либо при переходе к карте со страницы ресторана
  useEffect(() => {
    dispatch(initMap(center, navigate))
  }, [center, dispatch, navigate])

  useEffect(() => {
    // загрузка первых 20ти ресторанов
    if (myMap && restList.length === 0) {
      dispatch(loadRestList())
    }

    // нанесение меток при новом монтировании карты
    if (placemarkList.length > 0) {
      addPlacemarks(placemarkList)
    }
  }, [myMap])

  return (
    <div className="flex flex-col w-full h-full">
      <div id="map" className="w-full h-full shadow-lg"></div>
    </div >

  );
}

export default MyMapJS;
