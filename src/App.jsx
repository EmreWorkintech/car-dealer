import { useState, useReducer } from "react";
import "./App.css";
import { carData } from "./sahteVeri";
import Car from "./components/Car.jsx";
import { reducer } from "./store/reducer.js";
import Favs from "./components/Favs.jsx";

function App() {
  const [cars] = useState(carData);
  const [favs, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1>Reducer Pattern</h1>
      <div className="container">
        <div>
          <h2>Car List</h2>
          {cars.map((car) => {
            return <Car car={car} key={car.id} dispatch={dispatch} />;
          })}
        </div>
        <div>
          <h2>My Favorites</h2>
          <Favs favs={favs} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

export default App;
