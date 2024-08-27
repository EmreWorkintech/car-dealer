import "./App.css";
import Car from "./components/Car.jsx";

import Favs from "./components/Favs.jsx";
import { useSelector } from "react-redux";

function App() {
  const cars = useSelector((store) => store.carStore.cars);

  return (
    <>
      <h1>Reducer Pattern</h1>
      <div className="container">
        <div>
          <h2>Car List</h2>
          {cars.map((car) => {
            return <Car car={car} key={car.id} />;
          })}
        </div>
        <div>
          <h2>My Favorites</h2>
          <Favs />
        </div>
      </div>
    </>
  );
}

export default App;
