import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function RestaurantLi({ restInfo }) {

  const { pathname } = useLocation();

  const { myMap, placemarkList } = useSelector(state => state.mapReducer)
  const { id } = restInfo.properties.CompanyMetaData
  const { name } = restInfo.properties
  const [lon, lat] = restInfo.geometry.coordinates
  const currentPlacemarkObj = placemarkList.find(placemarkObj => placemarkObj.restId == id)

  return (
    <li>
      <Link to={`restaurant/${id}`} className="flex justify-between items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <span className="ml-3">{name}</span>
        <div className="hover:bg-slate-300 rounded-lg p-[2px]" onClick={(event) => {
          event.preventDefault()
          if (pathname === '/') {
            myMap.setCenter([lat, lon], 17);
            const { balloon } = currentPlacemarkObj.placemark
            balloon.open()
          }
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </Link>
    </li>);
}

export default RestaurantLi;
