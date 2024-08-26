/* eslint-disable react/prop-types */
import { ekle } from "../store/action";

function Car(props) {
  const { car, dispatch } = props;

  function handleClick() {
    dispatch(ekle(car));
  }

  return (
    <div className="car-card">
      <span>{car.car_name}</span>
      <button onClick={handleClick}>Kaydet</button>
    </div>
  );
}

export default Car;
