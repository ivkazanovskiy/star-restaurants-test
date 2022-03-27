import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadRestList } from '../redux/thunksCreators/dataTC';
import RestaurantLi from './RestaurantLi';

function RestaurantList(props) {

  const dispatch = useDispatch()
  const { restList } = useSelector(state => state.dataReducer)

  return (
    <aside className="basis-1/3 h-full" aria-label="Sidebar">
      <div className="h-full w-full flex flex-col py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <Link to="/" className="flex gap-2 items-center pl-2.5 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Карта</span>
        </Link>
        <ul onScroll={(event) => {
          const scroll = event.target
          if ((scroll.scrollHeight - scroll.scrollTop === scroll.clientHeight)) {
            dispatch(loadRestList())
          }
        }}
          className="space-y-2 overflow-y-auto h-full">
          {restList.length > 0 &&
            restList.map(restInfo => <RestaurantLi key={restInfo.properties.CompanyMetaData.id} restInfo={restInfo} />)
          }
          <li className="text-center h-10">
            <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </li>
        </ul>
      </div>
    </aside >
  );
}

export default RestaurantList;
