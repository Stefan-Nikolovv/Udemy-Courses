import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [serachParms, setSearchParams] = useSearchParams();

  const lat = serachParms.get("lat");
  const lng = serachParms.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
