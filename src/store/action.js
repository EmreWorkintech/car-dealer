//action type constant
//action dosyamda tanımladım, reducer'da case'de kullandım
export const EKLE = "Arabaları favorilere ekler";
export const CIKAR = "Arabaları favorilerden çıkartır";

//action object creater function
//burada tanımladım. dispatch edeceğim yerde çalıştırdım.
export function ekle(car) {
  return {
    type: EKLE,
    payload: car,
  };
}

export function cikar(id) {
  return {
    type: CIKAR,
    payload: id,
  };
}
