import { useSearchParams } from "react-router-dom";

export function useUrlPostion() {
  const [serachParms] = useSearchParams();
  const lat = serachParms.get("lat");
  const lng = serachParms.get("lng");

  return [lat, lng];
}
