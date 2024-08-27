import { useDispatch, useSelector } from "react-redux";
import { cikar } from "../store/actions/favActions";

function Favs() {
  const favs = useSelector((store) => store.favStore.favs);
  const dispatch = useDispatch();

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
