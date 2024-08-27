import { CIKAR, EKLE } from "../actions/favActions";

const initialState = {
  favs: [],
};

export function favReducer(state = initialState, action) {
  switch (action.type) {
    case EKLE:
      return { ...state, favs: [...state.favs, action.payload] };
    case CIKAR:
      return {
        ...state,
        favs: state.favs.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
}
