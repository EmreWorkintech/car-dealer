import { CIKAR, EKLE } from "./action";

export function reducer(state, action) {
  switch (action.type) {
    case EKLE:
      return [...state, action.payload];
    case CIKAR:
      return state.filter((car) => car.id !== action.payload);
    default:
      return state;
  }
}
