import { Route, Routes } from "react-router-dom";
import MyMap from "./components/MyMap";
import Restaurant from "./components/Restaurant";
import RestaurantList from "./components/RestaurantList";



function App() {
  return (
    <>
      <RestaurantList />
      <Routes>
        <Route path="/" element={<MyMap />} />,
        <Route path="/restaurant/:id" element={<Restaurant />} />,
      </Routes>
    </>
  );
}

export default App;
