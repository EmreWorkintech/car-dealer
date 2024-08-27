import { CAR_CIKAR, CAR_RESET } from "../actions/carActions";
import { carData } from "../../sahteVeri";

const initialState = {
  cars: carData,
};

export function carReducer(state = initialState, action) {
  switch (action.type) {
    case CAR_RESET:
      return initialState;
    case CAR_CIKAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
}
