import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getYandexRestData } from '../helpers/getRestData';
import { prettifyTimetable } from '../helpers/prettifyTimetable';
import RestaurantPhotos from './RestaurantPhotos';



function Restaurant(props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { restList } = useSelector(state => state.dataReducer)
  const currentRest = restList.find(rest => rest.properties.CompanyMetaData.id == id)

  useEffect(() => {
    if (!currentRest) navigate('/')
  }, [currentRest, navigate])
  if (!currentRest) return (<></>)

  const { name, address, phone, timetable } = getYandexRestData(currentRest)
  const schedule = prettifyTimetable(timetable)

  return (
    <div className="w-full h-full flex flex-col gap-4 p-8">
      <h1 className="text-7xl">{name}</h1>
      <h2 className="text-2xl">{address}</h2>
      <span className="">Бронирование по номеру: {phone}</span>
      <div className="flex flex-col">
        {schedule.map(day => <span key={`${id}-${day}`}>{day}</span>)}
      </div>
      <span className="text-sm">Подборка изображений данного ресторана (но это не точно):</span>
      <RestaurantPhotos restInfo={currentRest} />
    </div>
  );
}

export default Restaurant;
