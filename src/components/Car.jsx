/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { ekle } from "../store/actions/favActions";
import { carCikar } from "../store/actions/carActions";

function Car(props) {
  const { car } = props;
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(ekle(car));
    dispatch(carCikar(car.id));
  }

  return (
    <div className="car-card">
      <span>{car.car_name}</span>
      <button onClick={handleClick}>Kaydet</button>
    </div>
  );
}

export default Car;
