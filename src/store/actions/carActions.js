export const CAR_RESET = "cars listesini sıfırlar";
export const CAR_CIKAR = "Arabaları cars listesinden çıkartır";

//action object creater function
//burada tanımladım. dispatch edeceğim yerde çalıştırdım.
export function carReset() {
  return {
    type: CAR_RESET,
  };
}

export function carCikar(id) {
  return {
    type: CAR_CIKAR,
    payload: id,
  };
}
