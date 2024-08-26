/* eslint-disable react/prop-types */

import { cikar } from "../store/action";

function Favs(props) {
  const { favs, dispatch } = props;

  return (
    <div>
      {favs.map((fav, index) => {
        return (
          <div key={index} className="car-card">
            <span>{fav.car_name}</span>
            <button onClick={() => dispatch(cikar(fav.id))}>Sil</button>
          </div>
        );
      })}
    </div>
  );
}

export default Favs;
